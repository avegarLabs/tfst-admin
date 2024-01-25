import { Skill } from './../../../../models/skills';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SkillsService } from '../../service/skills.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-skills-delete-dialog',
  templateUrl: './skills-delete-dialog.component.html',
  styleUrls: ['./skills-delete-dialog.component.scss']
})
export class SkillsDeleteDialogComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public skill: Skill,
    private dialogRef: MatDialogRef<SkillsDeleteDialogComponent>,
    private skillService: SkillsService,
    public snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
  }

  deleteUser(id:string){
    this.skillService.delete(id).subscribe(res=>{
      this.snackBar.open('Skill eliminado con exito','',{duration:2000}); 
      this.dialogRef.close()
    })
  }

}
