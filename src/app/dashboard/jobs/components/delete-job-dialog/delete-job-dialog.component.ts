import { Job } from 'src/app/models/job';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { JobService } from '../../services/job.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-delete-job-dialog',
  templateUrl: './delete-job-dialog.component.html',
  styleUrls: ['./delete-job-dialog.component.scss']
})
export class DeleteJobDialogComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public job: Job,
    private dialogRef: MatDialogRef<DeleteJobDialogComponent>,
    private jobService: JobService,
    public snackBar: MatSnackBar,
  ) { } 

  ngOnInit(): void {
  }

  deleteJob(id:string){
    this.jobService.delete(id).subscribe(res=>{
      this.snackBar.open('Job eliminado con exito','',{duration:2000}); 
      this.dialogRef.close() 
    }) 
  }

}
