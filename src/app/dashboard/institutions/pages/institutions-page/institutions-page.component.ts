import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { InstitutionsEditDialogComponent } from '../../components/institutions-edit-dialog/institutions-edit-dialog.component';

@Component({
  selector: 'app-institutions-page',
  templateUrl: './institutions-page.component.html',
  styleUrls: ['./institutions-page.component.scss']
})
export class InstitutionsPageComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
  }

  addInstitution(){
    const dialogRef = this.dialog.open(InstitutionsEditDialogComponent, {data:null});
  }

}
