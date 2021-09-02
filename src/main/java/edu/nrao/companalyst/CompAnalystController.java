package edu.nrao.companalyst;


import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;

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
	    
    private String authToken;
    private Date expireDate;
    
	private static HashMap<String, CompanyJobDetails> jobDetailsCache = new HashMap<>();
	private static String joblist;
	
    private static final Logger log = LoggerFactory.getLogger(CompAnalystController.class);
    
    private final static String SEPARATOR= "%7C%7C%7C";
    
    @Autowired
    private JobDetailsRepo jobDetailsRepo;

    @Autowired
    private JobSummaryRepo jobSummaryRepo;

	public static void main(String[] args) {    
		SpringApplication.run(CompAnalystController.class, args);
		System.out.println("Running");

	}
	
	public CompAnalystController() {
		super();
	}

	@PostConstruct
	public void init()  {
	   syncCache();
	}

    private synchronized void syncCache() {
    	System.out.println("prepareCache...");
		List<CompanyJob> cachedJobs = new ArrayList<>();
    	
		// query jobs already in DB...
		List<CompanyJob> dbJobs = jobSummaryRepo.findAll();
    	
    	// fetch latest data from comp analyst...
    	List<CompanyJob> fJobs =  new ArrayList<>();
		try {
			List<CompanyJob> matches = new ArrayList<>();
			List<CompanyJob> updates = new ArrayList<>();
			List<CompanyJob> deletes = new ArrayList<>();
			List<CompanyJob> insertions = new ArrayList<>();
			String companyJobList = fetchJobList();	
			fJobs = JsonUtil.parseCompanyJobs(companyJobList);	
			for (CompanyJob fJob: fJobs) {
				for (CompanyJob dbJob: dbJobs) {
					if (fJob.equals(dbJob) ) {
						matches.add(fJob);
						String newDt = fJob.getLastUpdateDate();
						String oldDt = dbJob.getLastUpdateDate();
						SimpleDateFormat formatter = new SimpleDateFormat("dd MMM yyyy");
						Date newDate = formatter.parse(newDt);
						Date oldDate = formatter.parse(oldDt);
						if (newDate.after(oldDate)) {
							// an update has occurred
							updates.add(fJob);
							
						} else {
							// no update, do nothing
						}
						
					} else {
						// not a match. Do nothing
					}
				}				
			}
			// save updates
			jobSummaryRepo.saveAll(updates);

			// new jobs are inserted
			for (CompanyJob fJob: fJobs) {
				if (!matches.contains(fJob)) {
					insertions.add(fJob);
				}				
			}
			jobSummaryRepo.saveAll(insertions);
			
			// jobs removed upstream at salary.com are marked for deletion in local DB
			for (CompanyJob dJob: dbJobs) {
				if (!matches.contains(dJob)) {
					// this has been deleted upstream
					deletes.add(dJob);
					dJob.setMarkedForDeletion(true);
				}
			}
			jobSummaryRepo.saveAll(deletes);
			
			// re-check the repo to get updates
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
		}
		
		joblist = JsonUtil.stringifyJobList(cachedJobs);		
	}

	private String fetchJobList() throws Exception {
    	String url = COMPURL_COMPANYJOBLIST
				+ "?IsReturnLastApprovedVersion=1"
				+ "&IsReturnUDFs=1"
				+ "&ReturnUDFFields=Large%20Functional%20Group" 
					+ SEPARATOR + "Job%20Family" 
					+ SEPARATOR + "FLSA%20Classification" 
					+ SEPARATOR + "Organization";
		System.out.println("companyJobList URL: " + url);
		String companyJobList =  getJson(url);
		System.out.println("companyJobList: " + companyJobList);
    	if (companyJobList.indexOf("<!DOCTYPE html>") > -1) {
    		throw new Exception("Problem fetching companyjoblist from CompAnalyst API");
    	}    		
		return companyJobList;
	}
	
	private String fetchCompanyJobDetails(String jdmJobDescHistoryID) throws Exception {
   		System.out.println("--------========= fetchCompanyJobDetails: " + jdmJobDescHistoryID);
		jdmJobDescHistoryID = URLEncoder.encode(jdmJobDescHistoryID, StandardCharsets.UTF_8);
		String url = COMPURL_COMPANYJOB +  jdmJobDescHistoryID;
		String json = this.getJson(url);
		System.out.println("fetched jobDetails: " + json);
    	if (json.indexOf("<!DOCTYPE html>") > -1) {
    		throw new Exception("Problem fetching jobDetails from CompAnalyst API");
    	}
    	json = JsonUtil.replaceSpacesInKeys(json);
		return json;
	}

	@RequestMapping(value = "/getapitoken", produces = { "application/json" })
    public synchronized String getApiToken() {
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
            System.out.println("result: " + result); 
            JSONObject jobj = new JSONObject(result);
            authToken = (String) jobj.get("token");
            String expires = (String) jobj.get("expire_date");
            SimpleDateFormat sdf = new SimpleDateFormat("MM/dd/yyyy hh:mm:ss a");
            expireDate = sdf.parse(expires);
            String output = jobj.toString();
            return output;
            
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

	//example http://localhost:10001/companyjoblist
    @RequestMapping(value = "/companyjoblist", produces = { "application/json" })
    public String getCompanyJobList() throws Exception {
    	if (joblist == null) {
    		syncCache();
    	}
    	return joblist;
    }
    
    //example http://localhost:10001/companyjob?jdmJobDescHistoryID=2877
    @RequestMapping(value = "/companyjob", produces = { "application/json" })
    public String getCompanyJob(@RequestParam(required = true) String jdmJobDescHistoryID) throws Exception {
    	System.out.println("getCompanyJob() jdmJobDescHistoryID parameter: [" + jdmJobDescHistoryID + "]");
    	
    	//check memory cache
    	CompanyJobDetails deets = CompAnalystController.jobDetailsCache.get(jdmJobDescHistoryID);

    	if (deets == null) {	
    		// check DB cache
    		deets = jobDetailsRepo.findByJDMJobDescHistoryID(jdmJobDescHistoryID);
    	}

    	if ((deets == null) || deets.isStale()) {
    		//fetch from salary.com
    		try {
    			String s = fetchCompanyJobDetails(jdmJobDescHistoryID);
    			deets = JsonUtil.jsonToJobDetails(s);
    			deets.setCachedDate(new Date());

    		} catch(Exception e) {
    			e.printStackTrace();
    			throw new Exception("failed to fetch data from salary.com", e);
    		}
    	} 
    	
    	String json = JsonUtil.stringifyJobDetails(deets);
    	CompAnalystController.jobDetailsCache.put(jdmJobDescHistoryID, deets);
    	deets = jobDetailsRepo.save(deets);

    	json = JsonUtil.stringifyJobDetails(deets);    	
    	return json;
    }
    
    private synchronized String getJson(String url) throws Exception {
    	System.out.println("OUTGOING URL: " + url);
    	HttpClient client = HttpClientBuilder.create().build();
        HttpGet get = new HttpGet(url);
        get.setHeader("Content-Type", "application/json");
        checkApiAuthentication();
        get.addHeader("token", authToken);
        HttpResponse response = client.execute(get);
        String result = EntityUtils.toString(response.getEntity());
        System.out.println("getJson result: " + result);
        return result;
    }
    
	private void checkApiAuthentication() {
        getApiToken();
	}
	


} 