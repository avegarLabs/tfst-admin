import { User } from './../../../../models/user';
import {AfterViewInit, Component,OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog} from '@angular/material/dialog';
import { UsersEditDialogComponent } from '../users-edit-dialog/users-edit-dialog.component';
import { UsersDeleteDialogComponent } from '../users-delete-dialog/users-delete-dialog.component';
import { Observable } from 'rxjs';
import { UserService } from '../../service/user.service';
import { DialogCreateOrganizationComponent } from '../dialog-create-organization/dialog-create-organization.component';
import { DialogCreateProfessionalComponent } from '../dialog-create-professional/dialog-create-professional.component';


@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss']
})
export class UsersTableComponent implements OnInit {

  loading$!: Observable<boolean>;
  users$!: Observable<User[]>; 
  larg!: User[];
  userAvatar: string = "https://devtfststorage.blob.core.windows.net/common/tfst-icon.png"

  displayedColumns: string[] = ['picture', 'name', 'country', 'options'];
  dataSource!: MatTableDataSource<User>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    public dialog: MatDialog,
    private userService: UserService
    ) {
     this.users$ =  userService.entities$;
     this.loading$ = userService.loading$;
   }

  ngOnInit(): void {
    this.getUsers();
    this.addData()
  }
  

  getUsers() {
    this.userService.getAll();
  }

  addData(){
    this.users$.subscribe(data=>{
      this.larg=data;
      this.dataSource= new  MatTableDataSource (this.larg);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }

  update(user: User) {
    this.userService.update(user);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  
  editUser(user:User){
    const dialogRef = this.dialog.open(UsersEditDialogComponent, {data:user});
    dialogRef.afterClosed().subscribe(result => {
      this.getUsers();
    });
  }

  deleteUser(user:User){
    const dialogRef = this.dialog.open(UsersDeleteDialogComponent, {data:user});
    dialogRef.afterClosed().subscribe(result => {
      this.getUsers();
    });  
  } 

  createOrganization(user:User){
    const dialogRef = this.dialog.open(DialogCreateOrganizationComponent, {data:user.accountId});
  }

  createProfessional(user:User){
    const dialogRef = this.dialog.open(DialogCreateProfessionalComponent, {data:user});
  }

} 
