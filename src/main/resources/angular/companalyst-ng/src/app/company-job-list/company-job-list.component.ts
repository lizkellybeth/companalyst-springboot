import { JobDetailsService } from './../job-details.service';
import { Component, OnInit, ViewChild, AfterViewInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CompanyJob } from '../company-job';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-company-job-list',
  templateUrl: './company-job-list.component.html',
  styleUrls: ['./company-job-list.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})

export class CompanyJobListComponent implements OnInit, AfterViewInit, OnChanges {

  @Input() companyJobs!: CompanyJob[];
  filteredJobs: CompanyJob[];
  selectedDetailIDs: string[] = [];

  dataSource: MatTableDataSource<CompanyJob> = new MatTableDataSource(this.companyJobs);
  selection = new SelectionModel<CompanyJob>(true, []);
  displayedColumns: string[] = ['select', 'JDMJobDescHistoryID', 'CompanyJobCode', 'CompanyJobTitle', 'JobFamily', 'JobFLSAStatusDesc'];

  expandedElement: CompanyJob | null;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private jobDetailsService: JobDetailsService) { }

  updateJobList(jobs: CompanyJob[]) {
    this.companyJobs = [...this.companyJobs];
    this.dataSource = new MatTableDataSource(jobs);
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

  clickDetails(job: CompanyJob) {
    console.log("JOBCODE: [" + job.CompanyJobCode + "]");
  }

  public filterHandler(filtered: CompanyJob[]) {
    console.log("filterHandler: " + (filtered));
    this.filteredJobs = filtered;
    this.updateJobList(this.filteredJobs);
  }

  onNgModelChange(e) { // here e is a boolean, true if checked, otherwise false
    this.selectedDetailIDs = [];
    console.log("onNgModelChange()..." + String(e));
    console.log(this.selection.selected.length);
    for (var idx of this.selection.selected.keys()) {
      var obj = this.selection.selected[idx];
      var job = obj as CompanyJob;
      var jobId = job.JDMJobDescHistoryID;
      console.log("key: " + String(idx) + "   value: " + job.JDMJobDescHistoryID);
      this.selectedDetailIDs.push(jobId);
    }
  }

}
