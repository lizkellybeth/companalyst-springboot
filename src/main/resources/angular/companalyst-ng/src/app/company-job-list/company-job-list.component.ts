import { JobDetailsService } from './../job-details.service';
import { CompanyJobListService } from './../company-job-list.service';
import { Component, OnInit, ViewChild, AfterViewInit, ElementRef, OnDestroy, Input, ChangeDetectorRef, OnChanges, SimpleChanges } from '@angular/core';
import { CompanyJob } from '../company-job';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { FormBuilder } from '@angular/forms';
import { JobDetails } from '../job-details';
import { ChangeDetectionStrategy } from '@angular/core';
import { CdkRow } from '@angular/cdk/table';


@Component({
  selector: 'app-company-job-list',
  templateUrl: './company-job-list.component.html',
  styleUrls: ['./company-job-list.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})

export class CompanyJobListComponent implements OnInit, AfterViewInit, OnChanges {

  @Input() companyJobs!: CompanyJob[];
  filteredJobs: CompanyJob[];

  dataSource: MatTableDataSource<CompanyJob> = new MatTableDataSource(this.companyJobs);
  displayedColumns: string[] = ['JDMJobDescHistoryID', 'CompanyJobCode', 'CompanyJobTitle', 'JobFamily', 'JobLevel', 'JobFLSAStatusDesc'];

  expandedElement: CompanyJob | null;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor( private jobDetailsService: JobDetailsService) {  }

  updateJobList(jobs: CompanyJob[]){
    this.companyJobs = [...this.companyJobs];
    this.dataSource  = new MatTableDataSource(jobs);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
}

  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges!");
    this.updateJobList(this.companyJobs);
  }

  ngOnInit(): void {
    
  }

  ngAfterViewInit() {

  }

  ngOnDestroy() {
    
  }

  clickDetails(job: CompanyJob){
    console.log("JOBCODE: [" + job.CompanyJobCode + "]");
  }

  public filterHandler(filtered: CompanyJob[]){
    console.log("filterHandler: " + (filtered ));
    this.filteredJobs = [...filtered];
    this.updateJobList(this.filteredJobs);
  }


}
