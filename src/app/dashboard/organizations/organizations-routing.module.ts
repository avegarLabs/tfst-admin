import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrganizationDetailsPageComponent } from './pages/organization-details-page/organization-details-page.component';
import { OrganizationManagementPageComponent } from './pages/organization-management-page/organization-management-page.component';
import { OrganizationsMainPageComponent } from './pages/organizations-main-page/organizations-main-page.component';
import { OrganizationsPageComponent } from './pages/organizations-page/organizations-page.component';

const routes: Routes = [
  {
    path: '',
    component: OrganizationsMainPageComponent,
    children: [
      {
        path: '',
        component:OrganizationsPageComponent
      },
      {
        path: 'details/:moniker',
        component:OrganizationDetailsPageComponent
      },
      {
        path: 'management/:moniker',
        component:OrganizationManagementPageComponent
      },
    ]
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrganizationsRoutingModule { } 
