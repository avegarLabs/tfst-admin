import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountriesRoutingModule } from './countries-routing.module';
import { CountriesMainPageComponent } from './pages/countries-main-page/countries-main-page.component';
import { CountriesPageComponent } from './pages/countries-page/countries-page.component';


@NgModule({
  declarations: [
    CountriesMainPageComponent,
    CountriesPageComponent
  ],
  imports: [
    CommonModule,
    CountriesRoutingModule
  ]
})
export class CountriesModule { }
