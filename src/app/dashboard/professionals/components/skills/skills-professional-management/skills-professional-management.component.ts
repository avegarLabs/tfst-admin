import { Component, Input, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { SkillLevelService } from 'src/app/Core/services/skill-level.service';
import { ProfessionalSkill } from 'src/app/models/professional';
import { DetailsService } from '../../../service/details.service';
import { ProfessionalService } from '../../../service/professional.service';
import { SkillProfessionalDeleteComponent } from '../skill-professional-delete/skill-professional-delete.component';
import { SkillProfessionalDialogComponent } from '../skill-professional-dialog/skill-professional-dialog.component';

export interface DialogData {
  id: string;
  skill: ProfessionalSkill;
}

@Component({
  selector: 'app-skills-professional-management',
  templateUrl: './skills-professional-management.component.html',
  styleUrls: ['./skills-professional-management.component.scss']
})
export class SkillsProfessionalManagementComponent implements OnInit {

  skills!:ProfessionalSkill[];
  @Input() professionalId!: string

  constructor(
    public dialog: MatDialog,
    public professionalService: DetailsService,
    public skillMapService: SkillLevelService
  ) { }

  ngOnInit(): void {
    this.getSkills();
  }

  getSkills(){
    this.professionalService.listSkills(this.professionalId).subscribe(
     skills=>{
       this.skills=skills
     })
 }

 addSkill(){
   const dialogRef = this.dialog.open(SkillProfessionalDialogComponent, {data:{id: this.professionalId, skill: null}});
   dialogRef.afterClosed().subscribe(result => {
     this.getSkills()
   });
 }

 editSkill(skill:ProfessionalSkill){
   const dialogRef = this.dialog.open(SkillProfessionalDialogComponent, {data:{id: this.professionalId, skill: skill}});
   dialogRef.afterClosed().subscribe(result => {
     this.getSkills()
   });
 }

 mapSkillValue(level: number): string{
   return this.skillMapService.mapLevelValuetoString(level)
 }

 deleteSkill(skill:ProfessionalSkill){
   const dialogRef = this.dialog.open(SkillProfessionalDeleteComponent, {data:{id: this.professionalId, skill: skill}});
   dialogRef.afterClosed().subscribe(result => {
     this.getSkills()
   });
 }

}
