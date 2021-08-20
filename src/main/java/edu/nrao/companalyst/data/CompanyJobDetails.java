package edu.nrao.companalyst.data;

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
	
	//User Defined Fields...
	private String UDF_Organization;
	private String UDF_Date;
	private String UDF_Department;
	private String UDF_Comments;
	
	//UDF fields below this point contain blank spaces in field names in json response from companalyst
	private String UDF_FLSA_Classification;
	private String UDF_Pay_Grade;
	private String UDF_Large_Functional_Group;
	private String UDF_Job_Family;
	private String UDF_Minimum_Education_Requirement;
	private String UDF_Minimum_Experience_Requirement;
	private String UDF_Position_Designation;
	private String UDF_Locations_applicable_to_Safety_Sensitive_for_this_position;
	private String UDF_Essential_Duties_and_Responsibilities;
	private String UDF_Education_Detail;
	private String UDF_Experience_Detail;
	private String UDF_Qualifications_and_Competencies;
	private String UDF_Nature_of_Work;
	private String UDF_Physical_Requirements;

	private String UDF_EEO_NUM;
	private String UDF_EEO_Code;
	private String UDF_EEO_Job_Group;
	private String UDF_Functional_Job_Group;
	private String UDF_Position_Typically_Supervises;
	private String UDF_Special_Requirements;
	private String UDF_Typical_Work_Schedule;
	private String UDF_FLSA_Test_HR_Comp_use_only;

	private String UDF_Job_Status;
	private String UDF_Amount_of_Travel_Required;
	private String UDF_Prepared_by;
	private String UDF_Prepared_by_Date;
	private String UDF_Approval_Signature;
	private String UDF_Approval_Signature_Date;
	private String UDF_Incumbent_Signature;
	private String UDF_Incumbent_Signature_Date;

	private String UDF_Disclaimer_1;
	private String UDF_Reports_to;
	private String UDF_Work_Schedule;
	private String UDF_Positions_Supervised;
	private String UDF_Additional_Requirements;
	private String UDF_Computer_Skills;
	private String UDF_Work_Environment;
	private String UDF_Licensure_certification;
		
	public CompanyJobDetails() {
		super();
		// TODO Auto-generated constructor stub
	}

	public CompanyJobDetails(String json) {
		super();
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

	public String getUDF_Comments() {
		return UDF_Comments;
	}

	public void setUDF_Comments(String uDF_Comments) {
		UDF_Comments = uDF_Comments;
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

	public String getUDF_EEO_NUM() {
		return UDF_EEO_NUM;
	}

	public void setUDF_EEO_NUM(String uDF_EEO_NUM) {
		UDF_EEO_NUM = uDF_EEO_NUM;
	}

	public String getUDF_EEO_Code() {
		return UDF_EEO_Code;
	}

	public void setUDF_EEO_Code(String uDF_EEO_Code) {
		UDF_EEO_Code = uDF_EEO_Code;
	}

	public String getUDF_EEO_Job_Group() {
		return UDF_EEO_Job_Group;
	}

	public void setUDF_EEO_Job_Group(String uDF_EEO_Job_Group) {
		UDF_EEO_Job_Group = uDF_EEO_Job_Group;
	}

	public String getUDF_Functional_Job_Group() {
		return UDF_Functional_Job_Group;
	}

	public void setUDF_Functional_Job_Group(String uDF_Functional_Job_Group) {
		UDF_Functional_Job_Group = uDF_Functional_Job_Group;
	}

	public String getUDF_Position_Typically_Supervises() {
		return UDF_Position_Typically_Supervises;
	}

	public void setUDF_Position_Typically_Supervises(String uDF_Position_Typically_Supervises) {
		UDF_Position_Typically_Supervises = uDF_Position_Typically_Supervises;
	}

	public String getUDF_Special_Requirements() {
		return UDF_Special_Requirements;
	}

	public void setUDF_Special_Requirements(String uDF_Special_Requirements) {
		UDF_Special_Requirements = uDF_Special_Requirements;
	}

	public String getUDF_Typical_Work_Schedule() {
		return UDF_Typical_Work_Schedule;
	}

	public void setUDF_Typical_Work_Schedule(String uDF_Typical_Work_Schedule) {
		UDF_Typical_Work_Schedule = uDF_Typical_Work_Schedule;
	}

	public String getUDF_FLSA_Test_HR_Comp_use_only() {
		return UDF_FLSA_Test_HR_Comp_use_only;
	}

	public void setUDF_FLSA_Test_HR_Comp_use_only(String uDF_FLSA_Test_HR_Comp_use_only) {
		UDF_FLSA_Test_HR_Comp_use_only = uDF_FLSA_Test_HR_Comp_use_only;
	}

	public String getUDF_Job_Status() {
		return UDF_Job_Status;
	}

	public void setUDF_Job_Status(String uDF_Job_Status) {
		UDF_Job_Status = uDF_Job_Status;
	}

	public String getUDF_Amount_of_Travel_Required() {
		return UDF_Amount_of_Travel_Required;
	}

	public void setUDF_Amount_of_Travel_Required(String uDF_Amount_of_Travel_Required) {
		UDF_Amount_of_Travel_Required = uDF_Amount_of_Travel_Required;
	}

	public String getUDF_Prepared_by() {
		return UDF_Prepared_by;
	}

	public void setUDF_Prepared_by(String uDF_Prepared_by) {
		UDF_Prepared_by = uDF_Prepared_by;
	}

	public String getUDF_Prepared_by_Date() {
		return UDF_Prepared_by_Date;
	}

	public void setUDF_Prepared_by_Date(String uDF_Prepared_by_Date) {
		UDF_Prepared_by_Date = uDF_Prepared_by_Date;
	}

	public String getUDF_Approval_Signature() {
		return UDF_Approval_Signature;
	}

	public void setUDF_Approval_Signature(String uDF_Approval_Signature) {
		UDF_Approval_Signature = uDF_Approval_Signature;
	}

	public String getUDF_Approval_Signature_Date() {
		return UDF_Approval_Signature_Date;
	}

	public void setUDF_Approval_Signature_Date(String uDF_Approval_Signature_Date) {
		UDF_Approval_Signature_Date = uDF_Approval_Signature_Date;
	}

	public String getUDF_Incumbent_Signature() {
		return UDF_Incumbent_Signature;
	}

	public void setUDF_Incumbent_Signature(String uDF_Incumbent_Signature) {
		UDF_Incumbent_Signature = uDF_Incumbent_Signature;
	}

	public String getUDF_Incumbent_Signature_Date() {
		return UDF_Incumbent_Signature_Date;
	}

	public void setUDF_Incumbent_Signature_Date(String uDF_Incumbent_Signature_Date) {
		UDF_Incumbent_Signature_Date = uDF_Incumbent_Signature_Date;
	}

	public String getUDF_Disclaimer_1() {
		return UDF_Disclaimer_1;
	}

	public void setUDF_Disclaimer_1(String uDF_Disclaimer_1) {
		UDF_Disclaimer_1 = uDF_Disclaimer_1;
	}

	public String getUDF_Reports_to() {
		return UDF_Reports_to;
	}

	public void setUDF_Reports_to(String uDF_Reports_to) {
		UDF_Reports_to = uDF_Reports_to;
	}

	public String getUDF_Work_Schedule() {
		return UDF_Work_Schedule;
	}

	public void setUDF_Work_Schedule(String uDF_Work_Schedule) {
		UDF_Work_Schedule = uDF_Work_Schedule;
	}

	public String getUDF_Positions_Supervised() {
		return UDF_Positions_Supervised;
	}

	public void setUDF_Positions_Supervised(String uDF_Positions_Supervised) {
		UDF_Positions_Supervised = uDF_Positions_Supervised;
	}

	public String getUDF_Additional_Requirements() {
		return UDF_Additional_Requirements;
	}

	public void setUDF_Additional_Requirements(String uDF_Additional_Requirements) {
		UDF_Additional_Requirements = uDF_Additional_Requirements;
	}

	public String getUDF_Computer_Skills() {
		return UDF_Computer_Skills;
	}

	public void setUDF_Computer_Skills(String uDF_Computer_Skills) {
		UDF_Computer_Skills = uDF_Computer_Skills;
	}

	public String getUDF_Work_Environment() {
		return UDF_Work_Environment;
	}

	public void setUDF_Work_Environment(String uDF_Work_Environment) {
		UDF_Work_Environment = uDF_Work_Environment;
	}

	public String getUDF_Licensure_certification() {
		return UDF_Licensure_certification;
	}

	public void setUDF_Licensure_certification(String uDF_Licensure_certification) {
		UDF_Licensure_certification = uDF_Licensure_certification;
	}



}