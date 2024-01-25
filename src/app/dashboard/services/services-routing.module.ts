import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicesMainPageComponent } from './pages/services-main-page/services-main-page.component';
import { ServicesPageComponent } from './pages/services-page/services-page.component';

const routes: Routes = [
  {
    path: '',
    component: ServicesMainPageComponent,
    children: [
      {
        path: '',
        component: ServicesPageComponent
      },
    ]
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicesRoutingModule { }
