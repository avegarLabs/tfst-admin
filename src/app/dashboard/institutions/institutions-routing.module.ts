import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstitutionsMainPageComponent } from './pages/institutions-main-page/institutions-main-page.component';
import { InstitutionsPageComponent } from './pages/institutions-page/institutions-page.component';

const routes: Routes = [
  {
    path: '',
    component: InstitutionsMainPageComponent,
    children: [
      {
        path: '',
        component: InstitutionsPageComponent 
      },
    ]
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstitutionsRoutingModule { }
