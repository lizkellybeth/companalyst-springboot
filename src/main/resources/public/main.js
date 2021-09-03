(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/imM":
/*!****************************************!*\
  !*** ./src/app/job-details.service.ts ***!
  \****************************************/
/*! exports provided: JobDetailsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobDetailsService", function() { return JobDetailsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "l207");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "IheW");




class JobDetailsService {
    constructor(http) {
        this.http = http;
        this.url = _constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].rootUrl + "/companyjob";
    }
    fetchJobDetails(jdmJobDescHistoryID) {
        return this.http.get(this.url + "?jdmJobDescHistoryID=" + jdmJobDescHistoryID).toPromise();
    }
}
JobDetailsService.ɵfac = function JobDetailsService_Factory(t) { return new (t || JobDetailsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
JobDetailsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: JobDetailsService, factory: JobDetailsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JobDetailsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/esharp/development/github/companalyst-springboot/src/main/resources/angular/companalyst-ng/src/main.ts */"zUnb");


/***/ }),

/***/ "7B5x":
/*!****************************************************************!*\
  !*** ./src/app/job-details-list/job-details-list.component.ts ***!
  \****************************************************************/
/*! exports provided: JobDetailsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobDetailsListComponent", function() { return JobDetailsListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/table */ "OaSA");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _company_job_company_job_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../company-job/company-job.component */ "IPB6");





function JobDetailsListComponent_table_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-company-job", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const jobId_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("jdmJobDescHistoryID", jobId_r1);
} }
class JobDetailsListComponent {
    constructor() {
        this.jobDetailsList = [];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](this.jobDetailsList);
        this.displayedColumns = ['JobCode'];
        this.panelOpenState = false;
    }
    ngOnChanges(changes) {
        //console.log("JobDetailsListComponent -> ngOnChanges! " + this.jobDetailsList.length);
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](this.jobDetailsList);
    }
    ngAfterViewInit() {
    }
    ngOnInit() {
    }
}
JobDetailsListComponent.ɵfac = function JobDetailsListComponent_Factory(t) { return new (t || JobDetailsListComponent)(); };
JobDetailsListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: JobDetailsListComponent, selectors: [["app-job-details-list"]], inputs: { selectedDetailIDs: "selectedDetailIDs" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 2, vars: 1, consts: [["id", "jobDetailsDiv"], ["class", "tblSelectedJobDetails", 4, "ngFor", "ngForOf"], [1, "tblSelectedJobDetails"], [3, "jdmJobDescHistoryID"]], template: function JobDetailsListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, JobDetailsListComponent_table_1_Template, 4, 1, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.selectedDetailIDs);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _company_job_company_job_component__WEBPACK_IMPORTED_MODULE_3__["CompanyJobComponent"]], styles: [".tblSelectedJobDetails[_ngcontent-%COMP%]{\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvam9iLWRldGFpbHMtbGlzdC9qb2ItZGV0YWlscy1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0UsV0FBVztBQUNiIiwiZmlsZSI6InNyYy9hcHAvam9iLWRldGFpbHMtbGlzdC9qb2ItZGV0YWlscy1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi50YmxTZWxlY3RlZEpvYkRldGFpbHN7XG4gIHdpZHRoOiAxMDAlO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JobDetailsListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-job-details-list',
                templateUrl: './job-details-list.component.html',
                styleUrls: ['./job-details-list.component.css']
            }]
    }], function () { return []; }, { selectedDetailIDs: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "7GTo":
/*!**********************************************************!*\
  !*** ./src/app/search-filter/search-filter.component.ts ***!
  \**********************************************************/
/*! exports provided: SearchFilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchFilterComponent", function() { return SearchFilterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/form-field */ "Q2Ze");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/input */ "e6WT");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/divider */ "BSbQ");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/chips */ "f44v");








const _c0 = ["matChipList"];
function SearchFilterComponent_option_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const column_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", column_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](column_r3);
} }
function SearchFilterComponent_mat_chip_27_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-chip", 20, 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchFilterComponent_mat_chip_27_Template_mat_chip_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.toggleSelection(_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const fam_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](fam_r4);
} }
class SearchFilterComponent {
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
        this.searchFilterOptionMap = new Map([
            ["Select...", ""],
            ["Job Code", "CompanyJobCode"],
            ["Job Title", "CompanyJobTitle"],
            ["Job Family", "UDF_Job_Family"],
            ["FLSA Status", "UDF_FLSA_Status"],
            ["Large Functional Group", "UDF_Large_Functional_Group"]
        ]);
        this.searchFilterOptions = [];
        this.filterChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.selectedFilter = "";
        this.searchForm = this.formBuilder.group({
            searchText: [''],
            searchFilter: ['']
        });
        var keys = this.searchFilterOptionMap.keys();
        for (var key of keys) {
            this.searchFilterOptions.push(key);
        }
    }
    ngAfterViewInit() { }
    ngOnChanges(changes) { }
    ngOnInit() {
        this.filteredJobs = [...this.companyJobs];
        this.filterChanged.emit(this.filteredJobs);
    }
    clickClear() {
        this.filteredJobs = [];
        this.searchForm.reset();
        this.filterChanged.emit(this.companyJobs);
        var chips = this.matChipList.chips;
        for (var chip of chips) {
            chip.selected = false;
        }
    }
    clickSearch() {
        console.log("hey! " + JSON.stringify(this.searchForm.value['searchText']));
        var searchText = this.searchForm.value['searchText'];
        var searchFilter = this.searchFilterOptionMap.get(this.searchForm.value['searchFilter']);
        console.log("searchText: " + searchText + " || searchFilter: " + searchFilter);
        var chips = this.matChipList.chips;
        for (var chip of chips) {
            chip.selected = false;
        }
        this.filteredJobs = [];
        for (var job of this.companyJobs) {
            if (searchText.length > 0) {
                if (searchFilter && searchFilter.length > 0) { // filter has been selected...
                    var checkField = String(job[searchFilter]);
                    if (checkField.toUpperCase().includes(searchText.toUpperCase())) {
                        this.filteredJobs.push(job);
                    }
                }
                else { // no filter, check every field ...
                    console.log("NO FILTER");
                    for (var column of this.displayedColumns) {
                        if (column != 'select') {
                            var col = String(job[column]);
                            if ((job[column]) && (col.toUpperCase().includes(searchText.toUpperCase()))) {
                                if (!this.filteredJobs.includes(job)) {
                                    this.filteredJobs.push(job);
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
            }
            else {
                //no search text, do nothing
            }
        }
        this.filteredJobs = [...this.filteredJobs]; //alerts the angular change detection mechanism
        this.filterChanged.emit(this.filteredJobs);
    }
    toggleSelection(chip) {
        console.log("chip.selected? " + chip.selected);
        this.clickClear();
        chip.toggleSelected();
        if (chip.selected) {
            console.log("chip.selected");
            var temp = [];
            var filterArray = [];
            if (this.filteredJobs.length > 0) {
                filterArray = [...this.filteredJobs];
            }
            else {
                filterArray = [...this.companyJobs];
            }
            for (var job of filterArray) {
                if (job.UDF_Job_Family === chip.value) {
                    temp.push(job);
                }
            }
            this.filteredJobs = [...temp];
        }
        else {
            console.log("NOT chip.selected");
            this.filteredJobs = [...this.companyJobs];
        }
        this.filterChanged.emit(this.filteredJobs);
    }
}
SearchFilterComponent.ɵfac = function SearchFilterComponent_Factory(t) { return new (t || SearchFilterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
SearchFilterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SearchFilterComponent, selectors: [["app-search-filter"]], viewQuery: function SearchFilterComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.matChipList = _t.first);
    } }, inputs: { companyJobs: "companyJobs", displayedColumns: "displayedColumns", jobFamilies: "jobFamilies" }, outputs: { filterChanged: "filterChanged" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 28, vars: 4, consts: [["id", "searchform", 1, "example-form", 3, "formGroup"], ["id", "divSearchFilters", 1, "mat-elevation-z6"], ["id", "divJobSearch", 1, "mat-elevation-z6"], ["id", "filterOpts"], ["id", "filter-field"], ["formControlName", "searchFilter", "matNativeControl", ""], [3, "value", 4, "ngFor", "ngForOf"], ["aria-hidden", "true", 1, "fa", "fa-filter", "filterFunnel"], ["id", "filterTxt"], ["id", "search-field"], ["formControlName", "searchText", "matInput", "", "placeholder", "Some text", "value", ""], ["aria-hidden", "true", 1, "fa", "fa-search", "fa-1", "searchGlass", 3, "click"], ["mat-raised-button", "", 1, "hidden", 3, "click"], ["id", "clearfilters"], ["id", "clearSearch", 3, "click"], ["id", "divFilterButtons"], ["selectable", ""], ["matChipList", "matChipList"], [3, "click", 4, "ngFor", "ngForOf"], [3, "value"], [3, "click"], ["c", "matChip"]], template: function SearchFilterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Filter on...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "select", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, SearchFilterComponent_option_8_Template, 2, 2, "option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-form-field", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Search Text");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchFilterComponent_Template_i_click_15_listener() { return ctx.clickSearch(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchFilterComponent_Template_button_click_16_listener() { return ctx.clickSearch(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchFilterComponent_Template_button_click_21_listener() { return ctx.clickClear(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Clear Filters");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-chip-list", 16, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, SearchFilterComponent_mat_chip_27_Template, 3, 1, "mat-chip", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.searchForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.searchFilterOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Filter Results: ", ctx.filteredJobs.length, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.jobFamilies);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatLabel"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__["MatDivider"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_6__["MatChipList"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_6__["MatChip"]], styles: ["#searchform[_ngcontent-%COMP%] {\n    display: inline-block;\n    width: 20%;\n    margin-right: 20px;\n  }\n  \n  .example-form[_ngcontent-%COMP%] {\n    min-widthx: 150px;\n    max-widthx: 500px;\n    display: flex;\n  }\n  \n  .example-full-width[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  \n  .mat-form-field[_ngcontent-%COMP%] {\n    display: inline-block;\n    position: relative;\n    text-align: left;\n    margin-right: 20px;\n  }\n  \n  #search-field[_ngcontent-%COMP%]{\n    display: inline-block;\n    widthxxx: 40%;\n  }\n  \n  #filter-field[_ngcontent-%COMP%]{\n    display: inline-block;\n    float: left;\n  }\n  \n  #btn-div[_ngcontent-%COMP%]{\n    display: inline-block;\n    float: right;\n  }\n  \n  #divJobSearch[_ngcontent-%COMP%]:after {\n    content: \"\";\n    display: table;\n    clear: both;\n  }\n  \n  #divJobListExpandable[_ngcontent-%COMP%] {\n    margin: 15px;\n    margin-right: 15px;\n    width: 35%;\n  }\n  \n  .mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-wrapper[_ngcontent-%COMP%]   .mat-form-field-wrapper[_ngcontent-%COMP%]   .ng-tns-c82-1[_ngcontent-%COMP%] {\n    padding-bottom: 0px;\n  }\n  \n  .searchGlass[_ngcontent-%COMP%] {\n    margin-left: -10px;\n    margin-right: 20px\n  }\n  \n  .filterFunnel[_ngcontent-%COMP%] {\n    float: left;\n    margin-top: 20px;\n  }\n  \n  .hidden[_ngcontent-%COMP%]{\n    display:none;\n  }\n  \n  .cafieldgroup[_ngcontent-%COMP%]{\n    border-style: solid;\n    border-width: 1px;\n    border-radius: 5px;\n    padding: 5px\n  }\n  \n  h5[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n  \n  #divJobSearch[_ngcontent-%COMP%]{\n    border-style:solid;\n    border-width: 0px;\n    margin: 15px;\n    border-radius: 10px;\n    padding-left: 15px;\n    padding-right: 15px;\n    padding-top: 5px;\n    padding-bottom: 5px;\n    text-align: right;\n    display: inline-block;\n  }\n  \n  #divFilterButtons[_ngcontent-%COMP%] {\n    margin-top: 15px;\n    margin-bottom: 20px;\n    margin-left: 15px;\n    margin-right: 15px;\n    display: inline-block;\n    vertical-align: top;\n    height: 600px;\n    overflow: scroll;\n  }\n  \n  #divSearchFilters[_ngcontent-%COMP%] {\n    width: 97%;\n    margin: auto;\n    margin: 15px;\n    border-radius: 10px;\n    padding: 8px;\n  }\n  \n  mat-chip-list[_ngcontent-%COMP%]{\n\n  }\n  \n  mat-chip[_ngcontent-%COMP%]{\n    display:inline-flex;\n    float: left;\n    width: 100%;\n  }\n  \n  #filterOpts[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  \n  #filterTxt[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  \n  #clearfilters[_ngcontent-%COMP%] {\n    padding-leftxx: 65%;\n    padding: 5px;\n    margin: 5px;\n  }\n  \n  #clearSearch[_ngcontent-%COMP%]{\n    margin-left: 20px;\n    margin: 5px;\n    float: right;\n  }\n  \n  #searchform[_ngcontent-%COMP%] {\n    width: 20%;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VhcmNoLWZpbHRlci9zZWFyY2gtZmlsdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7RUFFRTtJQUNFLHFCQUFxQjtJQUNyQixVQUFVO0lBQ1Ysa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxXQUFXO0VBQ2I7O0VBRUE7SUFDRSxxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxxQkFBcUI7SUFDckIsYUFBYTtFQUNmOztFQUVBO0lBQ0UscUJBQXFCO0lBQ3JCLFdBQVc7RUFDYjs7RUFFQTtJQUNFLHFCQUFxQjtJQUNyQixZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsY0FBYztJQUNkLFdBQVc7RUFDYjs7RUFHQTtJQUNFLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsVUFBVTtFQUNaOztFQUVBO0lBQ0UsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCO0VBQ0Y7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsWUFBWTtFQUNkOztFQUVBO0lBQ0UsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEI7RUFDRjs7RUFFQTtJQUNFLGtCQUFrQjtFQUNwQjs7RUFHQTtJQUNFLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLHFCQUFxQjtFQUN2Qjs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxVQUFVO0lBQ1YsWUFBWTtJQUNaLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsWUFBWTtFQUNkOztFQUVBOztFQUVBOztFQUVBO0lBQ0UsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxXQUFXO0VBQ2I7O0VBR0E7SUFDRSxXQUFXO0VBQ2I7O0VBRUE7SUFDRSxXQUFXO0VBQ2I7O0VBRUE7SUFDRSxtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLFdBQVc7RUFDYjs7RUFFQTtJQUNFLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsWUFBWTtFQUNkOztFQUVBO0lBQ0UsVUFBVTtFQUNaIiwiZmlsZSI6InNyYy9hcHAvc2VhcmNoLWZpbHRlci9zZWFyY2gtZmlsdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgXG4gICNzZWFyY2hmb3JtIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDIwJTtcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gIH1cbiAgXG4gIC5leGFtcGxlLWZvcm0ge1xuICAgIG1pbi13aWR0aHg6IDE1MHB4O1xuICAgIG1heC13aWR0aHg6IDUwMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cbiAgXG4gIC5leGFtcGxlLWZ1bGwtd2lkdGgge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIFxuICAubWF0LWZvcm0tZmllbGQge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gIH1cbiAgXG4gICNzZWFyY2gtZmllbGR7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoeHh4OiA0MCU7XG4gIH1cbiAgXG4gICNmaWx0ZXItZmllbGR7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGZsb2F0OiBsZWZ0O1xuICB9XG4gIFxuICAjYnRuLWRpdntcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICB9XG4gIFxuICAjZGl2Sm9iU2VhcmNoOmFmdGVyIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIGRpc3BsYXk6IHRhYmxlO1xuICAgIGNsZWFyOiBib3RoO1xuICB9XG4gIFxuICBcbiAgI2RpdkpvYkxpc3RFeHBhbmRhYmxlIHtcbiAgICBtYXJnaW46IDE1cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICAgIHdpZHRoOiAzNSU7XG4gIH1cbiAgXG4gIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeSAubWF0LWZvcm0tZmllbGQtd3JhcHBlciAubWF0LWZvcm0tZmllbGQtd3JhcHBlciAubmctdG5zLWM4Mi0xIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xuICB9XG4gIFxuICAuc2VhcmNoR2xhc3Mge1xuICAgIG1hcmdpbi1sZWZ0OiAtMTBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHhcbiAgfVxuICBcbiAgLmZpbHRlckZ1bm5lbCB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgfVxuICBcbiAgLmhpZGRlbntcbiAgICBkaXNwbGF5Om5vbmU7XG4gIH1cbiAgXG4gIC5jYWZpZWxkZ3JvdXB7XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItd2lkdGg6IDFweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgcGFkZGluZzogNXB4XG4gIH1cbiAgXG4gIGg1IHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuXG4gICNkaXZKb2JTZWFyY2h7XG4gICAgYm9yZGVyLXN0eWxlOnNvbGlkO1xuICAgIGJvcmRlci13aWR0aDogMHB4O1xuICAgIG1hcmdpbjogMTVweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIHBhZGRpbmctbGVmdDogMTVweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICAgIHBhZGRpbmctdG9wOiA1cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIH1cblxuICAjZGl2RmlsdGVyQnV0dG9ucyB7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICAgIG1hcmdpbi1yaWdodDogMTVweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICBoZWlnaHQ6IDYwMHB4O1xuICAgIG92ZXJmbG93OiBzY3JvbGw7XG4gIH1cblxuICAjZGl2U2VhcmNoRmlsdGVycyB7XG4gICAgd2lkdGg6IDk3JTtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgbWFyZ2luOiAxNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgcGFkZGluZzogOHB4O1xuICB9XG5cbiAgbWF0LWNoaXAtbGlzdHtcblxuICB9XG5cbiAgbWF0LWNoaXB7XG4gICAgZGlzcGxheTppbmxpbmUtZmxleDtcbiAgICBmbG9hdDogbGVmdDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gXG4gICNmaWx0ZXJPcHRzIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gICNmaWx0ZXJUeHQge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgI2NsZWFyZmlsdGVycyB7XG4gICAgcGFkZGluZy1sZWZ0eHg6IDY1JTtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgbWFyZ2luOiA1cHg7XG4gIH1cblxuICAjY2xlYXJTZWFyY2h7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgbWFyZ2luOiA1cHg7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICB9XG5cbiAgI3NlYXJjaGZvcm0ge1xuICAgIHdpZHRoOiAyMCU7XG4gIH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchFilterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-search-filter',
                templateUrl: './search-filter.component.html',
                styleUrls: ['./search-filter.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }]; }, { matChipList: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['matChipList']
        }], companyJobs: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], displayedColumns: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], jobFamilies: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], filterChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "IPB6":
