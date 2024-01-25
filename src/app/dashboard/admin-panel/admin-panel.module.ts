import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminPanelRoutingModule } from './admin-panel-routing.module';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { MaterialModule } from 'src/app/Shared/material/material.module';


@NgModule({
  declarations: [
    AdminPageComponent
  ],
  imports: [
    CommonModule,
    AdminPanelRoutingModule,
    MaterialModule,
  ]
})
export class AdminPanelModule { }
