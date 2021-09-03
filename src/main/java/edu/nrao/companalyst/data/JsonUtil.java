package edu.nrao.companalyst.data;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Hashtable;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import org.json.JSONArray;
import org.json.JSONObject;



public class JsonUtil {
 
	public static String replaceSpacesInKeys(String json ) {		
		JSONObject obj = new JSONObject(json);
		Iterator<String> keys = obj.keys();
		Hashtable<String, String> data = new Hashtable<>();
		while (keys.hasNext()) {
			String dirty = keys.next();
			//System.out.println(dirty);
			String clean = dirty.replace(" " , "_");
			Object val = obj.get(dirty);
			data.put(clean, String.valueOf(val));
		}
		JSONObject obj2 = new JSONObject(data);
		String json2 = obj2.toString();
		//System.out.println("JsonUtil.replaceSpacesInKeys() ->" + json2);
		return json2;
	}
	
	public static CompanyJobDetails jsonToJobDetails(String json) {
		json = JsonUtil.replaceSpacesInKeys(json);
		JSONObject jobj = new JSONObject(json);
		Map map = jobj.toMap();
		CompanyJobDetails data = new CompanyJobDetails(map);

		return data;
	}

    public static List<CompanyJob> parseCompanyJobs(String companyJobList) {
    	JSONArray array = new JSONArray(companyJobList);
    	List<CompanyJob> jobs = new ArrayList<>();
    	for (Object obj: array) {
    		String json = obj.toString();
    		json = JsonUtil.replaceSpacesInKeys(json);
    		JSONObject jobj = new JSONObject(json);
    		Map<String, Object> map = jobj.toMap();
    		CompanyJob job = new CompanyJob(map);
    		jobs.add(job);
    	}
    	return jobs;
	}

	public static String stringifyJobList(List<CompanyJob> jobs) {
		JSONArray array = new JSONArray();
		for (CompanyJob job: jobs) {
			Map map = job.toMap();
			JSONObject obj = new JSONObject(map);
			array.put(obj);
		}
		String out = array.toString();
		return out;
	}

	public static String stringifyJobDetails(CompanyJobDetails details) {
		Map map = details.toMap();
		JSONObject obj = new JSONObject(map);
		String out = obj.toString();
		return out;
	}


}