/*!******************************************************!*\
  !*** ./src/app/company-job/company-job.component.ts ***!
  \******************************************************/
/*! exports provided: CompanyJobComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyJobComponent", function() { return CompanyJobComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _job_details_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../job-details.service */ "/imM");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/expansion */ "o4Yh");





function CompanyJobComponent_table_2_tr_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const key_r4 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](key_r4.split("_").join(" ").replace("UDF", ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.jobDetails[key_r4]);
} }
function CompanyJobComponent_table_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CompanyJobComponent_table_2_tr_1_Template, 5, 2, "tr", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.fieldsToShow);
} }
function CompanyJobComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-panel-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " fetching... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class CompanyJobComponent {
    constructor(jobDetailsService) {
        this.jobDetailsService = jobDetailsService;
        this.expanded = false;
        //keys: string[] = [];
        this.fieldsToShow = [
            "CompanyJobCode",
            "CompanyJobTitle",
            "CompanyJobSummary",
            "UDF_FLSA_Classification",
            "UDF_Pay_Grade",
            "UDF_Large_Functional_Group",
            "UDF_Job_Family",
            "UDF_Minimum_Education_Requirement",
            "UDF_Minimum_Experience_Requirement",
            "UDF_Position_Designation",
            "UDF_Locations_applicable_to_Safety_Sensitive_for_this_position",
            "UDF_Essential_Duties_and_Responsibilities",
            "UDF_Education_Detail",
            "UDF_Experience_Detail",
            "UDF_Qualifications_and_Competencies",
            "UDF_Nature_of_Work",
            "UDF_Physical_Requirements"
        ];
    }
    ngAfterViewInit() {
    }
    ngOnInit() {
        this.fetchJobDetails(this.jdmJobDescHistoryID);
    }
    fetchJobDetails(jdmJobDescHistoryID) {
        console.log("CompanyJobComponent fetchJobDetails! " + jdmJobDescHistoryID);
        this.jobDetailsService.fetchJobDetails(jdmJobDescHistoryID)
            .then(res => {
            console.log("fetched result: " + (res));
            var details = res;
            console.log("DETAILS: [" + details.JDMJobDescHistoryID + "]");
            this.jobDetails = details;
        })
            .catch(err => {
            console.error(err);
        });
    }
    toggleIcon() {
        console.log('toggle!');
        this.expanded = !this.expanded;
    }
}
CompanyJobComponent.ɵfac = function CompanyJobComponent_Factory(t) { return new (t || CompanyJobComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_job_details_service__WEBPACK_IMPORTED_MODULE_1__["JobDetailsService"])); };
CompanyJobComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CompanyJobComponent, selectors: [["app-company-job"]], inputs: { jdmJobDescHistoryID: "jdmJobDescHistoryID" }, decls: 5, vars: 2, consts: [[1, "jobdetailscard", "mat-table", "cdk-table", "mat-elevation-z8", "ng-tns-c138-0"], ["id", "tblJobDetails", 4, "ngIf", "ngIfElse"], ["fetching", ""], ["id", "tblJobDetails"], ["class", "jobDetailsRow", 4, "ngFor", "ngForOf"], [1, "jobDetailsRow"], [1, "jobDetailsHeader"], [1, "jobDetailsCell"]], template: function CompanyJobComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CompanyJobComponent_table_2_Template, 2, 1, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CompanyJobComponent_ng_template_3_Template, 2, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.jobDetails != null)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__["MatExpansionPanelTitle"]], styles: ["#tblJobDetails[_ngcontent-%COMP%] {\n    width: 95%;\n    text-align: left;\n    margin: auto;\n    table-layout: fixed;\n    word-wrap: break-word;\n}\n\n#tblJobDetails[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], #tblUserDefinedFields[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    border-top: 1px;\n    border-bottom: 0px;\n    border-left: 0px;\n    border-right: 0px;\n    border-style: dashed;\n    vertical-align: top;\n}\n\n#tblJobDetails[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], #tblUserDefinedFields[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{\n    border-top: 1px;\n    border-bottom: 0px;\n    border-left: 0px;\n    border-right: 0px;\n    border-style: dashed ;\n    vertical-align: top;\n}\n\n.example-card[_ngcontent-%COMP%] {\n    max-width: 90%;\n    max-height: 400px;\n  }\n\n.example-header-image[_ngcontent-%COMP%] {\n    background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');\n    background-size: cover;\n  }\n\nmat-card[_ngcontent-%COMP%] {\n    overflow: auto;\n}\n\n.jobdetailscard[_ngcontent-%COMP%] {\n    border-style: solid;\n    border-width: 0px;\n    margin-left: 15px;\n    margin-right: 15px;\n    margin-top: 15px;\n    margin-bottom: 15px;\n    border-radius: 10px;\n    display: inline-block;\n    vertical-align: top;\n    padding: 16px;\n}\n\n.jobDetailsHeader[_ngcontent-%COMP%] {\n    width: 30%;\n    padding: 5px;\n}\n\n.jobDetailsHeader[_ngcontent-%COMP%] {\n    background-size: initial;\n    background-repeat: no-repeat;\n    min-width: 24px;\n}\n\n.expandIcon[_ngcontent-%COMP%] {\n    background-image: url('/assets/expand-sm.png');\n}\n\n.collapseIcon[_ngcontent-%COMP%] {\n    background-image: url('/assets/collapse-sm.png');\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcGFueS1qb2IvY29tcGFueS1qb2IuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixxQkFBcUI7SUFDckIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGlCQUFpQjtFQUNuQjs7QUFFQTtJQUNFLG1GQUFtRjtJQUNuRixzQkFBc0I7RUFDeEI7O0FBRUY7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsYUFBYTtBQUNqQjs7QUFHQTtJQUNJLFVBQVU7SUFDVixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLDRCQUE0QjtJQUM1QixlQUFlO0FBQ25COztBQUVBO0lBQ0ksOENBQThDO0FBQ2xEOztBQUVBO0lBQ0ksZ0RBQWdEO0FBQ3BEIiwiZmlsZSI6InNyYy9hcHAvY29tcGFueS1qb2IvY29tcGFueS1qb2IuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiN0YmxKb2JEZXRhaWxzIHtcbiAgICB3aWR0aDogOTUlO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHRhYmxlLWxheW91dDogZml4ZWQ7XG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xufVxuXG4jdGJsSm9iRGV0YWlscyB0ZCAsICN0YmxVc2VyRGVmaW5lZEZpZWxkcyAgdGQge1xuICAgIGJvcmRlci10b3A6IDFweDtcbiAgICBib3JkZXItYm90dG9tOiAwcHg7XG4gICAgYm9yZGVyLWxlZnQ6IDBweDtcbiAgICBib3JkZXItcmlnaHQ6IDBweDtcbiAgICBib3JkZXItc3R5bGU6IGRhc2hlZDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xufVxuXG4jdGJsSm9iRGV0YWlscyB0aCAsICN0YmxVc2VyRGVmaW5lZEZpZWxkcyAgdGh7XG4gICAgYm9yZGVyLXRvcDogMXB4O1xuICAgIGJvcmRlci1ib3R0b206IDBweDtcbiAgICBib3JkZXItbGVmdDogMHB4O1xuICAgIGJvcmRlci1yaWdodDogMHB4O1xuICAgIGJvcmRlci1zdHlsZTogZGFzaGVkIDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xufVxuXG4uZXhhbXBsZS1jYXJkIHtcbiAgICBtYXgtd2lkdGg6IDkwJTtcbiAgICBtYXgtaGVpZ2h0OiA0MDBweDtcbiAgfVxuICBcbiAgLmV4YW1wbGUtaGVhZGVyLWltYWdlIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vbWF0ZXJpYWwuYW5ndWxhci5pby9hc3NldHMvaW1nL2V4YW1wbGVzL3NoaWJhMS5qcGcnKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICB9XG5cbm1hdC1jYXJkIHtcbiAgICBvdmVyZmxvdzogYXV0bztcbn1cblxuLmpvYmRldGFpbHNjYXJkIHtcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIGJvcmRlci13aWR0aDogMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICAgIG1hcmdpbi1yaWdodDogMTVweDtcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICBwYWRkaW5nOiAxNnB4O1xufVxuXG5cbi5qb2JEZXRhaWxzSGVhZGVyIHtcbiAgICB3aWR0aDogMzAlO1xuICAgIHBhZGRpbmc6IDVweDtcbn1cblxuLmpvYkRldGFpbHNIZWFkZXIge1xuICAgIGJhY2tncm91bmQtc2l6ZTogaW5pdGlhbDtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIG1pbi13aWR0aDogMjRweDtcbn1cblxuLmV4cGFuZEljb24ge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9leHBhbmQtc20ucG5nJyk7XG59XG5cbi5jb2xsYXBzZUljb24ge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9jb2xsYXBzZS1zbS5wbmcnKTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CompanyJobComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-company-job',
                templateUrl: './company-job.component.html',
                styleUrls: ['./company-job.component.css']
            }]
    }], function () { return [{ type: _job_details_service__WEBPACK_IMPORTED_MODULE_1__["JobDetailsService"] }]; }, { jdmJobDescHistoryID: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "SDik":
/*!****************************************************************!*\
  !*** ./src/app/company-job-list/company-job-list.component.ts ***!
  \****************************************************************/
/*! exports provided: CompanyJobListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyJobListComponent", function() { return CompanyJobListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/sort */ "LUZP");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ "OaSA");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/paginator */ "5QHs");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/animations */ "GS7A");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/collections */ "CtHx");
/* harmony import */ var _job_details_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../job-details.service */ "/imM");
/* harmony import */ var _search_filter_search_filter_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../search-filter/search-filter.component */ "7GTo");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _company_job_company_job_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../company-job/company-job.component */ "IPB6");














