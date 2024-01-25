import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserMainPageComponent } from './pages/user-main-page/user-main-page.component';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { MaterialModule } from 'src/app/Shared/material/material.module';
import { UsersTableComponent } from './components/users-table/users-table.component';
import { UsersEditDialogComponent } from './components/users-edit-dialog/users-edit-dialog.component';
import { UsersDeleteDialogComponent } from './components/users-delete-dialog/users-delete-dialog.component';
import { DialogCreateOrganizationComponent } from './components/dialog-create-organization/dialog-create-organization.component';
import { DialogCreateProfessionalComponent } from './components/dialog-create-professional/dialog-create-professional.component';

@NgModule({
  declarations: [
    UserMainPageComponent,
    UserPageComponent,
    UsersTableComponent,
    UsersEditDialogComponent,
    UsersDeleteDialogComponent,
    DialogCreateOrganizationComponent,
    DialogCreateProfessionalComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UserModule { }
