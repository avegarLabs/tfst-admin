import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountriesMainPageComponent } from './pages/countries-main-page/countries-main-page.component';
import { CountriesPageComponent } from './pages/countries-page/countries-page.component';

const routes: Routes = [
  {
    path: '',
    component: CountriesMainPageComponent,
    children: [
      {
        path: '',
        component:CountriesPageComponent
      },
    ]
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CountriesRoutingModule { }
