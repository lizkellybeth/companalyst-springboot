package edu.nrao.companalyst;


import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.concurrent.TimeUnit;

import javax.annotation.PostConstruct;

import org.apache.http.HttpEntity;
import org.apache.http.HttpResponse;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.ByteArrayEntity;
import org.apache.http.impl.client.HttpClientBuilder;
import org.apache.http.util.EntityUtils;
import org.json.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


import edu.nrao.companalyst.data.CompanyJob;
import edu.nrao.companalyst.data.CompanyJobDetails;
import edu.nrao.companalyst.data.JobDetailsRepo;
import edu.nrao.companalyst.data.JobSummaryRepo;
import edu.nrao.companalyst.data.JsonUtil;


@RestController
@CrossOrigin(origins = "http://localhost:4200")
@EnableAutoConfiguration
@SpringBootApplication

@ComponentScan({"edu.nrao.companalyst.data"})
@EntityScan("edu.nrao.companalyst.data")
@EnableJpaRepositories("edu.nrao.companalyst.data")
public class CompAnalystController {
	
	@Value("${companalyst.url.getapitoken}")
	private String COMPURL_GETAPITOKEN;
	
	@Value("${companalyst.url.companyjob}")
	private String COMPURL_COMPANYJOB;
    
	@Value("${companalyst.url.companyjoblist}")
	private String COMPURL_COMPANYJOBLIST;
    
	@Value("${companalyst.auth.username}")
    private String username;
    
	@Value("${companalyst.auth.password}")
    private String password;
	
	private AuthToken authToken;
    private String tokenString;
    private Date expireDate;//ignore this, just get a new one
    
	public long MAX_AGE = 12;//hours

	private static HashMap<String, CompanyJobDetails> jobDetailsCache = new HashMap<>();
	private static String joblist;
	
    private static final Logger log = LoggerFactory.getLogger(CompAnalystController.class);
    
    private final static String SEPARATOR= "%7C%7C%7C";
    
    private Date lastJobListUpdate = new Date();
    
    private boolean errorCondition = false;
        
    @Autowired
    private JobDetailsRepo jobDetailsRepo;

    @Autowired
    private JobSummaryRepo jobSummaryRepo;

	public static void main(String[] args) {    
		SpringApplication.run(CompAnalystController.class, args);
		log.info("Running");

	}
	
	public CompAnalystController() {
		super();
	}

	@PostConstruct
	public synchronized void init()  {
		try {
			RefreshCacheRunnable refresher = new RefreshCacheRunnable();
			Thread t = new Thread(refresher);
			t.start();
			
		} catch (Exception e) {
			errorCondition = true;
			e.printStackTrace();
			log.error("initialization failed!", e);
		}
	}
	
    private class RefreshCacheRunnable implements Runnable {
		@Override
		public void run() {
			try {
				syncJobList();
				syncJobDetails();
				lastJobListUpdate = new Date();
				errorCondition = false;
				
			} catch (Exception e) {
				errorCondition = true;
				e.printStackTrace();
				log.error("initialization failed!", e);
			}
		}
    }
	
	private synchronized void syncJobList() throws Exception {
    	log.info("prepareCache...");
		List<CompanyJob> cachedJobs = new ArrayList<>();
    	
		// query jobs already in DB...
		List<CompanyJob> dbJobs = jobSummaryRepo.findAll();
    	
    	// fetch latest data from comp analyst...
    	List<CompanyJob> fetchedJobs =  new ArrayList<>();
		try {
			List<CompanyJob> matches = new ArrayList<>();
			List<CompanyJob> updates = new ArrayList<>();
			List<CompanyJob> deletes = new ArrayList<>();
			List<CompanyJob> insertions = new ArrayList<>();
			String companyJobList = fetchJobList();	
			fetchedJobs = JsonUtil.parseCompanyJobs(companyJobList);	
			for (CompanyJob fetchedJob: fetchedJobs) {
				for (CompanyJob dbJob: dbJobs) {
					if (fetchedJob.equals(dbJob) ) {
						matches.add(fetchedJob);
						String newDt = fetchedJob.getLastUpdateDate();
						String oldDt = dbJob.getLastUpdateDate();
						SimpleDateFormat formatter = new SimpleDateFormat("dd MMM yyyy");
						Date newDate = formatter.parse(newDt);
						Date oldDate = formatter.parse(oldDt);
						if (newDate.after(oldDate)) {
							// an update has occurred
							updates.add(fetchedJob);
							
						} else {
							// no update, do nothing
						}
						
					} else {
						// not a match. Do nothing
					}
				}				
			}
			// save updates
			saveCompanyJobs(updates);

			// new jobs are inserted
			for (CompanyJob fetchedJob: fetchedJobs) {
				if (!matches.contains(fetchedJob)) {
					insertions.add(fetchedJob);
				}				
			}
			saveCompanyJobs(insertions);
			
			// jobs removed upstream at salary.com are marked for deletion in local DB
			for (CompanyJob dbJob: dbJobs) {
				if (!matches.contains(dbJob)) {
					// this has been deleted upstream
					dbJob.setMarkedForDeletion(true);
					deletes.add(dbJob);
				}
			}
			saveCompanyJobs(deletes);
			
			// re-check the repo to get the updates
			dbJobs = jobSummaryRepo.findAll();
			for (CompanyJob job: dbJobs) {
				if (!job.isMarkedForDeletion()) {
					cachedJobs.add(job);
				}
			}			
			
		} catch (Exception e) {
			// problem syncing with salary.com
			e.printStackTrace();
			cachedJobs.addAll(dbJobs);
			joblist = JsonUtil.stringifyJobList(cachedJobs);		
			throw new Exception("problem synching data from salary.com.", e);
		}
		
		joblist = JsonUtil.stringifyJobList(cachedJobs);		
	}

