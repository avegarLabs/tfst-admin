import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobFormComponent } from './job-form/job-form.component';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ContactByEmailDialogComponent } from './contact-by-email-dialog/contact-by-email-dialog.component';

@NgModule({
  declarations: [
    JobFormComponent,
    ContactByEmailDialogComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports:[JobFormComponent, ContactByEmailDialogComponent]
})
export class SharedModule { }
