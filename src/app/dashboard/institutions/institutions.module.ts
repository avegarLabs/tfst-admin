import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstitutionsRoutingModule } from './institutions-routing.module';
import { InstitutionsMainPageComponent } from './pages/institutions-main-page/institutions-main-page.component';
import { InstitutionsPageComponent } from './pages/institutions-page/institutions-page.component';
import { MaterialModule } from 'src/app/Shared/material/material.module';
import { InstitutionsTableComponent } from './components/institutions-table/institutions-table.component';
import { InstitutionsEditDialogComponent } from './components/institutions-edit-dialog/institutions-edit-dialog.component';
import { InstitutionsDeleteDialogComponent } from './components/institutions-delete-dialog/institutions-delete-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    InstitutionsMainPageComponent,
    InstitutionsPageComponent,
    InstitutionsTableComponent,
    InstitutionsEditDialogComponent,
    InstitutionsDeleteDialogComponent
  ],
  imports: [
    CommonModule,
    InstitutionsRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class InstitutionsModule { }
