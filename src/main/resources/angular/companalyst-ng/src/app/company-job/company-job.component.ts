import { AfterViewInit, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CompanyJob } from '../company-job';
import { JobDetails } from '../job-details';
import { JobDetailsService } from '../job-details.service';

@Component({
  selector: 'app-company-job',
  templateUrl: './company-job.component.html',
  styleUrls: ['./company-job.component.css']
})
export class CompanyJobComponent implements OnInit, AfterViewInit {

  @Input() jdmJobDescHistoryID: string;
  jobDetails: JobDetails;
  keys: string[] = [];

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
        for (let key in details){
          //key = key.split("_").join(" ");
          console.log("key: " + key);
          this.keys.push(key);
        }
      })
      .catch(err => {
        console.error(err);
      });
  }



}
