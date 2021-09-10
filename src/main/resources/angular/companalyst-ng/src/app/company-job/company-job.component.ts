import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Listener } from 'selenium-webdriver';
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
    "Essential_Duties_and_Responsibilities", 
    "UDF_Education_Detail", 
    "UDF_Experience_Detail", 
    "Qualifications_and_Competencies", 
    "UDF_Nature_of_Work", 
    "UDF_Physical_Requirements"
   ];

   fieldsWithBulletList: string[] = [
    "Essential_Duties_and_Responsibilities", 
    "Qualifications_and_Competencies"
   ];



  constructor(private jobDetailsService: JobDetailsService) { }

  ngAfterViewInit(): void {
  }

  ngOnInit(): void {
    this.fetchJobDetails(this.jdmJobDescHistoryID);
  }

  public fetchJobDetails(jdmJobDescHistoryID: string) {
    console.log("CompanyJobComponent fetchJobDetails! " + jdmJobDescHistoryID);
    this.jobDetailsService.fetchJobDetails(jdmJobDescHistoryID)
      .then(res => {
        console.log("fetched result: " + (res));
        var details: JobDetails = res as JobDetails;
        this.jobDetails = details;
        console.log("DETAILS: [" + details.JDMJobDescHistoryID + "]");

        var field1 = details.UDF_Essential_Duties_and_Responsibilities;
        field1.replace("null", "");
        var bullets1 = this.formatBullets(field1);
        this.jobDetails.Essential_Duties_and_Responsibilities = bullets1;

        var field2 = details.UDF_Qualifications_and_Competencies;
        field2.replace("null", "");
        var bullets2 = this.formatBullets(field2);
        this.jobDetails.Qualifications_and_Competencies = bullets2;
     })
      .catch(err => {
        console.error(err);
      });
  }

  formatBullets(field: string): string[] {
    var bullets: string[] = field.split("•");
    let output: string[] = [];
    if (field.indexOf("null") == -1){
    for (var bul in bullets){
      if (bullets[bul].length > 0){
        bullets[bul] = bullets[bul].replace("|||", "");
        output.push(bullets[bul]);
      }
    }
  }
    return output;
  }

isBulleted(keyFromFieldsToShow){
    for (var s in this.fieldsWithBulletList){
      if (this.fieldsWithBulletList[s].indexOf(String(keyFromFieldsToShow)) == 0){
        var list = this.jobDetails[String(keyFromFieldsToShow)];
        if (list.length > 1){
          return true;

        }
      }
    }
   return false;
  }

 toggleIcon(){
    console.log('toggle!');
    this.expanded = !this.expanded;
  }


}
