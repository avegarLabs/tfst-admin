import { Institution } from './../../../../models/institutions';
import {AfterViewInit, Component,OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog} from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { InstitutionsDeleteDialogComponent } from '../institutions-delete-dialog/institutions-delete-dialog.component';
import { InstitutionsEditDialogComponent } from '../institutions-edit-dialog/institutions-edit-dialog.component';
import { InstitutionService } from '../../service/institution.service';



@Component({
  selector: 'app-institutions-table',
  templateUrl: './institutions-table.component.html',
  styleUrls: ['./institutions-table.component.scss']
})
export class InstitutionsTableComponent implements OnInit {

  loading$!: Observable<boolean>;
  institutions$!: Observable<Institution[]>;  
  larg!: Institution[];

  displayedColumns: string[] = ['id', 'name', 'country', 'options'];
  dataSource!: MatTableDataSource<Institution>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    public dialog: MatDialog,
    private institutionService: InstitutionService
    ) {
      this.institutions$ =  institutionService.entities$;
      this.loading$ = institutionService.loading$;
   }

  ngOnInit(): void {
    this.getInstitutions();
    this.addData();
  }

  getInstitutions(){
    this.institutionService.getAll();
  }

  addData(){
    this.institutions$.subscribe(data=>{
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
  

  editInstitution(institution: Institution){
    const dialogRef = this.dialog.open(InstitutionsEditDialogComponent, {data:institution});
  }

  deleteInstitution(institution: Institution){
    const dialogRef = this.dialog.open(InstitutionsDeleteDialogComponent, {data:institution});
  }

}


