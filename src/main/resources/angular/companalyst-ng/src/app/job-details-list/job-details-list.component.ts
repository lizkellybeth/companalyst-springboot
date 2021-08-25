import { JobDetails } from './../job-details';
import { Component, Input, OnInit, AfterViewInit, OnChanges, SimpleChanges, AfterContentChecked } from '@angular/core';
import { JobDetailsService } from '../job-details.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-job-details-list',
  templateUrl: './job-details-list.component.html',
  styleUrls: ['./job-details-list.component.css']
})
export class JobDetailsListComponent implements OnInit, AfterViewInit, OnChanges {

  @Input() selectedDetailIDs: string[];
  jobDetailsList: JobDetails[] = [];
  dataSource: MatTableDataSource<JobDetails> = new MatTableDataSource(this.jobDetailsList);
  displayedColumns: string[] = ['JobCode'];

  panelOpenState = false;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    //console.log("JobDetailsListComponent -> ngOnChanges! " + this.jobDetailsList.length);
    this.dataSource = new MatTableDataSource(this.jobDetailsList);
}

  ngAfterViewInit(): void {
  }

  ngOnInit(): void {
  }






}