    private synchronized void syncJobDetails() throws Exception {
		// TODO Auto-generated method stub
		List<CompanyJob> jobs = jobSummaryRepo.findAll();
		for (CompanyJob job: jobs) {
			log.info("synching details for job: " + job.getCompanyJobCode() + " || " + job.getCompanyJobTitle());
			String jdmJobDescHistoryID = job.getJDMJobDescHistoryID();
			boolean markedForDeletion = job.isMarkedForDeletion();
			CompanyJobDetails details = jobDetailsRepo.findByJDMJobDescHistoryID(jdmJobDescHistoryID);
			if (markedForDeletion) {
				saveDeleteCompanyJobDetails(details, false);
				CompAnalystController.jobDetailsCache.remove(jdmJobDescHistoryID);
				
			} else {
				String json = null;
				if (details == null) {
					json = fetchCompanyJobDetails(jdmJobDescHistoryID);
					details = JsonUtil.jsonToJobDetails(json);
					details.setCachedDate(new Date());
					saveDeleteCompanyJobDetails(details, true);
				} else {
					if (details.isStale()) {// try to fetch a fresh one...
						json = fetchCompanyJobDetails(jdmJobDescHistoryID);
						if (json != null){// don't delete the cache unless we can fetch a new one!
							saveDeleteCompanyJobDetails(details, false);//delete the old one
							details = JsonUtil.jsonToJobDetails(json);
							details.setCachedDate(new Date());
							saveDeleteCompanyJobDetails(details, true);//save the new one
						}
					}				
				}
				CompAnalystController.jobDetailsCache.put(jdmJobDescHistoryID, details);
			}
		}
	}
    
    private String checkAuthentication() throws Exception {
    	if (authToken == null) {
    		String apiToken = getApiToken();
    	}
    	return null;
    }

	@RequestMapping(value = "/getapitoken", produces = { "application/json" })
    public synchronized String getApiToken() throws Exception {
		log.info("getApiToken()..." );
        try {
            HttpClient client = HttpClientBuilder.create().build();
            HttpPost post = new HttpPost(COMPURL_GETAPITOKEN);
            post.setHeader("Content-Type", "application/json");

            HashMap<String, String> map = new HashMap<String, String>();
			map.put("username", username);	
			map.put("password", password);	
	        JSONObject obj = new JSONObject(map);
	        String json = obj.toString();
	        HttpEntity entity = new ByteArrayEntity(json.getBytes("UTF-8"));
	        post.setEntity(entity);
            
            HttpResponse response = client.execute(post);
            String result = EntityUtils.toString(response.getEntity());
            log.trace("result: " + result); 
            JSONObject jobj = new JSONObject(result);
            tokenString = (String) jobj.get("token");
            String expires = (String) jobj.get("expire_date");
            SimpleDateFormat sdf = new SimpleDateFormat("MM/dd/yyyy hh:mm:ss a");
            expireDate = sdf.parse(expires);
            String output = jobj.toString();
            return output;
            
        } catch (Exception e) {
            e.printStackTrace();
            log.error("could not get API token", e);
            throw new Exception("could not get API token.");
        }
    }

	//example http://localhost:10001/companyjoblist
    @RequestMapping(value = "/companyjoblist", produces = { "application/json" })
    public String getCompanyJobList() throws Exception {
		log.info("getCompanyJobList()..." );
    	if (joblist == null) {
    		log.error("joblist not yet initialized!");
    		init();
    		throw new Exception("joblist not yet initialized!");
    	} else {
    		Date now = new Date();
    	    long diffInMillies = Math.abs(now.getTime() - lastJobListUpdate.getTime());
    	    long diff = TimeUnit.HOURS.convert(diffInMillies, TimeUnit.MILLISECONDS);
    	    if (diff > MAX_AGE) {
    	    	log.warn("joblist is stale!");
    	    	// re-initialize, but don't make the user wait...
    	    	init();
    	    }
    	}
    	return joblist;
    }
    
    //example http://localhost:10001/companyjob?jdmJobDescHistoryID=2877
    @RequestMapping(value = "/companyjob", produces = { "application/json" })
    public String getCompanyJob(@RequestParam(required = true) String jdmJobDescHistoryID) throws Exception {
    	log.info("getCompanyJob() jdmJobDescHistoryID parameter: [" + jdmJobDescHistoryID + "]");
    	
    	//check memory cache
    	CompanyJobDetails cacheDeets = CompAnalystController.jobDetailsCache.get(jdmJobDescHistoryID);
    	CompanyJobDetails dbDeets = null;
    	CompanyJobDetails fetchedDeets = null;
    	
    	boolean needToFetch = false;
    	
    	if ((cacheDeets == null) || (cacheDeets.isStale())){	    		
    		dbDeets = jobDetailsRepo.findByJDMJobDescHistoryID(jdmJobDescHistoryID);   		
    		if (dbDeets == null) {
    			needToFetch = true;
    		} else {
    			if (dbDeets.isStale()) {
        			needToFetch = true;
    			}		
    		}
    		
    		if (needToFetch) {
    			try {
    				String s = fetchCompanyJobDetails(jdmJobDescHistoryID);
    				fetchedDeets = JsonUtil.jsonToJobDetails(s);
    				fetchedDeets.setCachedDate(new Date());
    				
    				if (dbDeets != null) {    
    					//delete the old one
    					saveDeleteCompanyJobDetails(dbDeets, false);
    				}
    				//save the new one
    				dbDeets = saveDeleteCompanyJobDetails(fetchedDeets, true);

    			} catch(Exception e) {
    				// something went wrong: 
    				e.printStackTrace();
    				log.error("something went wrong fetching job details", e);
    				if (dbDeets == null) {
    					throw new Exception("something unrecoverable went wrong fetching job details", e);
    				} 
    			}     	
    		}
        	CompAnalystController.jobDetailsCache.put(jdmJobDescHistoryID, dbDeets);
        	cacheDeets = dbDeets;    		
    	}
    	String json = JsonUtil.stringifyJobDetails(cacheDeets);    	
    	return json;
    }
    
	private String fetchJobList() throws Exception {
		log.info("fetchJobList()...");
    	String url = COMPURL_COMPANYJOBLIST
				+ "?IsReturnLastApprovedVersion=1"
				+ "&IsReturnUDFs=1"
				+ "&ReturnUDFFields=Large%20Functional%20Group" 
					+ SEPARATOR + "Job%20Family" 
					+ SEPARATOR + "FLSA%20Classification" 
					+ SEPARATOR + "Pay%20Grade" 
					+ SEPARATOR + "Organization";
		String companyJobList =  getJson(url);
    	if (companyJobList.indexOf("<!DOCTYPE html>") > -1) {
    		throw new Exception("Problem fetching companyjoblist from CompAnalyst API");
    	}    		
		return companyJobList;
	}
	
	private String fetchCompanyJobDetails(String jdmJobDescHistoryID) throws Exception {
		log.info("--------========= fetchCompanyJobDetails: " + jdmJobDescHistoryID);
		jdmJobDescHistoryID = URLEncoder.encode(jdmJobDescHistoryID, StandardCharsets.UTF_8);
		String url = COMPURL_COMPANYJOB +  jdmJobDescHistoryID;
		String json = this.getJson(url);
		log.trace("fetched jobDetails: " + json);
    	if (json.indexOf("<!DOCTYPE html>") > -1) {
    		throw new Exception("Problem fetching jobDetails from CompAnalyst API");
    	}
    	json = JsonUtil.replaceSpacesInKeys(json);
		return json;
	}


    private synchronized String getJson(String url) throws Exception {
    	log.info("getJson() OUTGOING URL: " + url);
    	HttpClient client = HttpClientBuilder.create().build();
        HttpGet get = new HttpGet(url);
        get.setHeader("Content-Type", "application/json");
        getApiToken();
        get.addHeader("token", tokenString);
        HttpResponse response = client.execute(get);
        String result = EntityUtils.toString(response.getEntity());
        log.info("getJson result: " + result);
        return result;
    }
    
	private synchronized Iterable<CompanyJob> saveCompanyJobs(List<CompanyJob> jobs) {
		Iterable<CompanyJob> saved = jobSummaryRepo.saveAll(jobs);
		return saved;
	}

	private synchronized CompanyJobDetails saveDeleteCompanyJobDetails(CompanyJobDetails jobDetails, boolean save) {
		if (save) {
			CompanyJobDetails saved = jobDetailsRepo.save(jobDetails);
			return saved;		
			
		} else {
			jobDetailsRepo.delete(jobDetails);
			return null;
		}

	}

} 