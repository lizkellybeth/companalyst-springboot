import { JobDetails } from './job-details';
export interface CompanyJob {

    JDMJobDescHistoryID: string
    CompanyJobCode: string
    CompanyJobTitle: string
    JobLevel: string

    UDF_Large_Functional_Group: string
    UDF_Job_Family: string
    UDF_FLSA_Classification: string
    
    LastUpdateDate: string
    LastApprovedDate: string

    Details: JobDetails
    
 }
