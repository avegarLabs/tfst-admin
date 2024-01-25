import {Component, OnInit} from '@angular/core';
import { User } from 'src/app/models/user';
import {MatDialog} from '@angular/material/dialog';
import { UsersEditDialogComponent } from '../../components/users-edit-dialog/users-edit-dialog.component';


@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit {


  constructor(
    public dialog: MatDialog,
    ) {}

  ngOnInit(): void {
  }

  addUser(){
    const dialogRef = this.dialog.open(UsersEditDialogComponent, {data:null});
  }

}

