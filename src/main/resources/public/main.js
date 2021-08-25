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
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/chips */ "f44v");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "Q2Ze");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "e6WT");







const _c0 = ["matChipList"];
function SearchFilterComponent_mat_chip_5_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-chip", 16, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchFilterComponent_mat_chip_5_Template_mat_chip_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.toggleSelection(_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const fam_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](fam_r3);
} }
function SearchFilterComponent_option_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const column_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", column_r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](column_r7);
} }
class SearchFilterComponent {
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
        this.searchFilterOptionMap = new Map([
            ["Select...", ""],
            ["Job Code", "CompanyJobCode"],
            ["Job Title", "CompanyJobTitle"],
            ["Job Family", "JobFamily"],
            ["FLSA Status", "JobFLSAStatusDesc"],
            ["Job Description", "CompanyJobDesc"]
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
    ngOnChanges(changes) { }
    ngOnInit() {
        this.filteredJobs = [...this.companyJobs];
        this.filterChanged.emit(this.filteredJobs);
    }
    clickClear() {
        this.filteredJobs = [...this.companyJobs];
        this.searchForm.reset();
        this.filterChanged.emit(this.filteredJobs);
        var chips = this.matChipList.chips;
        for (var chip of chips) {
            chip.selected = false;
        }
    }
    clickSearch() {
        console.log("hey! " + JSON.stringify(this.searchForm.value['searchText']));
        var searchText = this.searchForm.value['searchText'];
        var searchFilter = this.searchFilterOptionMap.get(this.searchForm.value['searchFilter']);
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
                    //CompanyJobDesc is not included in the table columns
                    if ((job["CompanyJobDesc"])) {
                        var temp = (job["CompanyJobDesc"]).toUpperCase();
                        if (temp.includes(searchText.toUpperCase())) {
                            if (!this.filteredJobs.includes(job)) {
                                this.filteredJobs.push(job);
                            }
                        }
                    }
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
                if (job.JobFamily === chip.value) {
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
    } }, inputs: { companyJobs: "companyJobs", displayedColumns: "displayedColumns", jobFamilies: "jobFamilies" }, outputs: { filterChanged: "filterChanged" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 22, vars: 3, consts: [[1, "example-form", 3, "formGroup"], ["id", "divSearchFilters", 1, "mat-elevation-z6"], ["id", "divFilterButtons"], ["selectable", ""], ["matChipList", "matChipList"], [3, "click", 4, "ngFor", "ngForOf"], ["id", "divJobSearch", 1, "mat-elevation-z6"], ["id", "filter-field"], ["formControlName", "searchFilter", "matNativeControl", ""], [3, "value", 4, "ngFor", "ngForOf"], ["aria-hidden", "true", 1, "fa", "fa-filter", "filterFunnel"], ["id", "search-field"], ["formControlName", "searchText", "matInput", "", "placeholder", "Some text", "value", ""], ["aria-hidden", "true", 1, "fa", "fa-search", "fa-1", "searchGlass", 3, "click"], ["mat-raised-button", "", 1, "hidden", 3, "click"], ["id", "clearSearch", 3, "click"], [3, "click"], ["c", "matChip"], [3, "value"]], template: function SearchFilterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-chip-list", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SearchFilterComponent_mat_chip_5_Template, 3, 1, "mat-chip", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Filter on...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "select", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, SearchFilterComponent_option_11_Template, 2, 2, "option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Search Text");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchFilterComponent_Template_i_click_17_listener() { return ctx.clickSearch(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchFilterComponent_Template_button_click_18_listener() { return ctx.clickSearch(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchFilterComponent_Template_button_click_20_listener() { return ctx.clickClear(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Clear");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.searchForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.jobFamilies);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.searchFilterOptions);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_2__["MatChipList"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatLabel"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_2__["MatChip"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"]], styles: ["#divJobSearch[_ngcontent-%COMP%]{\n    padding-left: 15px;\n    padding-right: 15px;\n    padding-top: 5px;\n    padding-bottom: 5px;\n    text-align: right;\n  }\n  \n  #search-form[_ngcontent-%COMP%] {\n    display: inline-block;\n  }\n  \n  .example-form[_ngcontent-%COMP%] {\n    min-widthx: 150px;\n    max-widthx: 500px;\n    display: block;\n  }\n  \n  .example-full-width[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  \n  .mat-form-field[_ngcontent-%COMP%] {\n    display: inline-block;\n    position: relative;\n    text-align: left;\n    margin-right: 20px;\n  }\n  \n  #search-field[_ngcontent-%COMP%]{\n    display: inline-block;\n    width: 40%;\n  }\n  \n  #filter-field[_ngcontent-%COMP%]{\n    display: inline-block;\n    float: left;\n    width: 40%;\n  }\n  \n  #btn-div[_ngcontent-%COMP%]{\n    display: inline-block;\n    float: right;\n  }\n  \n  #divJobSearch[_ngcontent-%COMP%]:after {\n    content: \"\";\n    display: table;\n    clear: both;\n  }\n  \n  #divJobSearch[_ngcontent-%COMP%]{\n    border-style:solid;\n    border-width: 0px;\n    margin-left: 15px;\n    margin-right: 15px;\n    margin-top: 15px;\n    border-radius: 10px;\n  }\n  \n  #divJobListExpandable[_ngcontent-%COMP%] {\n    margin: 15px;\n    margin-right: 15px;\n  }\n  \n  .mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-wrapper[_ngcontent-%COMP%]   .mat-form-field-wrapper[_ngcontent-%COMP%]   .ng-tns-c82-1[_ngcontent-%COMP%] {\n    padding-bottom: 0px;\n  }\n  \n  .searchGlass[_ngcontent-%COMP%] {\n    margin-left: -10px;\n    margin-right: 20px\n  }\n  \n  .filterFunnel[_ngcontent-%COMP%] {\n    float: left;\n    margin-top: 20px;\n  }\n  \n  .hidden[_ngcontent-%COMP%]{\n    display:none;\n  }\n  \n  .cafieldgroup[_ngcontent-%COMP%]{\n    border-style: solid;\n    border-width: 1px;\n    border-radius: 5px;\n    padding: 5px\n  }\n  \n  h5[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n  \n  #divJobSearch[_ngcontent-%COMP%] {\n    margin-top: 15px;\n    margin-bottom: 20px;\n    margin-left: 15px;\n    margin-right: 15px;\n    display: inline-block;\n    width: 38%;\n    border-radius: 10px;\n\n  }\n  \n  #divFilterButtons[_ngcontent-%COMP%] {\n    margin-top: 15px;\n    margin-bottom: 20px;\n    margin-left: 15px;\n    margin-right: 15px;\n    display: inline-block;\n    width: 50%;\n    vertical-align: top;\n  }\n  \n  #divSearchFilters[_ngcontent-%COMP%] {\n    width: 97%;\n    margin: auto;\n    margin-top: 10px;\n    margin-left: 12px;\n    border-radius: 10px;\n  }\n  \n  mat-chip-list[_ngcontent-%COMP%]{\n\n  }\n  \n  mat-chip[_ngcontent-%COMP%]{\n    display:inline-flex;\n    float: left;\n  }\n  \n  #clearSearch[_ngcontent-%COMP%]{\n    vertical-align: bottom;\n    margin-bottom: 10px;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VhcmNoLWZpbHRlci9zZWFyY2gtZmlsdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UscUJBQXFCO0VBQ3ZCOztFQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsV0FBVztFQUNiOztFQUVBO0lBQ0UscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UscUJBQXFCO0lBQ3JCLFVBQVU7RUFDWjs7RUFFQTtJQUNFLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gsVUFBVTtFQUNaOztFQUVBO0lBQ0UscUJBQXFCO0lBQ3JCLFlBQVk7RUFDZDs7RUFFQTtJQUNFLFdBQVc7SUFDWCxjQUFjO0lBQ2QsV0FBVztFQUNiOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxZQUFZO0lBQ1osa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCO0VBQ0Y7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsWUFBWTtFQUNkOztFQUVBO0lBQ0UsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEI7RUFDRjs7RUFFQTtJQUNFLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsVUFBVTtJQUNWLG1CQUFtQjs7RUFFckI7O0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLFVBQVU7SUFDVixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxVQUFVO0lBQ1YsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsbUJBQW1CO0VBQ3JCOztFQUVBOztFQUVBOztFQUVBO0lBQ0UsbUJBQW1CO0lBQ25CLFdBQVc7RUFDYjs7RUFFQTtJQUNFLHNCQUFzQjtJQUN0QixtQkFBbUI7RUFDckIiLCJmaWxlIjoic3JjL2FwcC9zZWFyY2gtZmlsdGVyL3NlYXJjaC1maWx0ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNkaXZKb2JTZWFyY2h7XG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gICAgcGFkZGluZy10b3A6IDVweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICB9XG4gIFxuICAjc2VhcmNoLWZvcm0ge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgfVxuICBcbiAgLmV4YW1wbGUtZm9ybSB7XG4gICAgbWluLXdpZHRoeDogMTUwcHg7XG4gICAgbWF4LXdpZHRoeDogNTAwcHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgXG4gIC5leGFtcGxlLWZ1bGwtd2lkdGgge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIFxuICAubWF0LWZvcm0tZmllbGQge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gIH1cbiAgXG4gICNzZWFyY2gtZmllbGR7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiA0MCU7XG4gIH1cbiAgXG4gICNmaWx0ZXItZmllbGR7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHdpZHRoOiA0MCU7XG4gIH1cbiAgXG4gICNidG4tZGl2e1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBmbG9hdDogcmlnaHQ7XG4gIH1cbiAgXG4gICNkaXZKb2JTZWFyY2g6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgZGlzcGxheTogdGFibGU7XG4gICAgY2xlYXI6IGJvdGg7XG4gIH1cbiAgXG4gICNkaXZKb2JTZWFyY2h7XG4gICAgYm9yZGVyLXN0eWxlOnNvbGlkO1xuICAgIGJvcmRlci13aWR0aDogMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICAgIG1hcmdpbi1yaWdodDogMTVweDtcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIH1cbiAgXG4gICNkaXZKb2JMaXN0RXhwYW5kYWJsZSB7XG4gICAgbWFyZ2luOiAxNXB4O1xuICAgIG1hcmdpbi1yaWdodDogMTVweDtcbiAgfVxuICBcbiAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5IC5tYXQtZm9ybS1maWVsZC13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC13cmFwcGVyIC5uZy10bnMtYzgyLTEge1xuICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XG4gIH1cbiAgXG4gIC5zZWFyY2hHbGFzcyB7XG4gICAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xuICAgIG1hcmdpbi1yaWdodDogMjBweFxuICB9XG4gIFxuICAuZmlsdGVyRnVubmVsIHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICB9XG4gIFxuICAuaGlkZGVue1xuICAgIGRpc3BsYXk6bm9uZTtcbiAgfVxuICBcbiAgLmNhZmllbGRncm91cHtcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIGJvcmRlci13aWR0aDogMXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBwYWRkaW5nOiA1cHhcbiAgfVxuICBcbiAgaDUge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICBcbiAgI2RpdkpvYlNlYXJjaCB7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICAgIG1hcmdpbi1yaWdodDogMTVweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDM4JTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuXG4gIH1cblxuICAjZGl2RmlsdGVyQnV0dG9ucyB7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICAgIG1hcmdpbi1yaWdodDogMTVweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDUwJTtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICB9XG5cbiAgI2RpdlNlYXJjaEZpbHRlcnMge1xuICAgIHdpZHRoOiA5NyU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDEycHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgfVxuXG4gIG1hdC1jaGlwLWxpc3R7XG5cbiAgfVxuXG4gIG1hdC1jaGlwe1xuICAgIGRpc3BsYXk6aW5saW5lLWZsZXg7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gIH1cblxuICAjY2xlYXJTZWFyY2h7XG4gICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB9Il19 */"] });
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
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/expansion */ "o4Yh");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "SVse");





