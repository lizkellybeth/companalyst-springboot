package edu.nrao.companalyst.data;
import java.util.Hashtable;
import java.util.Iterator;

import org.json.*;

public class CompanyJobDetails {

	private String jdmJobDescHistoryID;
	private String companyJobCode;
	private String companyJobTitle;
	private String jobFamily;
	private String companyJobDesc;
	private String jobFLSAStatusDesc;
	private String companyJobSummary;
	private String experience;
	private String competencyNames;
	private String skills;
	private String reportsTo;
	private String certificateLicenses;
	private String managePeople;
	private String educationDesc;
	private String timeSpents;
	
	private String tierCode;
	private String tierDesc;
	private String jobFocus;
	private String jobFunction;
		
	private String lastApprovedByUName;
	private String lastApprovedDate;
	private String lastUpdateByUName;
	private String lastUpdateDate;
	private String lastPublishedByUName;
	private String lastPublishedDate;
	
	private String CompanyJobDescStatusCode;
	private String CompanyJobDescStatusDesc;
	
	private String organization;
	private String date;
	private String department;
	private String comments;
	
	//fields below this point contain blank spaces in field names in json response from companalyst
	private String FLSA_Classification;
	private String Pay_Grade;
	private String Large_Functional_Group;
	private String Job_Family;
	private String Minimum_Education_Requirement;
	private String Minimum_Experience_Requirement;
	private String Position_Designation;
	private String Locations_applicable_to_Safety_Sensitive_for_this_position;
	private String Essential_Duties_and_Responsibilities;
	private String Education_Detail;
	private String Experience_Detail;
	private String Qualifications_and_Competencies;
	private String Nature_of_Work;
	private String Physical_Requirements;

/**
	private String EEO_NUM;
	private String EEO_Code;
	private String EEO_Job_Group;
	private String Functional_Job_Group;
	private String Position_Typically_Supervises;
	private String Special_Requirements;
	private String Typical_Work_Schedule;
	private String FLSA_Test_HR_Comp_use_only;
	private String Organization;
	private String Date;
	private String Department;
	private String Job_Status;
	private String Amount_of_Travel_Required;
	private String Prepared_by;
	private String Prepared_by_Date;
	private String Approval_Signature;
	private String Approval_Signature_Date;
	private String Incumbent_Signature;
	private String Incumbent_Signature_Date;
	private String Comments;
	private String Disclaimer_1;
	private String Reports_to;
	private String Work_Schedule;
	private String Positions_Supervised;
	private String Additional_Requirements;
	private String Computer_Skills;
	private String Work_Environment;
	private String Licensure_certification;
	
	*/
	
	public CompanyJobDetails() {
		super();
		// TODO Auto-generated constructor stub
	}

	public CompanyJobDetails(String json) {
		super();
		JSONObject obj = new JSONObject(json);
		Iterator<String> keys = obj.keys();
		Hashtable<String, String> cleanKeys = new Hashtable<>();
		while (keys.hasNext()) {
			String dirty = keys.next();
			System.out.println(dirty);
			String clean = dirty.replace(" " , "_");
			cleanKeys.put(clean, obj.getString(dirty));
		}

	}


	public String getJdmJobDescHistoryID() {
		return jdmJobDescHistoryID;
	}


	public void setJdmJobDescHistoryID(String jdmJobDescHistoryID) {
		this.jdmJobDescHistoryID = jdmJobDescHistoryID;
	}


	public String getCompanyJobCode() {
		return companyJobCode;
	}


	public void setCompanyJobCode(String companyJobCode) {
		this.companyJobCode = companyJobCode;
	}


	public String getCompanyJobTitle() {
		return companyJobTitle;
	}


	public void setCompanyJobTitle(String companyJobTitle) {
		this.companyJobTitle = companyJobTitle;
	}


	public String getJobFamily() {
		return jobFamily;
	}


	public void setJobFamily(String jobFamily) {
		this.jobFamily = jobFamily;
	}


	public String getCompanyJobDesc() {
		return companyJobDesc;
	}


	public void setCompanyJobDesc(String companyJobDesc) {
		this.companyJobDesc = companyJobDesc;
	}


	public String getJobFLSAStatusDesc() {
		return jobFLSAStatusDesc;
	}


	public void setJobFLSAStatusDesc(String jobFLSAStatusDesc) {
		this.jobFLSAStatusDesc = jobFLSAStatusDesc;
	}


	public String getCompanyJobSummary() {
		return companyJobSummary;
	}


	public void setCompanyJobSummary(String companyJobSummary) {
		this.companyJobSummary = companyJobSummary;
	}


	public String getExperience() {
		return experience;
	}


	public void setExperience(String experience) {
		this.experience = experience;
	}


	public String getCompetencyNames() {
		return competencyNames;
	}


	public void setCompetencyNames(String competencyNames) {
		this.competencyNames = competencyNames;
	}


	public String getSkills() {
		return skills;
	}


	public void setSkills(String skills) {
		this.skills = skills;
	}


	public String getReportsTo() {
		return reportsTo;
	}


	public void setReportsTo(String reportsTo) {
		this.reportsTo = reportsTo;
	}


	public String getCertificateLicenses() {
		return certificateLicenses;
	}


	public void setCertificateLicenses(String certificateLicenses) {
		this.certificateLicenses = certificateLicenses;
	}


	public String getManagePeople() {
		return managePeople;
	}


	public void setManagePeople(String managePeople) {
		this.managePeople = managePeople;
	}


	public String getEducationDesc() {
		return educationDesc;
	}


	public void setEducationDesc(String educationDesc) {
		this.educationDesc = educationDesc;
	}


	public String getTimeSpents() {
		return timeSpents;
	}


	public void setTimeSpents(String timeSpents) {
		this.timeSpents = timeSpents;
	}


	public String getTierCode() {
		return tierCode;
	}


	public void setTierCode(String tierCode) {
		this.tierCode = tierCode;
	}


	public String getTierDesc() {
		return tierDesc;
	}


	public void setTierDesc(String tierDesc) {
		this.tierDesc = tierDesc;
	}


	public String getJobFocus() {
		return jobFocus;
	}


	public void setJobFocus(String jobFocus) {
		this.jobFocus = jobFocus;
	}


	public String getJobFunction() {
		return jobFunction;
	}


	public void setJobFunction(String jobFunction) {
		this.jobFunction = jobFunction;
	}


	public String getLastApprovedByUName() {
		return lastApprovedByUName;
	}


	public void setLastApprovedByUName(String lastApprovedByUName) {
		this.lastApprovedByUName = lastApprovedByUName;
	}


	public String getLastApprovedDate() {
		return lastApprovedDate;
	}


	public void setLastApprovedDate(String lastApprovedDate) {
		this.lastApprovedDate = lastApprovedDate;
	}


	public String getLastUpdateByUName() {
		return lastUpdateByUName;
	}


	public void setLastUpdateByUName(String lastUpdateByUName) {
		this.lastUpdateByUName = lastUpdateByUName;
	}


	public String getLastUpdateDate() {
		return lastUpdateDate;
	}


	public void setLastUpdateDate(String lastUpdateDate) {
		this.lastUpdateDate = lastUpdateDate;
	}


	public String getLastPublishedByUName() {
		return lastPublishedByUName;
	}


	public void setLastPublishedByUName(String lastPublishedByUName) {
		this.lastPublishedByUName = lastPublishedByUName;
	}


	public String getLastPublishedDate() {
		return lastPublishedDate;
	}


	public void setLastPublishedDate(String lastPublishedDate) {
		this.lastPublishedDate = lastPublishedDate;
	}


	public String getCompanyJobDescStatusCode() {
		return CompanyJobDescStatusCode;
	}


	public void setCompanyJobDescStatusCode(String companyJobDescStatusCode) {
		CompanyJobDescStatusCode = companyJobDescStatusCode;
	}


	public String getCompanyJobDescStatusDesc() {
		return CompanyJobDescStatusDesc;
	}


	public void setCompanyJobDescStatusDesc(String companyJobDescStatusDesc) {
		CompanyJobDescStatusDesc = companyJobDescStatusDesc;
	}



	public String getOrganization() {
		return organization;
	}


	public void setOrganization(String organization) {
		this.organization = organization;
	}


	public String getDate() {
		return date;
	}


	public void setDate(String date) {
		this.date = date;
	}


	public String getDepartment() {
		return department;
	}


	public void setDepartment(String department) {
		this.department = department;
	}


	public String getComments() {
		return comments;
	}


	public void setComments(String comments) {
		this.comments = comments;
	}

	public String getFLSA_Classification() {
		return FLSA_Classification;
	}

	public void setFLSA_Classification(String fLSA_Classification) {
		FLSA_Classification = fLSA_Classification;
	}

	public String getPay_Grade() {
		return Pay_Grade;
	}

	public void setPay_Grade(String pay_Grade) {
		Pay_Grade = pay_Grade;
	}

	public String getLarge_Functional_Group() {
		return Large_Functional_Group;
	}

	public void setLarge_Functional_Group(String large_Functional_Group) {
		Large_Functional_Group = large_Functional_Group;
	}

	public String getJob_Family() {
		return Job_Family;
	}

	public void setJob_Family(String job_Family) {
		Job_Family = job_Family;
	}

	public String getMinimum_Education_Requirement() {
		return Minimum_Education_Requirement;
	}

	public void setMinimum_Education_Requirement(String minimum_Education_Requirement) {
		Minimum_Education_Requirement = minimum_Education_Requirement;
	}

	public String getMinimum_Experience_Requirement() {
		return Minimum_Experience_Requirement;
	}

	public void setMinimum_Experience_Requirement(String minimum_Experience_Requirement) {
		Minimum_Experience_Requirement = minimum_Experience_Requirement;
	}

	public String getPosition_Designation() {
		return Position_Designation;
	}

	public void setPosition_Designation(String position_Designation) {
		Position_Designation = position_Designation;
	}

	public String getLocations_applicable_to_Safety_Sensitive_for_this_position() {
		return Locations_applicable_to_Safety_Sensitive_for_this_position;
	}

	public void setLocations_applicable_to_Safety_Sensitive_for_this_position(
			String locations_applicable_to_Safety_Sensitive_for_this_position) {
		Locations_applicable_to_Safety_Sensitive_for_this_position = locations_applicable_to_Safety_Sensitive_for_this_position;
	}

	public String getEssential_Duties_and_Responsibilities() {
		return Essential_Duties_and_Responsibilities;
	}

	public void setEssential_Duties_and_Responsibilities(String essential_Duties_and_Responsibilities) {
		Essential_Duties_and_Responsibilities = essential_Duties_and_Responsibilities;
	}

	public String getEducation_Detail() {
		return Education_Detail;
	}

	public void setEducation_Detail(String education_Detail) {
		Education_Detail = education_Detail;
	}

	public String getExperience_Detail() {
		return Experience_Detail;
	}

	public void setExperience_Detail(String experience_Detail) {
		Experience_Detail = experience_Detail;
	}

	public String getQualifications_and_Competencies() {
		return Qualifications_and_Competencies;
	}

	public void setQualifications_and_Competencies(String qualifications_and_Competencies) {
		Qualifications_and_Competencies = qualifications_and_Competencies;
	}

	public String getNature_of_Work() {
		return Nature_of_Work;
	}

	public void setNature_of_Work(String nature_of_Work) {
		Nature_of_Work = nature_of_Work;
	}

	public String getPhysical_Requirements() {
		return Physical_Requirements;
	}

	public void setPhysical_Requirements(String physical_Requirements) {
		Physical_Requirements = physical_Requirements;
	}

	
}
