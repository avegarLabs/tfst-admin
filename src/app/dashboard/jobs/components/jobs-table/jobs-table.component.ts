import { Job } from './../../../../models/job';
import {AfterViewInit, Component,OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog} from '@angular/material/dialog';
import { Professional } from 'src/app/models/professional';
import { Observable } from 'rxjs';
import { JobService } from '../../services/job.service';
import { JobFormComponent } from 'src/app/Shared/shared/job-form/job-form.component';
import { DeleteJobDialogComponent } from '../delete-job-dialog/delete-job-dialog.component';
import { StatusJobDialogComponent } from '../status-job-dialog/status-job-dialog.component';


@Component({
  selector: 'app-jobs-table',
  templateUrl: './jobs-table.component.html',
  styleUrls: ['./jobs-table.component.scss']
})
export class JobsTableComponent implements OnInit {

  loading$!: Observable<boolean>;
  jobs$!: Observable<Job[]>;  
  larg!: Job[];


  displayedColumns: string[] = ['id', 'name', 'state', 'options'];
  dataSource!: MatTableDataSource<Job>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    public dialog: MatDialog,
    private jobService: JobService
    ) { 
      this.jobs$ =  jobService.entities$;
      this.loading$ = jobService.loading$;
   }

   ngOnInit(): void {
    this.getJobs();
    this.addData();
  }

  getJobs() {
    this.jobService.getAll();
  }

  addData(){
    this.jobs$.subscribe(data=>{
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

  editJob(job:Job){
    const dialogRef = this.dialog.open(JobFormComponent, {data:{job:job, action:'edit'}, height:'98%'});
    dialogRef.afterClosed().subscribe(res=>this.getJobs())
  }

  deleteJob(job:Job){
      const dialogRef = this.dialog.open(DeleteJobDialogComponent, {data:job});
  }

  status(job:Job){
    const dialogRef = this.dialog.open(StatusJobDialogComponent, {data:job});
  }

}
