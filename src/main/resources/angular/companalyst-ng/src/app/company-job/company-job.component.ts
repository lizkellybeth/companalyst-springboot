import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { JobDetails } from '../job-details';
import { JobDetailsService } from '../job-details.service';

@Component({
  selector: 'app-company-job',
  templateUrl: './company-job.component.html',
  styleUrls: ['./company-job.component.css']
})
export class CompanyJobComponent implements OnInit, AfterViewInit {

  expanded: boolean = false;
  expandedElement: JobDetails | null;

  @Input() jdmJobDescHistoryID: string;
  jobDetails: JobDetails;
  //keys: string[] = [];
  fieldsToShow: string[] = [
    "CompanyJobCode", 
    "CompanyJobTitle",
    "CompanyJobSummary", 
    "UDF_FLSA_Classification", 
    "UDF_Pay_Grade", 
    "UDF_Large_Functional_Group", 
    "UDF_Job_Family", 
    "UDF_Minimum_Education_Requirement", 
    "UDF_Minimum_Experience_Requirement", 
    "UDF_Position_Designation", 
    "UDF_Locations_applicable_to_Safety_Sensitive_for_this_position", 
    "UDF_Essential_Duties_and_Responsibilities", 
    "UDF_Education_Detail", 
    "UDF_Experience_Detail", 
    "UDF_Qualifications_and_Competencies", 
    "UDF_Nature_of_Work", 
    "UDF_Physical_Requirements"
  ];

  constructor(private jobDetailsService: JobDetailsService) { }

  ngAfterViewInit(): void {
  }

  ngOnInit(): void {
    this.fetchJobDetails(this.jdmJobDescHistoryID);
  }

  public fetchJobDetails(jdmJobDescHistoryID: string) {
    console.log("CompanyJobComponent fetchJobDetails! " + jdmJobDescHistoryID)
    this.jobDetailsService.fetchJobDetails(jdmJobDescHistoryID)
      .then(res => {
        console.log("fetched result: " + (res));
        var details: JobDetails = res as JobDetails;
        console.log("DETAILS: [" + details.JDMJobDescHistoryID + "]");
        this.jobDetails = details;
      })
      .catch(err => {
        console.error(err);
      });
  }

  toggleIcon(){
    console.log('toggle!');
    this.expanded = !this.expanded;
  }

}
