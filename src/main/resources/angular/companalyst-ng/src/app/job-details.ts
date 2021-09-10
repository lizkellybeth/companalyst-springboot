export interface JobDetails {

    JDMJobDescHistoryID: string
    CompanyJobCode: string
    CompanyJobTitle: string
    CompanyJobSummary: string	
    LastApprovedByUName: string
    LastApprovedDate: string
    LastUpdateByUName: string
    LastUpdateDate: string
    LastPublishedByUName: string
    LastPublishedDate: string

    UDF_Organization: string
    UDF_Date: string
    UDF_Department: string
    UDF_FLSA_Classification: string
    UDF_Pay_Grade: string
    UDF_Large_Functional_Group: string
    UDF_Job_Family: string
    UDF_Minimum_Education_Requirement: string
    UDF_Minimum_Experience_Requirement: string
    UDF_Position_Designation: string
    UDF_Locations_applicable_to_Safety_Sensitive_for_this_position: string
    UDF_Essential_Duties_and_Responsibilities: string
    UDF_Education_Detail: string
    UDF_Experience_Detail: string
    UDF_Qualifications_and_Competencies: string
    UDF_Nature_of_Work: string
    UDF_Physical_Requirements: string
   
    Essential_Duties_and_Responsibilities: Array<string>;
    Qualifications_and_Competencies: Array<string>;


}
