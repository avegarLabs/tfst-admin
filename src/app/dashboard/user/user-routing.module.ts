import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserMainPageComponent } from './pages/user-main-page/user-main-page.component';
import { UserPageComponent } from './pages/user-page/user-page.component';

const routes: Routes = [
  {
    path: '',
    component: UserMainPageComponent,
    children: [
      {
        path: '',
        component:UserPageComponent
      },
    ]
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
