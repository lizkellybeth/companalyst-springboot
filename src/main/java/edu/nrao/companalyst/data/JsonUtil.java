package edu.nrao.companalyst.data;

import java.util.Hashtable;
import java.util.Iterator;
import java.util.List;

import org.json.JSONArray;
import org.json.JSONObject;


public class JsonUtil {
 
	public static String replaceSpacesInKeys(String json) {		
		JSONObject obj = new JSONObject(json);
		Iterator<String> keys = obj.keys();
		Hashtable<String, String> data = new Hashtable<>();
		while (keys.hasNext()) {
			String dirty = keys.next();
			System.out.println(dirty);
			String clean = dirty.replace(" " , "_");
			Object val = obj.get(dirty);
			data.put(clean, String.valueOf(val));
		}
		JSONObject obj2 = new JSONObject(data);
		String json2 = obj2.toString();
		System.out.println("JsonUtil.replaceSpacesInKeys() ->" + json2);
		return json2;
	}
}
