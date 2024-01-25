import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DetailsService } from '../../../service/details.service';

@Component({
  selector: 'app-skill-professional-delete',
  templateUrl: './skill-professional-delete.component.html',
  styleUrls: ['./skill-professional-delete.component.scss']
})
export class SkillProfessionalDeleteComponent implements OnInit {

  professionalId: string=''

  constructor(
    public dialogRef: MatDialogRef<SkillProfessionalDeleteComponent>,
    @Inject(MAT_DIALOG_DATA ) public skill:any,
    private service: DetailsService
  ) { }

  ngOnInit(): void {
    this.professionalId = this.skill.id
  }

  deleteSkill(){
   return this.service.removeSkill(this.professionalId, this.skill.skill.id).subscribe(result => {
    this.dialogRef.close()
   })
  }

}
