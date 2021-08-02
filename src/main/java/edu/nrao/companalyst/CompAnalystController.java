package edu.nrao.companalyst;


import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;

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
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


@RestController
@CrossOrigin(origins = "http://localhost:4200")
@EnableAutoConfiguration
@SpringBootApplication
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
    
	private static HashMap<String, String> cache = new HashMap<>();
	
    private static final Logger log = LoggerFactory.getLogger(CompAnalystController.class);
    
    //@Autowired
    //private static CompanyJobRepository repository;

	public static void main(String[] args) {    
		SpringApplication.run(CompAnalystController.class, args);
		System.out.println("Running");
		/**
		CompanyJob job = new CompanyJob();
		job.setCompanyJobCode("foo");
		job.setCompanyJobDesc("gathering and sorting foo");
		job.setCompanyJobTitle("Foomeister");
		job.setJobFlsaStatus("Exempt");
		job.setJobLevel("Upper Echelon");
		
		CompAnalystController.repository.save(job);
		System.out.println("saved");
		**/
	}

    @RequestMapping(value = "/getapitoken", produces = { "application/json" })
    public String getApiToken() {
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

    //example http://localhost:8080/companyjob?jobcode=FN5502
    @RequestMapping(value = "/companyjob", produces = { "application/json" })
    public String getCompanyJob(@RequestParam(required = true) String jobcode) throws Exception {
    	System.out.println("getCompanyJob() jobcode parameter: [" + jobcode + "]");
    	String details = CompAnalystController.cache.get(jobcode);
    	if (details == null) {
    		System.out.println("--------========= FETCHING JOB CODE: " + jobcode);
    		jobcode = URLEncoder.encode(jobcode, StandardCharsets.UTF_8);
    		String url = COMPURL_COMPANYJOB +  jobcode;
    		details = this.getJson(url);
            CompAnalystController.cache.put(jobcode, details);
    	}
    	return details;
    }
    
  //example http://localhost:8080/companyjoblist
    @RequestMapping(value = "/companyjoblist", produces = { "application/json" })
    public String getCompanyJobList() throws Exception {
    	System.out.println("companyjoblist");
    	String companyJobList = CompAnalystController.cache.get("companyJobList");
    	if (companyJobList == null) {
    		companyJobList =  getJson(COMPURL_COMPANYJOBLIST);
    		CompAnalystController.cache.put("companyJobList", companyJobList);
    	}	
        return companyJobList;
    }
    
    private String getJson(String url) throws Exception {
    	System.out.println("OUTGOING URL: " + url);
    	HttpClient client = HttpClientBuilder.create().build();
        HttpGet get = new HttpGet(url);
        get.setHeader("Content-Type", "application/json");
        checkApiAuthentication();
        get.addHeader("token", authToken);
        HttpResponse response = client.execute(get);
        String result = EntityUtils.toString(response.getEntity());
        return result;
    }
    
    private String post(String url) throws Exception {
    	HttpClient client = HttpClientBuilder.create().build();
        HttpPost post = new HttpPost(url);
        post.setHeader("Content-Type", "application/json");
        checkApiAuthentication();
        post.addHeader("token", authToken);
        HashMap<String, String> map = buildCompensationJobListParameterMap();
        JSONObject obj = new JSONObject(map);
        String json = obj.toString();
        HttpEntity entity = new ByteArrayEntity(json.getBytes("UTF-8"));
        post.setEntity(entity);
        HttpResponse response = client.execute(post);
        String result = EntityUtils.toString(response.getEntity());
        System.out.println("result: " + result); 	
        return result;
    }
    
	private HashMap<String, String> buildCompensationJobListParameterMap() {
			HashMap<String, String> map = new HashMap<String, String>();
			map.put("JobKeyword", "Job Keyword");	
			/**
			map.put("LCID", null);	
			map.put("JobDesc", null);	
			map.put("CountryCode", null);	
			map.put("EducationKeyword", null);	
			map.put("LicenseKeyword", null);	
			map.put("CertificateKeyword", null);	
			map.put("ReportToKeyword", null);	
			map.put("YOEMin", null);	
			map.put("YOEMax", null);	
			map.put("Location", null);	
			map.put("FTESize", null);	
			map.put("Industry", null);	
		*/
			return map;
	}
    
	private void checkApiAuthentication() {
        Date currDate = new Date();
        if ((authToken == null) || (expireDate == null) || (currDate.after(expireDate))) {
        	expireDate = null;
        	authToken = null;
        	getApiToken();
        }
	}

} 