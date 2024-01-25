import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobsRoutingModule } from './jobs-routing.module';
import { JobsMainPageComponent } from './pages/jobs-main-page/jobs-main-page.component';
import { JobsPageComponent } from './pages/jobs-page/jobs-page.component';
import { MaterialModule } from 'src/app/Shared/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JobsTableComponent } from './components/jobs-table/jobs-table.component';
import { JobDetailsPageComponent } from './pages/job-details-page/job-details-page.component';
import { DetailsComponent } from './components/details/details.component';
import { SharedModule } from 'src/app/Shared/shared/shared.module';
import { DeleteJobDialogComponent } from './components/delete-job-dialog/delete-job-dialog.component';
import { StatusJobDialogComponent } from './components/status-job-dialog/status-job-dialog.component';


@NgModule({
  declarations: [
    JobsMainPageComponent,
    JobsPageComponent,
    JobsTableComponent,
    JobDetailsPageComponent,
    DetailsComponent,
    DeleteJobDialogComponent,
    StatusJobDialogComponent
  ],
  imports: [
    CommonModule,
    JobsRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule
  ]
})
export class JobsModule { }
