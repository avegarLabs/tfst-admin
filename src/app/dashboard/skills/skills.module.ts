import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkillsRoutingModule } from './skills-routing.module';
import { SkillsMainPageComponent } from './pages/skills-main-page/skills-main-page.component';
import { SkillsPageComponent } from './pages/skills-page/skills-page.component';
import { SkillsTableComponent } from './components/skills-table/skills-table.component';
import { SkillsEditDialogComponent } from './components/skills-edit-dialog/skills-edit-dialog.component';
import { SkillsDeleteDialogComponent } from './components/skills-delete-dialog/skills-delete-dialog.component';
import { MaterialModule } from 'src/app/Shared/material/material.module';


@NgModule({
  declarations: [
    SkillsMainPageComponent,
    SkillsPageComponent,
    SkillsTableComponent,
    SkillsEditDialogComponent,
    SkillsDeleteDialogComponent
  ],
  imports: [
    CommonModule,
    SkillsRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class SkillsModule { }
