import {AfterViewInit, Component,OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog} from '@angular/material/dialog';
import { ProfessionalsEditDialogComponent } from '../professionals-edit-dialog/professionals-edit-dialog.component';
import { ProfessionalsDeleteDialogComponent } from '../professionals-delete-dialog/professionals-delete-dialog.component';
import { Professional } from 'src/app/models/professional';
import { Observable } from 'rxjs';
import { ProfessionalService } from '../../service/professional.service';
import { JobFormComponent } from 'src/app/Shared/shared/job-form/job-form.component';


@Component({
  selector: 'app-professionals-table',
  templateUrl: './professionals-table.component.html',
  styleUrls: ['./professionals-table.component.scss']
})
export class ProfessionalsTableComponent implements OnInit {

  loading$!: Observable<boolean>;
  professionals$!: Observable<Professional[]>;  
  larg!: Professional[];
  userAvatar: string = "https://devtfststorage.blob.core.windows.net/common/tfst-icon.png"


  displayedColumns: string[] = ['picture', 'name', 'country', 'options'];
  dataSource!: MatTableDataSource<Professional>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    public dialog: MatDialog,
    private professionalService: ProfessionalService
    ) { 
      this.professionals$ =  professionalService.entities$;
      this.loading$ = professionalService.loading$;
   }

  ngOnInit(): void {
    this.getProfessionals();
    this.addData();
  }

  getProfessionals() {
    this.professionalService.getAll();
  }

  addData(){
    this.professionals$.subscribe(data=>{
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
  

  editProfessional(professional:Professional){
    const dialogRef = this.dialog.open(ProfessionalsEditDialogComponent, {data:professional});
    dialogRef.afterClosed().subscribe(res=>this.getProfessionals())
  }

  deleteProfessional(professional:Professional){
    const dialogRef = this.dialog.open(ProfessionalsDeleteDialogComponent, {data:professional});
  }

  createJob(id:string){
    const dialogRef = this.dialog.open(JobFormComponent, {data:{id:id, type:'prof',action:'create'}});
  }

}

