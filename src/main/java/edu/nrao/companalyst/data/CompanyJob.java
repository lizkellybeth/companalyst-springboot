package edu.nrao.companalyst.data;

import java.util.HashMap;
import java.util.Map;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class CompanyJob {
	
	private String JDMJobDescHistoryID;
	private String CompanyJobCode;
	private String CompanyJobTitle;
	private String JobLevel;
	private String JobFLSAStatusDesc;
	private String JobFamily;
	private String LastUpdateByUName;
	private String LastApprovedByUName;
	private String LastApprovedDate;
	private String LastUpdateDate;
	private String UDF_Job_Family;
	private String UDF_Organization;	
	private String UDF_FLSA_Classification;
	private String UDF_Large_Functional_Group;
	
	private boolean markedForDeletion = false;


	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Long id;

	public CompanyJob() {
		super();
		// TODO Auto-generated constructor stub
	}

	public CompanyJob(Map<String, Object> map) {
		super();
		this.JDMJobDescHistoryID = (String) map.get("JDMJobDescHistoryID");
		this.CompanyJobCode = (String) map.get("CompanyJobCode");
		this.CompanyJobTitle = (String) map.get("CompanyJobTitle");
		this.JobLevel = (String) map.get("JobLevel");
		this.JobFLSAStatusDesc = (String) map.get("JobFLSAStatusDesc");
		this.JobFamily = (String) map.get("JobFamily");
		this.LastUpdateByUName = (String) map.get("LastUpdateByUName");
		this.LastApprovedByUName = (String) map.get("LastApprovedByUName");
		this.LastApprovedDate = (String) map.get("LastApprovedDate");
		this.LastUpdateDate = (String) map.get("LastUpdateDate");
		this.UDF_Job_Family = (String) map.get("UDF_Job_Family");
		this.UDF_Organization = (String) map.get("UDF_Organization");
		this.UDF_FLSA_Classification = (String) map.get("UDF_FLSA_Classification");
		this.UDF_Large_Functional_Group = (String) map.get("UDF_Large_Functional_Group");
	}
	
	public Map<String,String> toMap(){
		Map<String,String> map = new HashMap<>();
		map.put("JDMJobDescHistoryID", JDMJobDescHistoryID);
		map.put("CompanyJobCode", CompanyJobCode);
		map.put("CompanyJobTitle", CompanyJobTitle);
		map.put("JobLevel", JobLevel);
		map.put("JobFLSAStatusDesc", JobFLSAStatusDesc);
		map.put("JobFamily", JobFamily);
		map.put("LastApprovedByUName", LastApprovedByUName);
		map.put("LastUpdateByUName", LastUpdateByUName);
		map.put("LastApprovedDate", LastApprovedDate);
		map.put("LastUpdateDate", LastUpdateDate);
		map.put("UDF_Job_Family", UDF_Job_Family);
		map.put("UDF_Organization", UDF_Organization);
		map.put("UDF_FLSA_Classification", UDF_FLSA_Classification);
		map.put("UDF_Large_Functional_Group", UDF_Large_Functional_Group);
		return map;
	}
	
	public boolean equals(Object obj) {
		if (obj instanceof CompanyJob) {
			CompanyJob inJob = (CompanyJob) obj;
			if (inJob.getJDMJobDescHistoryID().equals(this.JDMJobDescHistoryID)) {
				return true;
			}
		}
		return false;
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

	public String getJobLevel() {
		return JobLevel;
	}

	public void setJobLevel(String jobLevel) {
		JobLevel = jobLevel;
	}

	public String getJobFLSAStatusDesc() {
		return JobFLSAStatusDesc;
	}

	public void setJobFLSAStatusDesc(String jobFLSAStatusDesc) {
		JobFLSAStatusDesc = jobFLSAStatusDesc;
	}

	public String getJobFamily() {
		return JobFamily;
	}

	public void setJobFamily(String jobFamily) {
		JobFamily = jobFamily;
	}

	public String getLastUpdateByUName() {
		return LastUpdateByUName;
	}

	public void setLastUpdateByUName(String lastUpdateByUName) {
		LastUpdateByUName = lastUpdateByUName;
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

	public String getLastUpdateDate() {
		return LastUpdateDate;
	}

	public void setLastUpdateDate(String lastUpdateDate) {
		LastUpdateDate = lastUpdateDate;
	}

	public String getUDF_Job_Family() {
		return UDF_Job_Family;
	}

	public void setUDF_Job_Family(String uDF_Job_Family) {
		UDF_Job_Family = uDF_Job_Family;
	}

	public String getUDF_Organization() {
		return UDF_Organization;
	}

	public void setUDF_Organization(String uDF_Organization) {
		UDF_Organization = uDF_Organization;
	}

	public String getUDF_FLSA_Classification() {
		return UDF_FLSA_Classification;
	}

	public void setUDF_FLSA_Classification(String uDF_FLSA_Classification) {
		UDF_FLSA_Classification = uDF_FLSA_Classification;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public boolean isMarkedForDeletion() {
		return markedForDeletion;
	}

	public void setMarkedForDeletion(boolean markedForDeletion) {
		this.markedForDeletion = markedForDeletion;
	}

	public String getUDF_Large_Functional_Group() {
		return UDF_Large_Functional_Group;
	}

	public void setUDF_Large_Functional_Group(String uDF_Large_Functional_Group) {
		UDF_Large_Functional_Group = uDF_Large_Functional_Group;
	}



}