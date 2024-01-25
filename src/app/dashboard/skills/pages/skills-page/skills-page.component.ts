import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SkillsEditDialogComponent } from '../../components/skills-edit-dialog/skills-edit-dialog.component';

@Component({
  selector: 'app-skills-page',
  templateUrl: './skills-page.component.html',
  styleUrls: ['./skills-page.component.scss']
})
export class SkillsPageComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
  }

  addSkill(){
    const dialogRef = this.dialog.open(SkillsEditDialogComponent, {data:null});
  }

}
