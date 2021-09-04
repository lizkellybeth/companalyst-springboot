import { AfterViewInit, SimpleChanges } from '@angular/core';
import { OnChanges } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CompanyJob } from './company-job';
import { CompanyJobListService } from './company-job-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit{

  title = 'companalyst-ng';
  companyJobs: CompanyJob[] = [];
  jobFamilies: string[] = [];

  constructor(private jobListService: CompanyJobListService, private titleService: Title) { }

  public setTitle(newTitle: string) {
    this.titleService.setTitle("NRAO Career Portal");
  }

  ngOnInit(): void {
    this.fetchCompanyJobList();
  }

  ngAfterViewInit(): void {
    this.companyJobs = [...this.companyJobs];
  }

  public fetchCompanyJobList() {
    this.jobListService.fetchCompanyJobList()
      .then(res => {
        console.log("fetched result: " + (res ));
        //this.companyJobs = res as CompanyJob[];
        this.companyJobs = [];
        var jobs = res as CompanyJob[];
        for (let job of jobs){
          var jobFam = job.UDF_Job_Family;
          if (!this.jobFamilies.includes(jobFam) && jobFam != null && jobFam != 'null'  && jobFam != ''){
            this.jobFamilies.push(jobFam);
          }
          if (job.UDF_Organization.indexOf("NRAO") > -1){
            this.companyJobs.push(job);
          } else {
            console.log("job.UDF_Organization: " + job.UDF_Organization);
          }
        }
        this.companyJobs = [...this.companyJobs];
      })
      .catch(err => {
        console.error(err);
      });
  }
  
}
