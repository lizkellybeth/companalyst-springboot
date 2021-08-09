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


@Component({
  selector: 'app-company-job-list',
  templateUrl: './company-job-list.component.html',
  styleUrls: ['./company-job-list.component.css'],
  changeDetection: ChangeDetectionStrategy.Default,
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
  @Input() displayedColumns: string[];

  dataSource: MatTableDataSource<CompanyJob> = new MatTableDataSource(this.companyJobs);

  filteredJobs: CompanyJob[] = []
  jobDetails: JobDetails[] = [];
  //displayedColumns: string[] = ['JDMJobDescHistoryID', 'CompanyJobCode', 'CompanyJobTitle', 'JobFamily', 'JobLevel', 'JobFLSAStatusDesc'];
  expandedElement: CompanyJob | null;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  selectedFilter = ""
  searchForm = this.formBuilder.group({
    searchText: [''],
    searchFilter: ['']
  })
  
  constructor( private jobDetailsService: JobDetailsService, private formBuilder: FormBuilder, private cdr: ChangeDetectorRef) {  }
  ngOnChanges(changes: SimpleChanges): void {
    //this.companyJobs = [...this.companyJobs]
    this.filteredJobs = this.companyJobs;
    this.dataSource  = new MatTableDataSource(this.filteredJobs);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    //console.log("HEY! [" + this.companyJobs + "]");
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
}

  ngOnDestroy() {
    
  }

  clickDetails(job: CompanyJob){
    console.log("JOBCODE: [" + job.CompanyJobCode + "]");
  }
}
