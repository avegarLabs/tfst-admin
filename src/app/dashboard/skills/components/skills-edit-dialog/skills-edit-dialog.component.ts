import { Skill } from './../../../../models/skills';
import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SkillsService } from '../../service/skills.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-skills-edit-dialog',
  templateUrl: './skills-edit-dialog.component.html',
  styleUrls: ['./skills-edit-dialog.component.scss']
})
export class SkillsEditDialogComponent implements OnInit {

  skillForm!:FormGroup;

  constructor(
    private formBuilder:FormBuilder,
    @Inject(MAT_DIALOG_DATA) public skill: Skill,
    private dialogRef: MatDialogRef<SkillsEditDialogComponent>,
    private skillService: SkillsService
  ) { }

  ngOnInit(): void {
    if(this.skill){
      this.skillForm=this.initFormData();
    }
    else{
      this.skillForm=this.initForm();
    }
  }

  initFormData():FormGroup{
    return this.formBuilder.group({
      name:[this.skill.name, [Validators.required]],
    })
  }

  initForm():FormGroup{
    return this.formBuilder.group({
      name:['', [Validators.required]],
    })
  }

  update(){
    this.skill.name=this.skillForm.value.name
    this.skillService.update(this.skill)
  }

  addSkill(){
    this.skillService.add(this.skillForm.value)
  }

}
