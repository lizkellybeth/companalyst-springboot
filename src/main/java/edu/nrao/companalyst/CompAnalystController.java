package edu.nrao.companalyst;


import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import java.text.ParseException;
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
    
	public long MAX_AGE = 24;//hours

	private static HashMap<String, CompanyJobDetails> jobDetailsCache = new HashMap<>();
	private static String joblist;
	
    private static final Logger log = LoggerFactory.getLogger(CompAnalystController.class);
    
    private final static String SEPARATOR= "%7C%7C%7C";
    
    private Date lastJobListUpdate = new Date();
    
    private volatile boolean initIsRunning = true;
        
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
	public synchronized void init() throws Exception  {
    	log.info("PostConstruct - init()..." );
		Thread t = new Thread(new RefreshCacheRunnable());
		t.start();			
	}
	
    private class RefreshCacheRunnable implements Runnable {
		@Override
		public void run() {
			doInit();
		}
		private synchronized void doInit() {
			try {
				log.info("RefreshCacheRunnable.doInit() thread...");
				initIsRunning = true;
				syncJobList();
				syncJobDetails();
				lastJobListUpdate = new Date();
				initIsRunning = false;
				
			} catch (Exception e) {
				initIsRunning = false;
				e.printStackTrace();
				log.error("initialization failed!", e);
			}
		}
    }
	
	//provides a way to initialize the cache on demand, without restarting, sets MAX_AGE (hours) for cache
	@RequestMapping(value = "/initcache", produces = { "text/plain" })
    public String initcache(@RequestParam(required = false) Long maxage) {
    	log.info("initcache() maxage parameter: [" + maxage + "]");
		try {
	    	if ((maxage != null) && (maxage > 0)) {
	    		MAX_AGE = maxage;
	    	}
	    	if (!initIsRunning) {
	    		log.info("initcache() starting new RefreshCacheRunnable thread...");
	    		Thread t = new Thread(new RefreshCacheRunnable());
	    		t.start();			
	    	} else {
	    		log.info("initcache() - RefreshCacheRunnable thread already running.");
	    	}
			
		} catch (Exception e) {
			e.printStackTrace();
			log.error("initcache error", e);
			return e.toString();
		}
		String out = "MAX_AGE: " + MAX_AGE;
		return out;
    }
    
	//example http://localhost:10001/companyjoblist
    @RequestMapping(value = "/companyjoblist", produces = { "application/json" })
    public String getCompanyJobList() throws Exception {
		log.info("getCompanyJobList()..." );
    	if (joblist == null) {
    		log.error("something is wrong! joblist not yet initialized!");
	    	Thread t = new Thread(new RefreshCacheRunnable());
	    	t.start();

    	} else {
    		Date now = new Date();
    	    long diffInMillies = Math.abs(now.getTime() - lastJobListUpdate.getTime());
    	    long diff = TimeUnit.HOURS.convert(diffInMillies, TimeUnit.MILLISECONDS);
    	    if (diff > MAX_AGE) {
    	    	log.warn("joblist is stale!");
    	    	// re-initialize, but don't make the user wait...
    	    	Thread t = new Thread(new RefreshCacheRunnable());
    	    	t.start();
    	    }
    	}
    	return joblist;
    }
    
    //example http://localhost:10001/companyjob?jdmJobDescHistoryID=2877
    @RequestMapping(value = "/companyjob", produces = { "application/json" })
    public String getCompanyJob(@RequestParam(required = true) String jdmJobDescHistoryID) throws Exception {
    	log.info(" =========  getCompanyJob() jdmJobDescHistoryID parameter: [" + jdmJobDescHistoryID + "]");
    	
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
    		
			log.info("fetchCompanyJobDetails: needToFetch|initFinished" + needToFetch + " | " + initIsRunning);
    		if (needToFetch && (!initIsRunning) ) {
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
        	
    	} else {
			log.info(" =========  getCompanyJob() from CACHE");
    	}
    	String json = JsonUtil.stringifyJobDetails(cacheDeets);    	
    	return json;
    }
    
	private synchronized void syncJobList() throws Exception {
    	log.info("syncJobList...");
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
    	log.info("syncJobDetails...");
		List<CompanyJob> jobs = jobSummaryRepo.findAll();
		for (CompanyJob job: jobs) {
			try {
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
				
			} catch (Exception e) {
				e.printStackTrace();
				log.error("Error synching job details for :" + job.getJDMJobDescHistoryID());
			}
			Thread.sleep(200);
		}
	}
    	
    private synchronized String checkAuthentication() throws Exception {
		log.info("checkAuthentication()..." );
    	if (authToken == null || authToken.isExpired()) {
    		authToken = fetchApiToken();
    	}
    	JSONObject obj = new JSONObject(authToken);
    	String resp = obj.toString();
    	return resp;
    }
    
    private synchronized AuthToken fetchApiToken() throws Exception {
		log.info("fetchApiToken()..." );
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
		AuthToken token = new AuthToken(tokenString, expireDate);
		return token;
	}

	private synchronized String fetchJobList() throws Exception {
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
		return companyJobList;
	}
	
	private synchronized String fetchCompanyJobDetails(String jdmJobDescHistoryID) throws Exception {
		log.info("--------========= fetchCompanyJobDetails: " + jdmJobDescHistoryID);
		jdmJobDescHistoryID = URLEncoder.encode(jdmJobDescHistoryID, StandardCharsets.UTF_8);
		String url = COMPURL_COMPANYJOB +  jdmJobDescHistoryID;
		String json = this.getJson(url);
		log.debug("fetched jobDetails: " + json);
    	json = JsonUtil.replaceSpacesInKeys(json);
		return json;
	}


    private synchronized String getJson(String url) throws Exception {
    	log.debug("getJson() OUTGOING URL: " + url);
    	HttpClient client = HttpClientBuilder.create().build();
        HttpGet get = new HttpGet(url);
        get.setHeader("Content-Type", "application/json");
        checkAuthentication();
        get.addHeader("token", tokenString);
        HttpResponse response = client.execute(get);
        int code = response.getStatusLine().getStatusCode();
        if (code != 200) {
        	throw new Exception("Exception code in HTTP response: " + code);
        }
        String result = EntityUtils.toString(response.getEntity());
        log.debug("getJson result: " + result);
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