function CompanyJobListComponent_th_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Job Code ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CompanyJobListComponent_td_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r16.CompanyJobCode, " ");
} }
function CompanyJobListComponent_th_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Job Title ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CompanyJobListComponent_td_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r17.CompanyJobTitle, " ");
} }
function CompanyJobListComponent_th_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Large functional Group ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CompanyJobListComponent_td_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r18.UDF_Large_Functional_Group, " ");
} }
function CompanyJobListComponent_th_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Job Family ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CompanyJobListComponent_td_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r19.UDF_Job_Family, " ");
} }
function CompanyJobListComponent_th_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Pay Grade ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CompanyJobListComponent_td_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r20.UDF_Pay_Grade, " ");
} }
function CompanyJobListComponent_th_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "FLSA Classification ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CompanyJobListComponent_td_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r21.UDF_FLSA_Classification, " ");
} }
function CompanyJobListComponent_td_22_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-company-job", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("jdmJobDescHistoryID", ctx_r23.selectedJDMJobDescHistoryID);
} }
function CompanyJobListComponent_td_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CompanyJobListComponent_td_22_div_2_Template, 2, 1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r22 = ctx.$implicit;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("colspan", ctx_r12.displayedColumns.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@detailExpand", element_r22 == ctx_r12.expandedElement ? "expanded" : "collapsed");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r12.selectedJDMJobDescHistoryID != null && ctx_r12.selectedJDMJobDescHistoryID == element_r22.JDMJobDescHistoryID);
} }
function CompanyJobListComponent_tr_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 26);
} }
function CompanyJobListComponent_tr_24_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CompanyJobListComponent_tr_24_Template_tr_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); const element_r24 = ctx.$implicit; const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); ctx_r25.expandedElement = ctx_r25.expandedElement === element_r24 ? null : element_r24; return ctx_r25.fetchJobDetails(element_r24.JDMJobDescHistoryID); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r24 = ctx.$implicit;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("example-expanded-row", ctx_r14.expandedElement === element_r24);
} }
function CompanyJobListComponent_tr_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 28);
} }
const _c0 = function () { return ["expandedDetail"]; };
const _c1 = function () { return [15, 30, 60]; };
class CompanyJobListComponent {
    constructor(jobDetailsService) {
        this.jobDetailsService = jobDetailsService;
        this.selectedDetailIDs = [];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.companyJobs);
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_5__["SelectionModel"](true, []);
        //displayedColumns: string[] = ['select', 'JDMJobDescHistoryID', 'CompanyJobCode', 'CompanyJobTitle', 'JobFamily', 'JobFLSAStatusDesc'];
        this.displayedColumns = ['CompanyJobCode', 'CompanyJobTitle', 'UDF_Large_Functional_Group', 'UDF_Job_Family', 'UDF_Pay_Grade', 'UDF_FLSA_Classification'];
    }
    onChangeEventFunc(row, evt) {
        var checked = evt.checked;
        var jobId = row.JDMJobDescHistoryID;
        if (checked === true) {
            if (this.selectedDetailIDs.indexOf(jobId) < 0) {
                this.selectedDetailIDs.push(jobId);
            }
            else {
                //jobid already in list
            }
        }
        else {
            var temp = [];
            for (var id of this.selectedDetailIDs) {
                if (id !== jobId) { // add all jobIds to temp array except the one being unselected
                    temp.push(id);
                }
                else {
                    //dont add jobid being unselected
                }
            }
            this.selectedDetailIDs = [...temp];
        }
    }
    filterHandler(filtered) {
        //console.log("filterHandler: " + (filtered));
        this.filteredJobs = [...filtered];
        if (filtered.length === 0) {
            this.clearSelections();
        }
        //this.updateJobList(this.filteredJobs);
        this.companyJobs = [...this.companyJobs];
        if (this.filteredJobs.length > 0) {
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.filteredJobs);
        }
        else {
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.companyJobs);
        }
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }
    onNgModelChange(e) {
        console.log("DEEEEBUG ####### onNgModelChange()..." + String(e));
        this.updateJobList();
        return true;
    }
    clearSelections() {
        this.selectedDetailIDs = [];
        this.selection.clear();
        this.dataSource.data.forEach(row => this.selection.deselect(row));
    }
    updateJobList() {
        console.log("##### debug companyjoblist.updateJobList");
        this.selectedDetailIDs = [];
        console.log("selected: " + this.selection.selected.length);
        for (var idx of this.selection.selected.keys()) {
            var obj = this.selection.selected[idx];
            var job = obj;
            var jobId = job.JDMJobDescHistoryID;
            console.log("key: " + String(idx) + "   value: " + job.JDMJobDescHistoryID);
            this.selectedDetailIDs.push(jobId);
        }
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.companyJobs);
        this.dataSource.sort = this.sort;
    }
    ngOnChanges(changes) {
        console.log("##### debug companyjoblist.ngOnChanges");
        this.updateJobList();
        setTimeout(() => this.dataSource.paginator = this.paginator);
    }
    ngAfterViewInit() {
        this.updateJobList();
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
    fetchJobDetails(jdmJobDescHistoryID) {
        console.log("CompanyJobComponent fetchJobDetails! " + jdmJobDescHistoryID);
        this.selectedJDMJobDescHistoryID = jdmJobDescHistoryID;
    }
}
CompanyJobListComponent.ɵfac = function CompanyJobListComponent_Factory(t) { return new (t || CompanyJobListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_job_details_service__WEBPACK_IMPORTED_MODULE_6__["JobDetailsService"])); };
CompanyJobListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CompanyJobListComponent, selectors: [["app-company-job-list"]], viewQuery: function CompanyJobListComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_1__["MatSort"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
    } }, inputs: { companyJobs: "companyJobs", jobFamilies: "jobFamilies" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 27, vars: 10, consts: [[3, "companyJobs", "jobFamilies", "displayedColumns", "filterChanged"], ["id", "divJobListExpandable", 1, "mat-elevation-z6"], ["mat-table", "", "matSort", "", "multiTemplateDataRows", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "CompanyJobCode"], ["mat-header-cell", "", "mat-sort-header", "", "class", "tableCell15", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "CompanyJobTitle"], ["mat-header-cell", "", "mat-sort-header", "", "class", "tableCell25", 4, "matHeaderCellDef"], ["matColumnDef", "UDF_Large_Functional_Group"], ["matColumnDef", "UDF_Job_Family"], ["matColumnDef", "UDF_Pay_Grade"], ["mat-header-cell", "", "mat-sort-header", "", "class", "tableCell10", 4, "matHeaderCellDef"], ["matColumnDef", "UDF_FLSA_Classification"], ["matColumnDef", "expandedDetail"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", "class", "example-element-row", 3, "example-expanded-row", "click", 4, "matRowDef", "matRowDefColumns"], ["mat-row", "", "class", "example-detail-row", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", 3, "pageSizeOptions"], ["mat-header-cell", "", "mat-sort-header", "", 1, "tableCell15"], ["mat-cell", ""], ["mat-header-cell", "", "mat-sort-header", "", 1, "tableCell25"], ["mat-header-cell", "", "mat-sort-header", "", 1, "tableCell10"], [1, "example-element-detail"], ["class", "example-element-description", 4, "ngIf"], [1, "example-element-description"], [3, "jdmJobDescHistoryID"], ["mat-header-row", ""], ["mat-row", "", 1, "example-element-row", 3, "click"], ["mat-row", "", 1, "example-detail-row"]], template: function CompanyJobListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-search-filter", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("filterChanged", function CompanyJobListComponent_Template_app_search_filter_filterChanged_0_listener($event) { return ctx.filterHandler($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](3, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CompanyJobListComponent_th_4_Template, 2, 0, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CompanyJobListComponent_td_5_Template, 2, 1, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](6, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CompanyJobListComponent_th_7_Template, 2, 0, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, CompanyJobListComponent_td_8_Template, 2, 1, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](9, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, CompanyJobListComponent_th_10_Template, 2, 0, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, CompanyJobListComponent_td_11_Template, 2, 1, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](12, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, CompanyJobListComponent_th_13_Template, 2, 0, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, CompanyJobListComponent_td_14_Template, 2, 1, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](15, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, CompanyJobListComponent_th_16_Template, 2, 0, "th", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, CompanyJobListComponent_td_17_Template, 2, 1, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](18, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, CompanyJobListComponent_th_19_Template, 2, 0, "th", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, CompanyJobListComponent_td_20_Template, 2, 1, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](21, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, CompanyJobListComponent_td_22_Template, 3, 3, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, CompanyJobListComponent_tr_23_Template, 1, 0, "tr", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, CompanyJobListComponent_tr_24_Template, 1, 2, "tr", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, CompanyJobListComponent_tr_25_Template, 1, 0, "tr", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "mat-paginator", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("companyJobs", ctx.companyJobs)("jobFamilies", ctx.jobFamilies)("displayedColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c1));
    } }, directives: [_search_filter_search_filter_component__WEBPACK_IMPORTED_MODULE_7__["SearchFilterComponent"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_1__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_1__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCell"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _company_job_company_job_component__WEBPACK_IMPORTED_MODULE_9__["CompanyJobComponent"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRow"]], styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\ntr.example-detail-row[_ngcontent-%COMP%] {\n  height: 0;\n}\n\ntr.example-element-row[_ngcontent-%COMP%]:not(.example-expanded-row):hover {\n  background: whitesmoke;\n}\n\ntr.example-element-row[_ngcontent-%COMP%]:not(.example-expanded-row):active {\n  background: #efefef;\n}\n\n.example-element-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border-bottom-width: 0;\n}\n\n.example-element-detail[_ngcontent-%COMP%] {\n  overflow: hidden;\n  display: flex;\n}\n\n.example-element-description[_ngcontent-%COMP%] {\n  padding: 16px;\n}\n\n#divJobSearch[_ngcontent-%COMP%]{\n  padding-left: 15px;\n  padding-right: 15px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  text-align: right;\n}\n\n.mat-paginatorx[_ngcontent-%COMP%]{\n  display: inline-block;\n}\n\n#search-form[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n\n.example-form[_ngcontent-%COMP%] {\n  min-widthx: 150px;\n  max-widthx: 500px;\n  display: block;\n}\n\n.example-full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.mat-form-field[_ngcontent-%COMP%] {\n  display: inline-block;\n  position: relative;\n  text-align: left;\n  margin-right: 20px;\n}\n\n#search-field[_ngcontent-%COMP%]{\n  display: inline-block;\n  width: 40%;\n}\n\n#filter-field[_ngcontent-%COMP%]{\n  display: inline-block;\n  float: left;\n  width: 40%;\n}\n\n#btn-div[_ngcontent-%COMP%]{\n  display: inline-block;\n  float: right;\n}\n\n#divJobSearch[_ngcontent-%COMP%]:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n#divJobSearch[_ngcontent-%COMP%]{\n  border-style:solid;\n  border-width: 0px;\n  margin-left: 15px;\n  margin-right: 15px;\n  margin-top: 15px;\n  border-radius: 10px;\n}\n\n.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-wrapper[_ngcontent-%COMP%]   .mat-form-field-wrapper[_ngcontent-%COMP%]   .ng-tns-c82-1[_ngcontent-%COMP%] {\n  padding-bottom: 0px;\n}\n\n.searchGlass[_ngcontent-%COMP%] {\n  margin-left: -10px;\n  margin-right: 20px\n}\n\n.filterFunnel[_ngcontent-%COMP%] {\n  float: left;\n  margin-top: 20px;\n}\n\n.hidden[_ngcontent-%COMP%]{\n  display:none;\n}\n\n.cafieldgroup[_ngcontent-%COMP%]{\n  border-style: solid;\n  border-width: 1px;\n  border-radius: 5px;\n  padding: 5px\n}\n\nh5[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.jobDesc[_ngcontent-%COMP%] {\n  font-family: Arial, Helvetica, sans-serif;\n  color:rgb(99, 99, 99);\n}\n\n#divJobListExpandable[_ngcontent-%COMP%] {\n  border-style: solid;\n  border-width: 0px;\n  margin-left: 15px;\n  margin-right: 15px;\n  margin-top: 15px;\n  border-radius: 10px;\n  width: 75%;\n  display: inline-block;\n  vertical-align: top;\n  padding: 16px;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  padding-bottom: 10px;\n}\n\napp-search-filter[_ngcontent-%COMP%] {\n  width: 43%;\n}\n\n#jobDetailsList[_ngcontent-%COMP%] {\n   display: inline-block;\n   width: 38%;\n    display: inline-block;\n    vertical-align: top;\n}\n\n.mat-table[_ngcontent-%COMP%] {\n  table-layoutxx:fixed;\n  heightxx: 600px;\n}\n\n.tableCell4[_ngcontent-%COMP%] {\n  width: 4%;\n}\n\n.tableCell10[_ngcontent-%COMP%] {\n  width: 10%;\n}\n\n.tableCell15[_ngcontent-%COMP%] {\n  width: 15%;\n}\n\n.tableCell25[_ngcontent-%COMP%] {\n  width: 25%;\n}\n\n\n\ntr.example-detail-row[_ngcontent-%COMP%] {\n  height: 0;\n}\n\ntr.example-element-row[_ngcontent-%COMP%]:not(.example-expanded-row):hover {\n  background: whitesmoke;\n}\n\ntr.example-element-row[_ngcontent-%COMP%]:not(.example-expanded-row):active {\n  background: #efefef;\n}\n\n.example-element-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border-bottom-width: 0;\n}\n\n.example-element-detail[_ngcontent-%COMP%] {\n  overflow: hidden;\n  display: flex;\n}\n\n.example-element-diagram[_ngcontent-%COMP%] {\n  min-width: 80px;\n  border: 2px solid black;\n  padding: 8px;\n  font-weight: lighter;\n  margin: 8px 0;\n  height: 104px;\n}\n\n.example-element-symbol[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 40px;\n  line-height: normal;\n}\n\n.example-element-description[_ngcontent-%COMP%] {\n  padding: 16px;\n}\n\n.example-element-description-attribution[_ngcontent-%COMP%] {\n  opacity: 0.5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcGFueS1qb2ItbGlzdC9jb21wYW55LWpvYi1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGlCQUFpQjtBQUNuQjs7QUFHQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsV0FBVztFQUNYLFVBQVU7QUFDWjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCO0FBQ0Y7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEI7QUFDRjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHlDQUF5QztFQUN6QyxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixVQUFVO0VBQ1YscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsMkJBQW1CO0VBQW5CLHdCQUFtQjtFQUFuQixtQkFBbUI7RUFDbkIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0dBQ0cscUJBQXFCO0dBQ3JCLFVBQVU7SUFDVCxxQkFBcUI7SUFDckIsbUJBQW1CO0FBQ3ZCOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBR0E7RUFDRSxVQUFVO0FBQ1o7O0FBZ0JBLFNBQVM7O0FBQ1Q7RUFDRSxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZUFBZTtFQUNmLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osb0JBQW9CO0VBQ3BCLGFBQWE7RUFDYixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2NvbXBhbnktam9iLWxpc3QvY29tcGFueS1qb2ItbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xuICB3aWR0aDogMTAwJTtcbn1cblxudHIuZXhhbXBsZS1kZXRhaWwtcm93IHtcbiAgaGVpZ2h0OiAwO1xufVxuXG50ci5leGFtcGxlLWVsZW1lbnQtcm93Om5vdCguZXhhbXBsZS1leHBhbmRlZC1yb3cpOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogd2hpdGVzbW9rZTtcbn1cblxudHIuZXhhbXBsZS1lbGVtZW50LXJvdzpub3QoLmV4YW1wbGUtZXhwYW5kZWQtcm93KTphY3RpdmUge1xuICBiYWNrZ3JvdW5kOiAjZWZlZmVmO1xufVxuXG4uZXhhbXBsZS1lbGVtZW50LXJvdyB0ZCB7XG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDA7XG59XG5cbi5leGFtcGxlLWVsZW1lbnQtZGV0YWlsIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmV4YW1wbGUtZWxlbWVudC1kZXNjcmlwdGlvbiB7XG4gIHBhZGRpbmc6IDE2cHg7XG59XG5cbiNkaXZKb2JTZWFyY2h7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbiAgcGFkZGluZy1yaWdodDogMTVweDtcbiAgcGFkZGluZy10b3A6IDVweDtcbiAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cblxuLm1hdC1wYWdpbmF0b3J4e1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbiNzZWFyY2gtZm9ybSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLmV4YW1wbGUtZm9ybSB7XG4gIG1pbi13aWR0aHg6IDE1MHB4O1xuICBtYXgtd2lkdGh4OiA1MDBweDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5leGFtcGxlLWZ1bGwtd2lkdGgge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm1hdC1mb3JtLWZpZWxkIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbn1cblxuI3NlYXJjaC1maWVsZHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogNDAlO1xufVxuXG4jZmlsdGVyLWZpZWxke1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogNDAlO1xufVxuXG4jYnRuLWRpdntcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbiNkaXZKb2JTZWFyY2g6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiB0YWJsZTtcbiAgY2xlYXI6IGJvdGg7XG59XG5cbiNkaXZKb2JTZWFyY2h7XG4gIGJvcmRlci1zdHlsZTpzb2xpZDtcbiAgYm9yZGVyLXdpZHRoOiAwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeSAubWF0LWZvcm0tZmllbGQtd3JhcHBlciAubWF0LWZvcm0tZmllbGQtd3JhcHBlciAubmctdG5zLWM4Mi0xIHtcbiAgcGFkZGluZy1ib3R0b206IDBweDtcbn1cblxuLnNlYXJjaEdsYXNzIHtcbiAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDIwcHhcbn1cblxuLmZpbHRlckZ1bm5lbCB7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4uaGlkZGVue1xuICBkaXNwbGF5Om5vbmU7XG59XG5cbi5jYWZpZWxkZ3JvdXB7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci13aWR0aDogMXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmc6IDVweFxufVxuXG5oNSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmpvYkRlc2Mge1xuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgY29sb3I6cmdiKDk5LCA5OSwgOTkpO1xufVxuXG4jZGl2Sm9iTGlzdEV4cGFuZGFibGUge1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItd2lkdGg6IDBweDtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgd2lkdGg6IDc1JTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICBwYWRkaW5nOiAxNnB4O1xuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cblxuYXBwLXNlYXJjaC1maWx0ZXIge1xuICB3aWR0aDogNDMlO1xufVxuXG4jam9iRGV0YWlsc0xpc3Qge1xuICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgd2lkdGg6IDM4JTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcbn1cblxuLm1hdC10YWJsZSB7XG4gIHRhYmxlLWxheW91dHh4OmZpeGVkO1xuICBoZWlnaHR4eDogNjAwcHg7XG59XG5cbi50YWJsZUNlbGw0IHtcbiAgd2lkdGg6IDQlO1xufVxuXG4udGFibGVDZWxsMTAge1xuICB3aWR0aDogMTAlO1xufVxuXG4udGFibGVDZWxsMTUge1xuICB3aWR0aDogMTUlO1xufVxuXG5cbi50YWJsZUNlbGwyNSB7XG4gIHdpZHRoOiAyNSU7XG59XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4vKiBkZW1vICovXG50ci5leGFtcGxlLWRldGFpbC1yb3cge1xuICBoZWlnaHQ6IDA7XG59XG5cbnRyLmV4YW1wbGUtZWxlbWVudC1yb3c6bm90KC5leGFtcGxlLWV4cGFuZGVkLXJvdyk6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZXNtb2tlO1xufVxuXG50ci5leGFtcGxlLWVsZW1lbnQtcm93Om5vdCguZXhhbXBsZS1leHBhbmRlZC1yb3cpOmFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6ICNlZmVmZWY7XG59XG5cbi5leGFtcGxlLWVsZW1lbnQtcm93IHRkIHtcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogMDtcbn1cblxuLmV4YW1wbGUtZWxlbWVudC1kZXRhaWwge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uZXhhbXBsZS1lbGVtZW50LWRpYWdyYW0ge1xuICBtaW4td2lkdGg6IDgwcHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xuICBwYWRkaW5nOiA4cHg7XG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuICBtYXJnaW46IDhweCAwO1xuICBoZWlnaHQ6IDEwNHB4O1xufVxuXG4uZXhhbXBsZS1lbGVtZW50LXN5bWJvbCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDQwcHg7XG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG59XG5cbi5leGFtcGxlLWVsZW1lbnQtZGVzY3JpcHRpb24ge1xuICBwYWRkaW5nOiAxNnB4O1xufVxuXG4uZXhhbXBsZS1lbGVtZW50LWRlc2NyaXB0aW9uLWF0dHJpYnV0aW9uIHtcbiAgb3BhY2l0eTogMC41O1xufSJdfQ== */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('detailExpand', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ height: '0px', minHeight: '0' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ height: '*' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('expanded <=> collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
            ]),
        ] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CompanyJobListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-company-job-list',
                templateUrl: './company-job-list.component.html',
                styleUrls: ['./company-job-list.component.css'],
                animations: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('detailExpand', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ height: '0px', minHeight: '0' })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ height: '*' })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('expanded <=> collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
                    ]),
                ],
            }]
    }], function () { return [{ type: _job_details_service__WEBPACK_IMPORTED_MODULE_6__["JobDetailsService"] }]; }, { companyJobs: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], jobFamilies: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], sort: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_1__["MatSort"]]
        }], paginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"]]
        }] }); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _company_job_list_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./company-job-list.service */ "iP7m");
