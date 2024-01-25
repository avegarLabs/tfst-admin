import { Organization } from './../../../../models/organization';
import {AfterViewInit, Component,OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog} from '@angular/material/dialog';
import { OrganizationsEditDialogComponent } from '../organizations-edit-dialog/organizations-edit-dialog.component';
import { OrganizationsDeleteDialogComponent } from '../organizations-delete-dialog/organizations-delete-dialog.component';
import { Observable } from 'rxjs';
import { OrganizationService } from '../../service/organization.service';
import { JobFormComponent } from 'src/app/Shared/shared/job-form/job-form.component';


@Component({
  selector: 'app-organizations-table',
  templateUrl: './organizations-table.component.html',
  styleUrls: ['./organizations-table.component.scss']
})
export class OrganizationsTableComponent implements OnInit{

  loading$!: Observable<boolean>;
  organizations$!: Observable<Organization[]>;  
  larg!: Organization[];

  displayedColumns: string[] = ['id', 'name', 'country', 'options'];
  dataSource!: MatTableDataSource<Organization>;
  userAvatar: string = "https://devtfststorage.blob.core.windows.net/common/tfst-icon.png"

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    public dialog: MatDialog,
    private organizationService: OrganizationService
    ) {
      this.organizations$ =  organizationService.entities$;
      this.loading$ = organizationService.loading$;
   }

  ngOnInit(): void {
    this.getOrganizations();
    this.addData();
  }

  getOrganizations(){
    this.organizationService.getAll();
  }

  addData(){
    this.organizations$.subscribe(data=>{
      this.larg=data;
      this.dataSource= new  MatTableDataSource (this.larg);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  
  editOrganization(organization:Organization){
    const dialogRef = this.dialog.open(OrganizationsEditDialogComponent, {data:organization});
  }

  deleteOrganization(organization:Organization){ 
    const dialogRef = this.dialog.open(OrganizationsDeleteDialogComponent, {data:organization});
  }

  createJob(id:string){
    const dialogRef = this.dialog.open(JobFormComponent, {data:{id:id, type:'org',action:'create'}});
  }

}

