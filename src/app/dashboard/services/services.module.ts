import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesRoutingModule } from './services-routing.module';
import { ServicesPageComponent } from './pages/services-page/services-page.component';
import { ServicesMainPageComponent } from './pages/services-main-page/services-main-page.component';


@NgModule({
  declarations: [
    ServicesPageComponent,
    ServicesMainPageComponent
  ],
  imports: [
    CommonModule,
    ServicesRoutingModule
  ]
})
export class ServicesModule { }
