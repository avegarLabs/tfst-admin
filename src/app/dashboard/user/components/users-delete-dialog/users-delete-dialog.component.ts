import { User } from './../../../../models/user';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserService } from '../../service/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-users-delete-dialog',
  templateUrl: './users-delete-dialog.component.html',
  styleUrls: ['./users-delete-dialog.component.scss']
})
export class UsersDeleteDialogComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public user: User,
    private dialogRef: MatDialogRef<UsersDeleteDialogComponent>,
    private userService: UserService,
    public snackBar: MatSnackBar,
    ) { }

  ngOnInit(): void { 
  }

  deleteUser(id:string){
      this.userService.delete(id).subscribe(res=>{
      this.snackBar.open('Usuario eliminado con exito','',{duration:2000}); 
      this.dialogRef.close()
  })
}


}
