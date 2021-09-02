package edu.nrao.companalyst.data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;

import org.springframework.beans.factory.annotation.Value;


import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.concurrent.TimeUnit;

import javax.persistence.Column;

@Entity
public class CompanyJobDetails {
	
	@Value("${companalyst.db.maxage.minutes}")
	public static long MAX_AGE;//minutes

	@Column(unique=true) 
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
	
	@Lob 
	@Column(columnDefinition="BLOB")
	private String UDF_Essential_Duties_and_Responsibilities;
	
	
	@Lob 
	@Column(columnDefinition="BLOB")
	private String UDF_Education_Detail;
	
	@Lob 
	@Column(columnDefinition="BLOB")
	private String UDF_Experience_Detail;
	
	@Lob 
	@Column(columnDefinition="BLOB")
	private String UDF_Qualifications_and_Competencies;
	
	@Lob 
	@Column(columnDefinition="BLOB")
	private String UDF_Nature_of_Work;
	
	@Lob 
	@Column(columnDefinition="BLOB")
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
	
	public boolean equals(Object obj) {
		if (obj instanceof CompanyJobDetails) {
			CompanyJobDetails deets = (CompanyJobDetails) obj;
			if (deets.getJDMJobDescHistoryID().equals(this.JDMJobDescHistoryID)) {
				return true;
			}				
		}
		return false;
	}

	public Date getCachedDate() {
		return cachedDate;
	}

	public void setCachedDate(Date cachedDate) {
		this.cachedDate = cachedDate;
	}

	public String getJDMJobDescHistoryID() {
		return JDMJobDescHistoryID;
	}

	public void setJDMJobDescHistoryID(String jDMJobDescHistoryID) {
		JDMJobDescHistoryID = jDMJobDescHistoryID;
	}

	public String getCompanyJobCode() {
		return CompanyJobCode;
	}

	public void setCompanyJobCode(String companyJobCode) {
		CompanyJobCode = companyJobCode;
	}

	public String getCompanyJobTitle() {
		return CompanyJobTitle;
	}

	public void setCompanyJobTitle(String companyJobTitle) {
		CompanyJobTitle = companyJobTitle;
	}

	public String getCompanyJobSummary() {
		return CompanyJobSummary;
	}

	public void setCompanyJobSummary(String companyJobSummary) {
		CompanyJobSummary = companyJobSummary;
	}

	public String getLastApprovedByUName() {
		return LastApprovedByUName;
	}

	public void setLastApprovedByUName(String lastApprovedByUName) {
		LastApprovedByUName = lastApprovedByUName;
	}

	public String getLastApprovedDate() {
		return LastApprovedDate;
	}

	public void setLastApprovedDate(String lastApprovedDate) {
		LastApprovedDate = lastApprovedDate;
	}

	public String getLastUpdateByUName() {
		return LastUpdateByUName;
	}

	public void setLastUpdateByUName(String lastUpdateByUName) {
		LastUpdateByUName = lastUpdateByUName;
	}

	public String getLastUpdateDate() {
		return LastUpdateDate;
	}

	public void setLastUpdateDate(String lastUpdateDate) {
		LastUpdateDate = lastUpdateDate;
	}

	public String getLastPublishedByUName() {
		return LastPublishedByUName;
	}

	public void setLastPublishedByUName(String lastPublishedByUName) {
		LastPublishedByUName = lastPublishedByUName;
	}

	public String getLastPublishedDate() {
		return LastPublishedDate;
	}

	public void setLastPublishedDate(String lastPublishedDate) {
		LastPublishedDate = lastPublishedDate;
	}

	public String getUDF_Organization() {
		return UDF_Organization;
	}

	public void setUDF_Organization(String uDF_Organization) {
		UDF_Organization = uDF_Organization;
	}

	public String getUDF_Date() {
		return UDF_Date;
	}

	public void setUDF_Date(String uDF_Date) {
		UDF_Date = uDF_Date;
	}

	public String getUDF_Department() {
		return UDF_Department;
	}

	public void setUDF_Department(String uDF_Department) {
		UDF_Department = uDF_Department;
	}

