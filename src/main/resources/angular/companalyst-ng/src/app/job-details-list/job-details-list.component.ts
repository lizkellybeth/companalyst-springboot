import { JobDetails } from './../job-details';
import { Component, Input, OnInit, AfterViewInit, OnChanges, SimpleChanges, AfterContentChecked } from '@angular/core';
import { JobDetailsService } from '../job-details.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-job-details-list',
  templateUrl: './job-details-list.component.html',
  styleUrls: ['./job-details-list.component.css']
})
export class JobDetailsListComponent implements OnInit, AfterViewInit, OnChanges, AfterContentChecked {

  @Input() selectedDetailIDs: string[];
  jobDetailsList: JobDetails[] = [];
  dataSource: MatTableDataSource<JobDetails> = new MatTableDataSource(this.jobDetailsList);
  displayedColumns: string[] = ['JobCode'];

  panelOpenState = false;

  constructor(private jobDetailsService: JobDetailsService) { }

  ngAfterContentChecked(): void {
    console.log("JobDetailsListComponent -> ngAfterContentChecked!");
    this.dataSource = new MatTableDataSource(this.jobDetailsList);
  }


  ngOnChanges(changes: SimpleChanges): void {
    console.log("JobDetailsListComponent -> ngOnChanges!");
    this.jobDetailsList = [];
    for (var jobId of this.selectedDetailIDs) {
      console.log("selectedDetailIDs: " + jobId);
      this.fetchJobDetails(jobId);
    }
  }

  ngAfterViewInit(): void {
  }

  ngOnInit(): void {
  }

  public fetchJobDetails(jdmJobDescHistoryID: string) {
    console.log("CompanyJobComponent fetchJobDetails! " + jdmJobDescHistoryID)
    this.jobDetailsService.fetchJobDetails(jdmJobDescHistoryID)
      .then(res => {
        console.log("fetched result: " + (res));
        var details: JobDetails = res as JobDetails;
        console.log("DETAILS: [" + details.JDMJobDescHistoryID + "]");
        if (!this.jobDetailsList.includes(details)) {
          console.log("jobDetailsList does not contain: " + details.CompanyJobTitle);
          this.jobDetailsList.push(details);
        }
        console.log("jobDetailsList.length: " + this.jobDetailsList.length);
      })
      .catch(err => {
        console.error(err);
      });
  }




}
