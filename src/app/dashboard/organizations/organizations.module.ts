import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrganizationsRoutingModule } from './organizations-routing.module';
import { OrganizationsPageComponent } from './pages/organizations-page/organizations-page.component';
import { OrganizationsMainPageComponent } from './pages/organizations-main-page/organizations-main-page.component';
import { OrganizationsTableComponent } from './components/organizations-table/organizations-table.component';
import { OrganizationsEditDialogComponent } from './components/organizations-edit-dialog/organizations-edit-dialog.component';
import { OrganizationsDeleteDialogComponent } from './components/organizations-delete-dialog/organizations-delete-dialog.component';
import { MaterialModule } from 'src/app/Shared/material/material.module';
import { OrganizationDetailsPageComponent } from './pages/organization-details-page/organization-details-page.component';
import { OrganizationManagementPageComponent } from './pages/organization-management-page/organization-management-page.component';
import { DetailsComponent } from './components/details/details.component';


@NgModule({
  declarations: [
    OrganizationsPageComponent,
    OrganizationsMainPageComponent,
    OrganizationsTableComponent,
    OrganizationsEditDialogComponent,
    OrganizationsDeleteDialogComponent,
    OrganizationDetailsPageComponent,
    OrganizationManagementPageComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    OrganizationsRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class OrganizationsModule { }