/* harmony import */ var _company_job_list_company_job_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./company-job-list/company-job-list.component */ "SDik");




class AppComponent {
    constructor(jobListService) {
        this.jobListService = jobListService;
        this.title = 'companalyst-ng';
        this.companyJobs = [];
        this.jobFamilies = [];
    }
    ngOnInit() {
        this.fetchCompanyJobList();
    }
    ngAfterViewInit() {
        this.companyJobs = [...this.companyJobs];
    }
    fetchCompanyJobList() {
        this.jobListService.fetchCompanyJobList()
            .then(res => {
            console.log("fetched result: " + (res));
            //this.companyJobs = res as CompanyJob[];
            this.companyJobs = [];
            var jobs = res;
            for (let job of jobs) {
                var jobFam = job.UDF_Job_Family;
                if (!this.jobFamilies.includes(jobFam) && jobFam != null && jobFam != 'null' && jobFam != '') {
                    this.jobFamilies.push(jobFam);
                }
                if (job.UDF_Organization.indexOf("NRAO") > -1) {
                    this.companyJobs.push(job);
                }
                else {
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
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_company_job_list_service__WEBPACK_IMPORTED_MODULE_1__["CompanyJobListService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 2, consts: [[3, "companyJobs", "jobFamilies"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-company-job-list", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("companyJobs", ctx.companyJobs)("jobFamilies", ctx.jobFamilies);
    } }, directives: [_company_job_list_company_job_list_component__WEBPACK_IMPORTED_MODULE_2__["CompanyJobListComponent"]], styles: ["app-company-job-list[_ngcontent-%COMP%] {\n    width: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImFwcC1jb21wYW55LWpvYi1saXN0IHtcbiAgICB3aWR0aDogNTAlO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: _company_job_list_service__WEBPACK_IMPORTED_MODULE_1__["CompanyJobListService"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _company_job_list_company_job_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./company-job-list/company-job-list.component */ "SDik");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "omvX");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/table */ "OaSA");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/sort */ "LUZP");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/paginator */ "5QHs");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "e6WT");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ "ZTz/");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/menu */ "rJgo");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/tabs */ "M9ds");
/* harmony import */ var _company_job_company_job_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./company-job/company-job.component */ "IPB6");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/chips */ "f44v");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/card */ "PDjf");
/* harmony import */ var _search_filter_search_filter_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./search-filter/search-filter.component */ "7GTo");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/checkbox */ "pMoy");
/* harmony import */ var _job_details_list_job_details_list_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./job-details-list/job-details-list.component */ "7B5x");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/expansion */ "o4Yh");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/divider */ "BSbQ");























