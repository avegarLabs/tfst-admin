import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DetailsService } from '../../service/details.service';
import { JobSugestionsItems } from 'src/app/models/job';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-jobs-sugestions',
  templateUrl: './jobs-sugestions.component.html',
  styleUrls: ['./jobs-sugestions.component.scss']
})
export class JobsSugestionsComponent implements OnInit {

  sugestionsList!:JobSugestionsItems[]
  displayedColumns: string[] = ['job', 'degree'];
  dataSource!: MatTableDataSource<JobSugestionsItems>;

  constructor( @Inject(MAT_DIALOG_DATA) public id: string,
  private dialogRef: MatDialogRef<JobsSugestionsComponent>,
  private service: DetailsService) { }

  ngOnInit(): void {
    this.getJobsList(this.id);
  }
  getJobsList(id: string) {
   return this.service.listSugestionsJobs(id).subscribe(res => {
      this.sugestionsList = res
      this.dataSource= new  MatTableDataSource (this.sugestionsList);
   });
  }

}
