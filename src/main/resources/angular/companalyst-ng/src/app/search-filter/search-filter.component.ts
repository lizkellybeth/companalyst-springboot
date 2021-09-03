import { Component, EventEmitter, Input, OnInit, Output, OnChanges, SimpleChanges, ViewChildren, ViewChild, AfterViewInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CompanyJob } from '../company-job';
import { MatChip, MatChipList } from '@angular/material/chips';

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.css']
})
export class SearchFilterComponent implements OnInit, AfterViewInit, OnChanges {

  @ViewChild('matChipList') matChipList: MatChipList;

  @Input() companyJobs!: CompanyJob[];
  @Input() displayedColumns: string[];
  @Input() jobFamilies: string[];

  searchFilterOptionMap: Map<string, string> = new Map<string, string>([
    ["Select...", ""],
    ["Job Code", "CompanyJobCode"],
    ["Job Title", "CompanyJobTitle"],
    ["Job Family", "UDF_Job_Family"],
    ["FLSA Status", "UDF_FLSA_Status"],
    ["Large Functional Group", "UDF_Large_Functional_Group"]
  ]);

  searchFilterOptions: string[] = [];

  @Output() filterChanged: EventEmitter<CompanyJob[]> =   new EventEmitter();
  filteredJobs!: CompanyJob[];

  selectedFilter = ""
  searchForm = this.formBuilder.group({
    searchText: [''],
    searchFilter: ['']
  })
  
  constructor(private formBuilder: FormBuilder) { 
    var keys = this.searchFilterOptionMap.keys();
    for (var key of keys) {
      this.searchFilterOptions.push(key);
    }
  }
  ngAfterViewInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {}

  ngOnInit(): void {
    this.filteredJobs = [...this.companyJobs]
    this.filterChanged.emit(this.filteredJobs);
  }

  clickClear() {
    this.filteredJobs = []
    this.searchForm.reset();
    this.filterChanged.emit(this.companyJobs);
    var chips = this.matChipList.chips;
    for (var chip of chips) {
      chip.selected = false;
    }
  }

  clickSearch() {
    console.log("hey! " + JSON.stringify(this.searchForm.value['searchText']));
    var searchText: string = this.searchForm.value['searchText'];
    var searchFilter: string = this.searchFilterOptionMap.get(this.searchForm.value['searchFilter']);
    console.log("searchText: " + searchText + " || searchFilter: " + searchFilter);
    var chips = this.matChipList.chips;
    for (var chip of chips) {
      chip.selected = false;
    }

    this.filteredJobs = []
    for (var job of this.companyJobs) {
      if (searchText.length > 0) {
        if (searchFilter && searchFilter.length > 0) {// filter has been selected...
          var checkField: string = String(job[searchFilter]);
          if (checkField.toUpperCase().includes(searchText.toUpperCase())) {
            this.filteredJobs.push(job)
          }
        }
        else {// no filter, check every field ...
          console.log("NO FILTER");
          for (var column of this.displayedColumns) {
            if (column != 'select'){
              var col = String(job[column]);
              if ((job[column]) && (col.toUpperCase().includes(searchText.toUpperCase()))) {
                if (!this.filteredJobs.includes(job)) {
                  this.filteredJobs.push(job)
                }
              }
            }
          }

          /*
          //CompanyJobDesc is not included in the table columns
          if ((job["CompanyJobDesc"])) {
            var temp = (job["CompanyJobDesc"]).toUpperCase();
            if (temp.includes(searchText.toUpperCase())) {
              if (!this.filteredJobs.includes(job)) {
                this.filteredJobs.push(job)
              }
            }
          }
          */
        }
    
      } else {
        //no search text, do nothing
      }
    }
    this.filteredJobs = [...this.filteredJobs]; //alerts the angular change detection mechanism
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
        if (job.UDF_Job_Family === chip.value) {
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
