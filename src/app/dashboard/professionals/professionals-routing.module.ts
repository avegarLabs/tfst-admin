import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfessionalDetailsPageComponent } from './pages/professional-details-page/professional-details-page.component';
import { ProfessionalManagementPageComponent } from './pages/professional-management-page/professional-management-page.component';
import { ProfessionalsMainPageComponent } from './pages/professionals-main-page/professionals-main-page.component';
import { ProfessionalsPageComponent } from './pages/professionals-page/professionals-page.component';

const routes: Routes = [
  {
    path: '',
    component: ProfessionalsMainPageComponent,
    children: [
      {
        path: '',
        component:ProfessionalsPageComponent
      },
      {
        path: 'details/:moniker',
        component:ProfessionalDetailsPageComponent
      },
      {
        path: 'management/:moniker',
        component:ProfessionalManagementPageComponent
      },
    ]
    },
]; 

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfessionalsRoutingModule { }
