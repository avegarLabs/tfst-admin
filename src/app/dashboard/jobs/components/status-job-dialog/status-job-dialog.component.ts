import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Job } from 'src/app/models/job';
import { JobService } from '../../services/job.service';

@Component({
  selector: 'app-status-job-dialog',
  templateUrl: './status-job-dialog.component.html',
  styleUrls: ['./status-job-dialog.component.scss']
})
export class StatusJobDialogComponent implements OnInit {

  isChecked!:boolean;

  constructor(
    @Inject(MAT_DIALOG_DATA) public job: Job,
    private dialogRef: MatDialogRef<StatusJobDialogComponent>,
    public snackBar: MatSnackBar,
    private jobService: JobService,
  ) { }

  ngOnInit(): void {
    this.stateValue()
  }

  stateValue(){
    if(this.job.state==='1'){
      this.isChecked=true
    }
    else{
      this.isChecked=false
    }
  }

  changeValue(){
    let state;
    if(this.isChecked){state='1'}
    else{state='0'}
    this.jobService.changeStatusJob(this.job.id,state).subscribe(
      res=>{
        this.snackBar.open('Status actualizado con exito','',{duration:2000}); 
        this.dialogRef.close() 
      }
    )
  }

} 
