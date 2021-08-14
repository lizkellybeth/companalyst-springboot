import { JobDetailsService } from './../job-details.service';
import { Component, OnInit, ViewChild, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CompanyJob } from '../company-job';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { SelectionModel } from '@angular/cdk/collections';
import { MatCheckboxChange } from '@angular/material/checkbox';


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

export class CompanyJobListComponent implements OnInit, OnChanges {

  @Input() companyJobs!: CompanyJob[];
  @Input() jobFamilies!: string[];
  filteredJobs: CompanyJob[];
  selectedDetailIDs: string[] = [];

  dataSource: MatTableDataSource<CompanyJob> = new MatTableDataSource(this.companyJobs);
  selection: SelectionModel<CompanyJob> = new SelectionModel<CompanyJob>(true, []);
  displayedColumns: string[] = ['select', 'JDMJobDescHistoryID', 'CompanyJobCode', 'CompanyJobTitle', 'JobFamily', 'JobFLSAStatusDesc'];

  expandedElement: CompanyJob | null;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private jobDetailsService: JobDetailsService) { }

  onChangeEventFunc(row, evt: MatCheckboxChange) {
    var checked = evt.checked;
    var jobId = row.JDMJobDescHistoryID;
    if (checked === true) {
      if (this.selectedDetailIDs.indexOf(jobId) < 0) {
        this.selectedDetailIDs.push(jobId);
      } else {
        //jobid already in list
      }
    } else {
      var temp: string[] = [];
      for (var id of this.selectedDetailIDs) {
        if (id !== jobId) {// add all jobIds to temp array except the one being unselected
          temp.push(id);
        } else {
          //dont add jobid being unselected
        }
      }
      this.selectedDetailIDs = [...temp];
    }
  }

  public filterHandler(filtered: CompanyJob[]) {
    //console.log("filterHandler: " + (filtered));
    this.filteredJobs = filtered;
    if (filtered.length === 0) {
      this.clearSelections();
    }
    this.updateJobList(this.filteredJobs);
  }

  onNgModelChange(e) {
    this.selectedDetailIDs = [];
    console.log("onNgModelChange()..." + String(e));
    console.log("selected: " + this.selection.selected.length);
    for (var idx of this.selection.selected.keys()) {
      var obj = this.selection.selected[idx];
      var job = obj as CompanyJob;
      var jobId = job.JDMJobDescHistoryID;
      console.log("key: " + String(idx) + "   value: " + job.JDMJobDescHistoryID);
      this.selectedDetailIDs.push(jobId);
    }
    return true;
  }

  clearSelections() {
    this.selectedDetailIDs = [];
    this.selection.clear();
    this.dataSource.data.forEach(row => this.selection.deselect(row));
  }

  updateJobList(jobs: CompanyJob[]) {
    this.companyJobs = [...this.companyJobs];
    this.dataSource = new MatTableDataSource(jobs);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.updateJobList(this.companyJobs);
  }

  ngOnInit(): void {

  }

  /** Whether the number of selected elements matches the total number of rows. 
   * https://material.angular.io/components/table/overview#selection
  */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected == numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

}
