import { AfterViewInit, SimpleChanges } from '@angular/core';
import { OnChanges } from '@angular/core';
import { Component, OnInit } from '@angular/core';
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

  constructor(private jobListService: CompanyJobListService) { }

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
        this.companyJobs = res as CompanyJob[];
      })
      .catch(err => {
        console.error(err);
      });
  }
  
}
