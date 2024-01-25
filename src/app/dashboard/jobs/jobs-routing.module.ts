import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobDetailsPageComponent } from './pages/job-details-page/job-details-page.component';
import { JobsMainPageComponent } from './pages/jobs-main-page/jobs-main-page.component';
import { JobsPageComponent } from './pages/jobs-page/jobs-page.component';

const routes: Routes = [
  {
    path: '',
    component: JobsMainPageComponent,
    children: [
      {
        path: '',
        component:JobsPageComponent
      },
      {
        path: 'details/:moniker',
        component:JobDetailsPageComponent
      },
    ]
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobsRoutingModule { }
