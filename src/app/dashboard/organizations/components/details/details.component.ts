import { Component, Input, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { ContactByEmailDialogComponent } from 'src/app/Shared/shared/contact-by-email-dialog/contact-by-email-dialog.component';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  @Input() organization!:any;
  @Input() services!:any[];

  constructor(public dialog: MatDialog,) { }

  ngOnInit(): void {
  }

  contact(){
    const dialogRef = this.dialog.open(ContactByEmailDialogComponent);
  } 

}
