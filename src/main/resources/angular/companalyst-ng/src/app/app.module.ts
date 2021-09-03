import { MatPaginator } from '@angular/material/paginator';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CompanyJobListComponent } from './company-job-list/company-job-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'

import {MatInputModule} from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import {MatMenuModule} from '@angular/material/menu';
import {MatTabsModule} from '@angular/material/tabs';
import { CompanyJobComponent } from './company-job/company-job.component';

import {MatChipsModule} from '@angular/material/chips';
import {MatCardModule} from '@angular/material/card';
import { SearchFilterComponent } from './search-filter/search-filter.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { JobDetailsListComponent } from './job-details-list/job-details-list.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDividerModule} from '@angular/material/divider';

@NgModule({
  declarations: [
    AppComponent,
    CompanyJobListComponent,
    CompanyJobComponent,
    SearchFilterComponent,
    JobDetailsListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatMenuModule,
    MatTabsModule,
    MatChipsModule,
    MatCardModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