function CompanyJobComponent_mat_expansion_panel_header_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-expansion-panel-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-panel-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.jobDetails.CompanyJobTitle, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r0.expanded ? "collapseIcon" : "expandIcon");
} }
function CompanyJobComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-panel-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " fetching... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CompanyJobComponent_table_6_tr_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const key_r5 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](key_r5.split("_").join(" ").replace("UDF", ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.jobDetails[key_r5]);
} }
function CompanyJobComponent_table_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CompanyJobComponent_table_6_tr_1_Template, 5, 2, "tr", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.fieldsToShow);
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
CompanyJobComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CompanyJobComponent, selectors: [["app-company-job"]], inputs: { jdmJobDescHistoryID: "jdmJobDescHistoryID" }, decls: 7, vars: 3, consts: [[1, "jobdetailscard", "mat-table", "cdk-table", "mat-elevation-z8", "ng-tns-c138-0"], [1, "example-card"], ["hideToggle", "", 3, "click"], [4, "ngIf", "ngIfElse"], ["fetching", ""], ["id", "tblJobDetails", 4, "ngIf"], [1, "jobDetailsHeader", 3, "ngClass"], ["id", "tblJobDetails"], ["class", "jobDetailsRow", 4, "ngFor", "ngForOf"], [1, "jobDetailsRow"], [1, "jobDetailsHeader"], [1, "jobDetailsCell"]], template: function CompanyJobComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-accordion", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-expansion-panel", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CompanyJobComponent_Template_mat_expansion_panel_click_2_listener() { return ctx.toggleIcon(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CompanyJobComponent_mat_expansion_panel_header_3_Template, 4, 2, "mat-expansion-panel-header", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CompanyJobComponent_ng_template_4_Template, 2, 0, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CompanyJobComponent_table_6_Template, 2, 1, "table", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.jobDetails != null)("ngIfElse", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.jobDetails != null);
    } }, directives: [_angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatAccordion"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanelTitle"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: ["#tblJobDetails[_ngcontent-%COMP%] {\n    width: 95%;\n    text-align: left;\n    margin: auto;\n    table-layout: fixed;\n    word-wrap: break-word;\n}\n\n#tblJobDetails[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], #tblUserDefinedFields[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    border-top: 1px;\n    border-bottom: 0px;\n    border-left: 0px;\n    border-right: 0px;\n    border-style: dashed;\n    vertical-align: top;\n}\n\n#tblJobDetails[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], #tblUserDefinedFields[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{\n    border-top: 1px;\n    border-bottom: 0px;\n    border-left: 0px;\n    border-right: 0px;\n    border-style: dashed ;\n    vertical-align: top;\n}\n\n.example-card[_ngcontent-%COMP%] {\n    max-width: 90%;\n    max-height: 400px;\n  }\n\n.example-header-image[_ngcontent-%COMP%] {\n    background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');\n    background-size: cover;\n  }\n\nmat-card[_ngcontent-%COMP%] {\n    overflow: auto;\n}\n\n.jobdetailscard[_ngcontent-%COMP%] {\n    border-style: solid;\n    border-width: 0px;\n    margin-left: 15px;\n    margin-right: 15px;\n    margin-top: 15px;\n    border-radius: 10px;\n    display: inline-block;\n    vertical-align: top;\n    padding: 16px;\n}\n\n.jobDetailsHeader[_ngcontent-%COMP%] {\n    width: 30%;\n    padding: 5px;\n}\n\n.jobDetailsHeader[_ngcontent-%COMP%] {\n    background-size: initial;\n    background-repeat: no-repeat;\n    min-width: 24px;\n}\n\n.expandIcon[_ngcontent-%COMP%] {\n    background-image: url('/assets/expand-sm.png');\n}\n\n.collapseIcon[_ngcontent-%COMP%] {\n    background-image: url('/assets/collapse-sm.png');\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcGFueS1qb2IvY29tcGFueS1qb2IuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixxQkFBcUI7SUFDckIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGlCQUFpQjtFQUNuQjs7QUFFQTtJQUNFLG1GQUFtRjtJQUNuRixzQkFBc0I7RUFDeEI7O0FBRUY7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQixhQUFhO0FBQ2pCOztBQUdBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsNEJBQTRCO0lBQzVCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSw4Q0FBOEM7QUFDbEQ7O0FBRUE7SUFDSSxnREFBZ0Q7QUFDcEQiLCJmaWxlIjoic3JjL2FwcC9jb21wYW55LWpvYi9jb21wYW55LWpvYi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3RibEpvYkRldGFpbHMge1xuICAgIHdpZHRoOiA5NSU7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgdGFibGUtbGF5b3V0OiBmaXhlZDtcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG59XG5cbiN0YmxKb2JEZXRhaWxzIHRkICwgI3RibFVzZXJEZWZpbmVkRmllbGRzICB0ZCB7XG4gICAgYm9yZGVyLXRvcDogMXB4O1xuICAgIGJvcmRlci1ib3R0b206IDBweDtcbiAgICBib3JkZXItbGVmdDogMHB4O1xuICAgIGJvcmRlci1yaWdodDogMHB4O1xuICAgIGJvcmRlci1zdHlsZTogZGFzaGVkO1xuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG59XG5cbiN0YmxKb2JEZXRhaWxzIHRoICwgI3RibFVzZXJEZWZpbmVkRmllbGRzICB0aHtcbiAgICBib3JkZXItdG9wOiAxcHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMHB4O1xuICAgIGJvcmRlci1sZWZ0OiAwcHg7XG4gICAgYm9yZGVyLXJpZ2h0OiAwcHg7XG4gICAgYm9yZGVyLXN0eWxlOiBkYXNoZWQgO1xuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG59XG5cbi5leGFtcGxlLWNhcmQge1xuICAgIG1heC13aWR0aDogOTAlO1xuICAgIG1heC1oZWlnaHQ6IDQwMHB4O1xuICB9XG4gIFxuICAuZXhhbXBsZS1oZWFkZXItaW1hZ2Uge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9tYXRlcmlhbC5hbmd1bGFyLmlvL2Fzc2V0cy9pbWcvZXhhbXBsZXMvc2hpYmExLmpwZycpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIH1cblxubWF0LWNhcmQge1xuICAgIG92ZXJmbG93OiBhdXRvO1xufVxuXG4uam9iZGV0YWlsc2NhcmQge1xuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgYm9yZGVyLXdpZHRoOiAwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICBwYWRkaW5nOiAxNnB4O1xufVxuXG5cbi5qb2JEZXRhaWxzSGVhZGVyIHtcbiAgICB3aWR0aDogMzAlO1xuICAgIHBhZGRpbmc6IDVweDtcbn1cblxuLmpvYkRldGFpbHNIZWFkZXIge1xuICAgIGJhY2tncm91bmQtc2l6ZTogaW5pdGlhbDtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIG1pbi13aWR0aDogMjRweDtcbn1cblxuLmV4cGFuZEljb24ge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9leHBhbmQtc20ucG5nJyk7XG59XG5cbi5jb2xsYXBzZUljb24ge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9jb2xsYXBzZS1zbS5wbmcnKTtcbn0iXX0= */"] });
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
/* harmony import */ var _job_details_list_job_details_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../job-details-list/job-details-list.component */ "7B5x");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/checkbox */ "pMoy");