class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTableModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_7__["MatSortModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__["MatPaginatorModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["MatMenuModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__["MatTabsModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_15__["MatChipsModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCardModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_18__["MatCheckboxModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_20__["MatExpansionModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_21__["MatDividerModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _company_job_list_company_job_list_component__WEBPACK_IMPORTED_MODULE_4__["CompanyJobListComponent"],
        _company_job_company_job_component__WEBPACK_IMPORTED_MODULE_14__["CompanyJobComponent"],
        _search_filter_search_filter_component__WEBPACK_IMPORTED_MODULE_17__["SearchFilterComponent"],
        _job_details_list_job_details_list_component__WEBPACK_IMPORTED_MODULE_19__["JobDetailsListComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTableModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_7__["MatSortModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__["MatPaginatorModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["MatMenuModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__["MatTabsModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_15__["MatChipsModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCardModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_18__["MatCheckboxModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_20__["MatExpansionModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_21__["MatDividerModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _company_job_list_company_job_list_component__WEBPACK_IMPORTED_MODULE_4__["CompanyJobListComponent"],
                    _company_job_company_job_component__WEBPACK_IMPORTED_MODULE_14__["CompanyJobComponent"],
                    _search_filter_search_filter_component__WEBPACK_IMPORTED_MODULE_17__["SearchFilterComponent"],
                    _job_details_list_job_details_list_component__WEBPACK_IMPORTED_MODULE_19__["JobDetailsListComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTableModule"],
                    _angular_material_sort__WEBPACK_IMPORTED_MODULE_7__["MatSortModule"],
                    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__["MatPaginatorModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["MatMenuModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__["MatTabsModule"],
                    _angular_material_chips__WEBPACK_IMPORTED_MODULE_15__["MatChipsModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCardModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_18__["MatCheckboxModule"],
                    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_20__["MatExpansionModule"],
                    _angular_material_divider__WEBPACK_IMPORTED_MODULE_21__["MatDividerModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "iP7m":
/*!*********************************************!*\
  !*** ./src/app/company-job-list.service.ts ***!
  \*********************************************/
/*! exports provided: CompanyJobListService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyJobListService", function() { return CompanyJobListService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "l207");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "IheW");




class CompanyJobListService {
    constructor(http) {
        this.http = http;
        this.url = _constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].rootUrl + "companyjoblist";
    }
    fetchCompanyJobList() {
        return this.http.get(this.url).toPromise();
    }
}
CompanyJobListService.ɵfac = function CompanyJobListService_Factory(t) { return new (t || CompanyJobListService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
CompanyJobListService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CompanyJobListService, factory: CompanyJobListService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CompanyJobListService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "l207":
/*!******************************!*\
  !*** ./src/app/constants.ts ***!
  \******************************/
/*! exports provided: Constants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Constants", function() { return Constants; });
class Constants {
}
//public static rootUrl: string = "http://localhost:10001/";
Constants.rootUrl = "";


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map