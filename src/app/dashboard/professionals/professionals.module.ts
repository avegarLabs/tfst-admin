import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfessionalsRoutingModule } from './professionals-routing.module';
import { ProfessionalsMainPageComponent } from './pages/professionals-main-page/professionals-main-page.component';
import { ProfessionalsPageComponent } from './pages/professionals-page/professionals-page.component';
import { MaterialModule } from 'src/app/Shared/material/material.module';
import { ProfessionalsTableComponent } from './components/professionals-table/professionals-table.component';
import { ProfessionalsEditDialogComponent } from './components/professionals-edit-dialog/professionals-edit-dialog.component';
import { ProfessionalsDeleteDialogComponent } from './components/professionals-delete-dialog/professionals-delete-dialog.component';
import { ProfessionalDetailsPageComponent } from './pages/professional-details-page/professional-details-page.component';
import { DetailsComponent } from './components/details/details.component';
import { ProfessionalManagementPageComponent } from './pages/professional-management-page/professional-management-page.component';
import { PositionsManagementComponent } from './components/positions/positions-management/positions-management.component';
import { PositionDeleteComponent } from './components/positions/position-delete/position-delete.component';
import { PositionDialogComponent } from './components/positions/position-dialog/position-dialog.component';
import { TitlesManagementComponent } from './components/titles/titles-management/titles-management.component';
import { TitlesDeleteComponent } from './components/titles/titles-delete/titles-delete.component';
import { TitleDialogComponent } from './components/titles/title-dialog/title-dialog.component';
import { SkillsProfessionalManagementComponent } from './components/skills/skills-professional-management/skills-professional-management.component';
import { SkillProfessionalDeleteComponent } from './components/skills/skill-professional-delete/skill-professional-delete.component';
import { SkillProfessionalDialogComponent } from './components/skills/skill-professional-dialog/skill-professional-dialog.component';
import { JobsSugestionsComponent } from './components/jobs-sugestions/jobs-sugestions.component';


@NgModule({
  declarations: [
    ProfessionalsMainPageComponent,
    ProfessionalsPageComponent,
    ProfessionalsTableComponent,
    ProfessionalsEditDialogComponent,
    ProfessionalsDeleteDialogComponent,
    ProfessionalDetailsPageComponent,
    DetailsComponent,
    ProfessionalManagementPageComponent,
    PositionsManagementComponent,
    PositionDeleteComponent,
    PositionDialogComponent,
    TitlesManagementComponent,
    TitlesDeleteComponent,
    TitleDialogComponent,
    SkillsProfessionalManagementComponent,
    SkillProfessionalDeleteComponent,
    SkillProfessionalDialogComponent,
    JobsSugestionsComponent,
  ],
  imports: [
    CommonModule,
    ProfessionalsRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class ProfessionalsModule { }
