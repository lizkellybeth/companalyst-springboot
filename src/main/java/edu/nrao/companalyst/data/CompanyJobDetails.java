package edu.nrao.companalyst.data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import org.springframework.beans.factory.annotation.Value;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.concurrent.TimeUnit;

import javax.persistence.Column;

@Entity
public class CompanyJobDetails {
	
	@Value("${companalyst.db.maxage.minutes}")
	public static long MAX_AGE;//minutes

	private String JDMJobDescHistoryID;
	private String CompanyJobCode;
	private String CompanyJobTitle;
	
	@Column(length = 3000) 
	private String CompanyJobSummary;
	
	private String LastApprovedByUName;
	private String LastApprovedDate;
	private String LastUpdateByUName;
	private String LastUpdateDate;
	private String LastPublishedByUName;
	private String LastPublishedDate;
	
	//User Defined Fields...
	private String UDF_Organization;
	private String UDF_Date;
	private String UDF_Department;

	
	//UDF fields below this point contain blank spaces in field names in json response from companalyst
	private String UDF_FLSA_Classification;
	private String UDF_Pay_Grade;
	private String UDF_Large_Functional_Group;
	private String UDF_Job_Family;
	private String UDF_Minimum_Education_Requirement;
	private String UDF_Minimum_Experience_Requirement;
	private String UDF_Position_Designation;
	private String UDF_Locations_applicable_to_Safety_Sensitive_for_this_position;
	
	@Column(length = 3000) 
	private String UDF_Essential_Duties_and_Responsibilities;
	
	@Column(length = 2000) 
	private String UDF_Education_Detail;
	
	@Column(length = 2000) 
	private String UDF_Experience_Detail;
	
	@Column(length = 2000) 
	private String UDF_Qualifications_and_Competencies;
	
	@Column(length = 2000) 
	private String UDF_Nature_of_Work;
	
	@Column(length = 2000) 
	private String UDF_Physical_Requirements;


	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Long id;
	
	private Date cachedDate;

	public CompanyJobDetails() {
		super();
	}
	
	public CompanyJobDetails(Map<String,String> map) {
		super();
		this.JDMJobDescHistoryID = (String) map.get("JDMJobDescHistoryID");
		this.CompanyJobCode = (String) map.get("CompanyJobCode");
		this.CompanyJobTitle = (String) map.get("CompanyJobTitle");
		this.CompanyJobSummary = (String) map.get("CompanyJobSummary");
		
		this.LastApprovedByUName = (String) map.get("LastApprovedByUName");
		this.LastApprovedDate = (String) map.get("LastApprovedDate");
		this.LastUpdateByUName = (String) map.get("LastUpdateByUName");
		this.LastUpdateDate = (String) map.get("LastUpdateDate");
		this.LastPublishedByUName = (String) map.get("LastPublishedByUName");
		this.LastPublishedDate = (String) map.get("LastPublishedDate");
		
		this.UDF_Organization = (String) map.get("UDF_Organization");
		this.UDF_Date = (String) map.get("UDF_Date");
		this.UDF_Department = (String) map.get("UDF_Department");

		this.UDF_FLSA_Classification = (String) map.get("UDF_FLSA_Classification");
		this.UDF_Pay_Grade = (String) map.get("UDF_Pay_Grade");
		this.UDF_Large_Functional_Group = (String) map.get("UDF_Large_Functional_Group");
		this.UDF_Job_Family = (String) map.get("UDF_Job_Family");
		this.UDF_Minimum_Education_Requirement = (String) map.get("UDF_Minimum_Education_Requirement");
		this.UDF_Minimum_Experience_Requirement = (String) map.get("UDF_Minimum_Experience_Requirement");
		this.UDF_Position_Designation = (String) map.get("UDF_Position_Designation");
		this.UDF_Locations_applicable_to_Safety_Sensitive_for_this_position = (String) map.get("UDF_Locations_applicable_to_Safety_Sensitive_for_this_position");
		
		this.UDF_Essential_Duties_and_Responsibilities = (String) map.get("UDF_Essential_Duties_and_Responsibilities");
		this.UDF_Education_Detail = (String) map.get("UDF_Education_Detail");
		this.UDF_Experience_Detail = (String) map.get("UDF_Experience_Detail");
		this.UDF_Qualifications_and_Competencies = (String) map.get("UDF_Qualifications_and_Competencies");
		this.UDF_Nature_of_Work = (String) map.get("UDF_Nature_of_Work");
		this.UDF_Physical_Requirements = (String) map.get("UDF_Physical_Requirements");	
	}
	
	public Map toMap() {
		Map<String,String> map = new HashMap<>();
		map.put("JDMJobDescHistoryID", JDMJobDescHistoryID);
		map.put("CompanyJobCode", CompanyJobCode);
		map.put("CompanyJobTitle", CompanyJobTitle);
		map.put("CompanyJobSummary", CompanyJobSummary);		
		
		map.put("LastApprovedByUName", LastApprovedByUName);
		map.put("LastApprovedDate", LastApprovedDate);
		map.put("LastUpdateByUName", LastUpdateByUName);
		map.put("LastUpdateDate", LastUpdateDate);
		map.put("LastPublishedByUName", LastPublishedByUName);
		map.put("LastPublishedDate", LastPublishedDate);

		map.put("UDF_Organization", UDF_Organization);
		map.put("UDF_Date", UDF_Date);
		map.put("UDF_Department", UDF_Department);		
		
		map.put("UDF_FLSA_Classification", UDF_FLSA_Classification);
		map.put("UDF_Pay_Grade", UDF_Pay_Grade);
		map.put("UDF_Large_Functional_Group", UDF_Large_Functional_Group);
		map.put("UDF_Job_Family", UDF_Job_Family);
		map.put("UDF_Minimum_Education_Requirement", UDF_Minimum_Education_Requirement);
		map.put("UDF_Minimum_Experience_Requirement", UDF_Minimum_Experience_Requirement);
		map.put("UDF_Position_Designation", UDF_Position_Designation);
		map.put("UDF_Locations_applicable_to_Safety_Sensitive_for_this_position", UDF_Locations_applicable_to_Safety_Sensitive_for_this_position);		
		
		map.put("UDF_Essential_Duties_and_Responsibilities", UDF_Essential_Duties_and_Responsibilities);
		map.put("UDF_Education_Detail", UDF_Education_Detail);
		map.put("UDF_Experience_Detail", UDF_Experience_Detail);
		map.put("UDF_Qualifications_and_Competencies", UDF_Qualifications_and_Competencies);
		map.put("UDF_Nature_of_Work", UDF_Nature_of_Work);
		map.put("UDF_Physical_Requirements", UDF_Physical_Requirements);
		
		return map;
	}

	public boolean isStale() {

		Date now = new Date();
	    long diffInMillies = Math.abs(now.getTime() - cachedDate.getTime());
	    long diff = TimeUnit.MINUTES.convert(diffInMillies, TimeUnit.MILLISECONDS);

	    if (diff > CompanyJobDetails.MAX_AGE) {
	    	return true;
	    }
		return false;
	}

	public Date getCachedDate() {
		return cachedDate;
	}

	public void setCachedDate(Date cachedDate) {
		this.cachedDate = cachedDate;
	}





}