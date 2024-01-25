import { Component, OnInit, Inject, Input} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DetailsService } from '../../../service/details.service';
import { SkillOneService } from 'src/app/Core/services/skill.service';


@Component({
  selector: 'app-skill-professional-dialog',
  templateUrl: './skill-professional-dialog.component.html',
  styleUrls: ['./skill-professional-dialog.component.scss']
})
export class SkillProfessionalDialogComponent implements OnInit {

  skillForm!:FormGroup;
  skillDialog!:any;
  professionalId: string=''
  skillModel!: any;
  skillList!: any[]

  constructor(
    public professionalService: DetailsService,
    public snackBar:MatSnackBar,
    private formBuilder:FormBuilder,
    private skillServices: SkillOneService,
    public dialogRef: MatDialogRef<SkillProfessionalDialogComponent>,
    @Inject(MAT_DIALOG_DATA ) public skill:any
  ) { }

  ngOnInit(): void {
    this.professionalId = this.skill.id
    if(this.skill.skill !== null){
      this.skillForm=this.initFormData();
    }else{
      this.skillForm=this.initFormEmpty();
    }
    this.skillServices.list().subscribe(data => {
      this.skillList = data
    })
    
  
  }

  initFormData():FormGroup{
    return this.formBuilder.group({
      skill:[this.skill.skill.skillName, [Validators.required]],
      level:[this.skill.skill.skillLevel,[Validators.required]],
    })
  }
  
  initFormEmpty():FormGroup{
    return this.formBuilder.group({
      skill:["", [Validators.required]],
      level:["",[Validators.required]],
    })
  }


  editSkill(){
    let value = this.createSkillPost(this.skillForm.value.skill)
    this.professionalService.updateSkill(this.professionalId,  this.skill.skill.id, value).subscribe(response=>{
        this.snackBar.open('Skill editado con exito','',{duration:2000});
        this.dialogRef.close()
    })
  } 
                    
  addSkills(){
   let value = this.createSkillPost(this.skillForm.value.skill)
   this.professionalService.addSkill(this.professionalId, value).subscribe(response=>{
        this.snackBar.open('Skill insertado con exito','',{duration:2000});
        this.dialogRef.close()
    })
  }

  createSkillPost(name:string):any{
     const value = this.skillList.filter(sk => sk.name == name)[0]
     if(value){
      this.skillModel ={
        name: value.name,
        skillMoniker: value.moniker,
        level: this.skillForm.value.level
      }}else{
        this.skillModel ={
          name: name,
          skillMoniker: name,
          level: this.skillForm.value.level
        }
      }
      return this.skillModel
     }
     

}