	public String getUDF_FLSA_Classification() {
		return UDF_FLSA_Classification;
	}

	public void setUDF_FLSA_Classification(String uDF_FLSA_Classification) {
		UDF_FLSA_Classification = uDF_FLSA_Classification;
	}

	public String getUDF_Pay_Grade() {
		return UDF_Pay_Grade;
	}

	public void setUDF_Pay_Grade(String uDF_Pay_Grade) {
		UDF_Pay_Grade = uDF_Pay_Grade;
	}

	public String getUDF_Large_Functional_Group() {
		return UDF_Large_Functional_Group;
	}

	public void setUDF_Large_Functional_Group(String uDF_Large_Functional_Group) {
		UDF_Large_Functional_Group = uDF_Large_Functional_Group;
	}

	public String getUDF_Job_Family() {
		return UDF_Job_Family;
	}

	public void setUDF_Job_Family(String uDF_Job_Family) {
		UDF_Job_Family = uDF_Job_Family;
	}

	public String getUDF_Minimum_Education_Requirement() {
		return UDF_Minimum_Education_Requirement;
	}

	public void setUDF_Minimum_Education_Requirement(String uDF_Minimum_Education_Requirement) {
		UDF_Minimum_Education_Requirement = uDF_Minimum_Education_Requirement;
	}

	public String getUDF_Minimum_Experience_Requirement() {
		return UDF_Minimum_Experience_Requirement;
	}

	public void setUDF_Minimum_Experience_Requirement(String uDF_Minimum_Experience_Requirement) {
		UDF_Minimum_Experience_Requirement = uDF_Minimum_Experience_Requirement;
	}

	public String getUDF_Position_Designation() {
		return UDF_Position_Designation;
	}

	public void setUDF_Position_Designation(String uDF_Position_Designation) {
		UDF_Position_Designation = uDF_Position_Designation;
	}

	public String getUDF_Locations_applicable_to_Safety_Sensitive_for_this_position() {
		return UDF_Locations_applicable_to_Safety_Sensitive_for_this_position;
	}

	public void setUDF_Locations_applicable_to_Safety_Sensitive_for_this_position(
			String uDF_Locations_applicable_to_Safety_Sensitive_for_this_position) {
		UDF_Locations_applicable_to_Safety_Sensitive_for_this_position = uDF_Locations_applicable_to_Safety_Sensitive_for_this_position;
	}

	public String getUDF_Essential_Duties_and_Responsibilities() {
		return UDF_Essential_Duties_and_Responsibilities;
	}

	public void setUDF_Essential_Duties_and_Responsibilities(String uDF_Essential_Duties_and_Responsibilities) {
		UDF_Essential_Duties_and_Responsibilities = uDF_Essential_Duties_and_Responsibilities;
	}

	public String getUDF_Education_Detail() {
		return UDF_Education_Detail;
	}

	public void setUDF_Education_Detail(String uDF_Education_Detail) {
		UDF_Education_Detail = uDF_Education_Detail;
	}

	public String getUDF_Experience_Detail() {
		return UDF_Experience_Detail;
	}

	public void setUDF_Experience_Detail(String uDF_Experience_Detail) {
		UDF_Experience_Detail = uDF_Experience_Detail;
	}

	public String getUDF_Qualifications_and_Competencies() {
		return UDF_Qualifications_and_Competencies;
	}

	public void setUDF_Qualifications_and_Competencies(String uDF_Qualifications_and_Competencies) {
		UDF_Qualifications_and_Competencies = uDF_Qualifications_and_Competencies;
	}

	public String getUDF_Nature_of_Work() {
		return UDF_Nature_of_Work;
	}

	public void setUDF_Nature_of_Work(String uDF_Nature_of_Work) {
		UDF_Nature_of_Work = uDF_Nature_of_Work;
	}

	public String getUDF_Physical_Requirements() {
		return UDF_Physical_Requirements;
	}

	public void setUDF_Physical_Requirements(String uDF_Physical_Requirements) {
		UDF_Physical_Requirements = uDF_Physical_Requirements;
	}





}