function CompanyJobListComponent_th_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CompanyJobListComponent_td_5_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-checkbox", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CompanyJobListComponent_td_5_Template_mat_checkbox_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); return $event.stopPropagation(); })("change", function CompanyJobListComponent_td_5_Template_mat_checkbox_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const row_r12 = ctx.$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); ctx_r15.onChangeEventFunc(row_r12, $event); return $event ? ctx_r15.selection.toggle(row_r12) : null; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r12 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r1.selection.isSelected(row_r12));
} }
function CompanyJobListComponent_th_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Job Code ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CompanyJobListComponent_td_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r16.CompanyJobCode, " ");
} }
function CompanyJobListComponent_th_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Job Title ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CompanyJobListComponent_td_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r17.CompanyJobTitle, " ");
} }
function CompanyJobListComponent_th_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Job Family ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CompanyJobListComponent_td_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r18.JobFamily, " ");
} }
function CompanyJobListComponent_th_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " FLSA Status ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CompanyJobListComponent_td_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r19.JobFLSAStatusDesc, " ");
} }
function CompanyJobListComponent_tr_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 25);
} }
function CompanyJobListComponent_tr_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 26);
} }
const _c0 = function () { return [10, 20, 50]; };
class CompanyJobListComponent {
    constructor(jobDetailsService) {
        this.jobDetailsService = jobDetailsService;
        this.selectedDetailIDs = [];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.companyJobs);
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_5__["SelectionModel"](true, []);
        //displayedColumns: string[] = ['select', 'JDMJobDescHistoryID', 'CompanyJobCode', 'CompanyJobTitle', 'JobFamily', 'JobFLSAStatusDesc'];
        this.displayedColumns = ['select', 'CompanyJobCode', 'CompanyJobTitle', 'JobFamily', 'JobFLSAStatusDesc'];
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
    }
    ngAfterViewInit() {
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
CompanyJobListComponent.ɵfac = function CompanyJobListComponent_Factory(t) { return new (t || CompanyJobListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_job_details_service__WEBPACK_IMPORTED_MODULE_6__["JobDetailsService"])); };
CompanyJobListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CompanyJobListComponent, selectors: [["app-company-job-list"]], viewQuery: function CompanyJobListComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_1__["MatSort"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
    } }, inputs: { companyJobs: "companyJobs", jobFamilies: "jobFamilies" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 25, vars: 9, consts: [[3, "companyJobs", "jobFamilies", "displayedColumns", "filterChanged"], ["id", "divJobListExpandable", 1, "mat-elevation-z6"], ["mat-table", "", "matSort", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "select"], ["mat-header-cell", "", "class", "tableCell10", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "CompanyJobCode"], ["mat-header-cell", "", "mat-sort-header", "", "class", "tableCell10", 4, "matHeaderCellDef"], ["matColumnDef", "CompanyJobTitle"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["matColumnDef", "JobFamily"], ["mat-header-cell", "", "mat-sort-header", "", "class", "tableCell25", 4, "matHeaderCellDef"], ["matColumnDef", "JobFLSAStatusDesc"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", 3, "pageSizeOptions"], ["id", "clearSelections", 3, "click"], ["id", "jobDetailsList"], [3, "selectedDetailIDs"], ["mat-header-cell", "", 1, "tableCell10"], ["mat-cell", ""], [3, "checked", "click", "change"], ["mat-header-cell", "", "mat-sort-header", "", 1, "tableCell10"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-header-cell", "", "mat-sort-header", "", 1, "tableCell25"], ["mat-header-row", ""], ["mat-row", ""]], template: function CompanyJobListComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, CompanyJobListComponent_th_10_Template, 2, 0, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, CompanyJobListComponent_td_11_Template, 2, 1, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](12, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, CompanyJobListComponent_th_13_Template, 2, 0, "th", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, CompanyJobListComponent_td_14_Template, 2, 1, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](15, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, CompanyJobListComponent_th_16_Template, 2, 0, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, CompanyJobListComponent_td_17_Template, 2, 1, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, CompanyJobListComponent_tr_18_Template, 1, 0, "tr", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, CompanyJobListComponent_tr_19_Template, 1, 0, "tr", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "mat-paginator", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CompanyJobListComponent_Template_button_click_21_listener() { return ctx.clearSelections(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Clear");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "app-job-details-list", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("companyJobs", ctx.companyJobs)("jobFamilies", ctx.jobFamilies)("displayedColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selectedDetailIDs", ctx.selectedDetailIDs);
    } }, directives: [_search_filter_search_filter_component__WEBPACK_IMPORTED_MODULE_7__["SearchFilterComponent"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_1__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], _job_details_list_job_details_list_component__WEBPACK_IMPORTED_MODULE_8__["JobDetailsListComponent"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCell"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__["MatCheckbox"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_1__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRow"]], styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\ntr.example-detail-row[_ngcontent-%COMP%] {\n  height: 0;\n}\n\ntr.example-element-row[_ngcontent-%COMP%]:not(.example-expanded-row):hover {\n  background: whitesmoke;\n}\n\ntr.example-element-row[_ngcontent-%COMP%]:not(.example-expanded-row):active {\n  background: #efefef;\n}\n\n.example-element-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border-bottom-width: 0;\n}\n\n.example-element-detail[_ngcontent-%COMP%] {\n  overflow: hidden;\n  display: flex;\n}\n\n.example-element-description[_ngcontent-%COMP%] {\n  padding: 16px;\n}\n\n#divJobSearch[_ngcontent-%COMP%]{\n  padding-left: 15px;\n  padding-right: 15px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  text-align: right;\n}\n\n.mat-paginatorx[_ngcontent-%COMP%]{\n  display: inline-block;\n}\n\n#search-form[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n\n.example-form[_ngcontent-%COMP%] {\n  min-widthx: 150px;\n  max-widthx: 500px;\n  display: block;\n}\n\n.example-full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.mat-form-field[_ngcontent-%COMP%] {\n  display: inline-block;\n  position: relative;\n  text-align: left;\n  margin-right: 20px;\n}\n\n#search-field[_ngcontent-%COMP%]{\n  display: inline-block;\n  width: 40%;\n}\n\n#filter-field[_ngcontent-%COMP%]{\n  display: inline-block;\n  float: left;\n  width: 40%;\n}\n\n#btn-div[_ngcontent-%COMP%]{\n  display: inline-block;\n  float: right;\n}\n\n#divJobSearch[_ngcontent-%COMP%]:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n#divJobSearch[_ngcontent-%COMP%]{\n  border-style:solid;\n  border-width: 0px;\n  margin-left: 15px;\n  margin-right: 15px;\n  margin-top: 15px;\n  border-radius: 10px;\n}\n\n.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-wrapper[_ngcontent-%COMP%]   .mat-form-field-wrapper[_ngcontent-%COMP%]   .ng-tns-c82-1[_ngcontent-%COMP%] {\n  padding-bottom: 0px;\n}\n\n.searchGlass[_ngcontent-%COMP%] {\n  margin-left: -10px;\n  margin-right: 20px\n}\n\n.filterFunnel[_ngcontent-%COMP%] {\n  float: left;\n  margin-top: 20px;\n}\n\n.hidden[_ngcontent-%COMP%]{\n  display:none;\n}\n\n.cafieldgroup[_ngcontent-%COMP%]{\n  border-style: solid;\n  border-width: 1px;\n  border-radius: 5px;\n  padding: 5px\n}\n\nh5[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.jobDesc[_ngcontent-%COMP%] {\n  font-family: Arial, Helvetica, sans-serif;\n  color:rgb(99, 99, 99);\n}\n\n#divJobListExpandable[_ngcontent-%COMP%] {\n  border-style: solid;\n  border-width: 0px;\n  margin-left: 15px;\n  margin-right: 15px;\n  margin-top: 15px;\n  border-radius: 10px;\n  width: 40%;\n  display: inline-block;\n  vertical-align: top;\n  padding: 16px;\n}\n\napp-search-filter[_ngcontent-%COMP%] {\n  width: 43%;\n}\n\n#jobDetailsList[_ngcontent-%COMP%] {\n   display: inline-block;\n    width: 53%;\n    display: inline-block;\n    vertical-align: top;\n}\n\n.mat-table[_ngcontent-%COMP%] {\n  table-layout:fixed;\n}\n\n.tableCell10[_ngcontent-%COMP%] {\n  width: 10%;\n}\n\n.tableCell25[_ngcontent-%COMP%] {\n  width: 25%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcGFueS1qb2ItbGlzdC9jb21wYW55LWpvYi1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGlCQUFpQjtBQUNuQjs7QUFHQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsV0FBVztFQUNYLFVBQVU7QUFDWjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCO0FBQ0Y7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEI7QUFDRjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHlDQUF5QztFQUN6QyxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixVQUFVO0VBQ1YscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7R0FDRyxxQkFBcUI7SUFDcEIsVUFBVTtJQUNWLHFCQUFxQjtJQUNyQixtQkFBbUI7QUFDdkI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBR0E7RUFDRSxVQUFVO0FBQ1oiLCJmaWxlIjoic3JjL2FwcC9jb21wYW55LWpvYi1saXN0L2NvbXBhbnktam9iLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbnRyLmV4YW1wbGUtZGV0YWlsLXJvdyB7XG4gIGhlaWdodDogMDtcbn1cblxudHIuZXhhbXBsZS1lbGVtZW50LXJvdzpub3QoLmV4YW1wbGUtZXhwYW5kZWQtcm93KTpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHdoaXRlc21va2U7XG59XG5cbnRyLmV4YW1wbGUtZWxlbWVudC1yb3c6bm90KC5leGFtcGxlLWV4cGFuZGVkLXJvdyk6YWN0aXZlIHtcbiAgYmFja2dyb3VuZDogI2VmZWZlZjtcbn1cblxuLmV4YW1wbGUtZWxlbWVudC1yb3cgdGQge1xuICBib3JkZXItYm90dG9tLXdpZHRoOiAwO1xufVxuXG4uZXhhbXBsZS1lbGVtZW50LWRldGFpbCB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5leGFtcGxlLWVsZW1lbnQtZGVzY3JpcHRpb24ge1xuICBwYWRkaW5nOiAxNnB4O1xufVxuXG4jZGl2Sm9iU2VhcmNoe1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG5cbi5tYXQtcGFnaW5hdG9yeHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4jc2VhcmNoLWZvcm0ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5leGFtcGxlLWZvcm0ge1xuICBtaW4td2lkdGh4OiAxNTBweDtcbiAgbWF4LXdpZHRoeDogNTAwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uZXhhbXBsZS1mdWxsLXdpZHRoIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5tYXQtZm9ybS1maWVsZCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG5cbiNzZWFyY2gtZmllbGR7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDQwJTtcbn1cblxuI2ZpbHRlci1maWVsZHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDQwJTtcbn1cblxuI2J0bi1kaXZ7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4jZGl2Sm9iU2VhcmNoOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogdGFibGU7XG4gIGNsZWFyOiBib3RoO1xufVxuXG4jZGl2Sm9iU2VhcmNoe1xuICBib3JkZXItc3R5bGU6c29saWQ7XG4gIGJvcmRlci13aWR0aDogMHB4O1xuICBtYXJnaW4tbGVmdDogMTVweDtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kgLm1hdC1mb3JtLWZpZWxkLXdyYXBwZXIgLm1hdC1mb3JtLWZpZWxkLXdyYXBwZXIgLm5nLXRucy1jODItMSB7XG4gIHBhZGRpbmctYm90dG9tOiAwcHg7XG59XG5cbi5zZWFyY2hHbGFzcyB7XG4gIG1hcmdpbi1sZWZ0OiAtMTBweDtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4XG59XG5cbi5maWx0ZXJGdW5uZWwge1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLmhpZGRlbntcbiAgZGlzcGxheTpub25lO1xufVxuXG4uY2FmaWVsZGdyb3Vwe1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItd2lkdGg6IDFweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiA1cHhcbn1cblxuaDUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5qb2JEZXNjIHtcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOnJnYig5OSwgOTksIDk5KTtcbn1cblxuI2RpdkpvYkxpc3RFeHBhbmRhYmxlIHtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLXdpZHRoOiAwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHdpZHRoOiA0MCU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgcGFkZGluZzogMTZweDtcbn1cblxuYXBwLXNlYXJjaC1maWx0ZXIge1xuICB3aWR0aDogNDMlO1xufVxuXG4jam9iRGV0YWlsc0xpc3Qge1xuICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiA1MyU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG59XG5cbi5tYXQtdGFibGUge1xuICB0YWJsZS1sYXlvdXQ6Zml4ZWQ7XG59XG5cbi50YWJsZUNlbGwxMCB7XG4gIHdpZHRoOiAxMCU7XG59XG5cblxuLnRhYmxlQ2VsbDI1IHtcbiAgd2lkdGg6IDI1JTtcbn0iXX0= */"], data: { animation: [
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
            this.companyJobs = res;
            var ct = 0;
            for (let job of this.companyJobs) {
                job.Selected = false;
                job.Position = ct;
                var jobFam = job.JobFamily;
                if (!this.jobFamilies.includes(jobFam) && jobFam != null) {
                    this.jobFamilies.push(jobFam);
                }
                ct++;
            }
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
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_20__["MatExpansionModule"]
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
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_20__["MatExpansionModule"]] }); })();
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
                    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_20__["MatExpansionModule"]
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