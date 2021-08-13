import { state } from '@angular/animations';
import { MatTableDataSource } from '@angular/material/table';
import { Component, EventEmitter, Input, OnInit, Output, OnChanges, SimpleChanges, ViewChildren, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CompanyJob } from '../company-job';
import { MatChip, MatChipList, MatChipListChange, MatChipSelectionChange } from '@angular/material/chips';
import { QueryList } from '@angular/core';

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.css']
})
export class SearchFilterComponent implements OnInit, OnChanges {

  @ViewChild('matChipList') matChipList: MatChipList;

  @Input() companyJobs!: CompanyJob[];
  @Input() displayedColumns: string[];
  @Input() jobFamilies: string[];

  @Output() filterChanged: EventEmitter<CompanyJob[]> =   new EventEmitter();
  filteredJobs!: CompanyJob[];

  selectedFilter = ""
  searchForm = this.formBuilder.group({
    searchText: [''],
    searchFilter: ['']
  })
  
  constructor(private formBuilder: FormBuilder) { }
  ngOnChanges(changes: SimpleChanges): void {}


  ngOnInit(): void {
    this.filteredJobs = [...this.companyJobs]
    this.filterChanged.emit(this.filteredJobs);
  }

  clickClear() {
    this.filteredJobs = [...this.companyJobs]
    this.searchForm.reset();
    this.filterChanged.emit(this.filteredJobs);
    var chips = this.matChipList.chips;
    for (var chip of chips) {
      chip.selected = false;
    }
  }

  clickSearch() {
    console.log("hey! " + JSON.stringify(this.searchForm.value['searchText']));
    var searchText: string = this.searchForm.value['searchText'];
    var searchFilter: string = this.searchForm.value['searchFilter'];
    this.filteredJobs = []
    for (var job of this.companyJobs) {
      if (searchText.length > 0) {
        if (searchFilter && searchFilter.length > 0 && searchFilter != 'select') {// filter has been selected...
          var checkField: string = String(job[searchFilter]);
          if (checkField.includes(searchText)) {
            this.filteredJobs.push(job)
          }
        }
        else {// no filter, check every field ...
          for (var column of this.displayedColumns) {
            if (column != 'select'){
              var col = String(job[column]);
              if ((job[column]) && (col.includes(searchText))) {
                if (!this.filteredJobs.includes(job)) {
                  this.filteredJobs.push(job)
                }
              }
            }
          }
          //CompanyJobDesc is not included in the table columns
          if ((job["CompanyJobDesc"]) && (job["CompanyJobDesc"].includes(searchText))) {
            if (!this.filteredJobs.includes(job)) {
              this.filteredJobs.push(job)
            }
          }
        }
        this.filteredJobs = [...this.filteredJobs]; //alerts the angular change detection mechanism
    
      } else {
        //no search text, do nothing
      }
    }
    this.filterChanged.emit(this.filteredJobs);
  }

  toggleSelection(chip: MatChip) {
    console.log("chip.selected? " + chip.selected);
    this.clickClear();
    chip.toggleSelected();

    if (chip.selected) {
      console.log("chip.selected");
      var temp: CompanyJob[] = [];
      var filterArray: CompanyJob[] = [];
      if (this.filteredJobs.length > 0){
        filterArray = [...this.filteredJobs];
      } else {
        filterArray = [...this.companyJobs];
      }
      for (var job of filterArray) {
        if (job.JobFamily === chip.value) {
          temp.push(job)
        }
      }
      this.filteredJobs = [...temp];
    } else {
      console.log("NOT chip.selected");
      this.filteredJobs = [...this.companyJobs];
    }
    this.filterChanged.emit(this.filteredJobs);

 }




}
