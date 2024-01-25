import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import { ContactByEmailDialogComponent } from 'src/app/Shared/shared/contact-by-email-dialog/contact-by-email-dialog.component';
import { DetailsService } from '../../service/details.service';
import { JobsSugestionsComponent } from '../jobs-sugestions/jobs-sugestions.component';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  @Input() professional!:any;
  @Input() skills!:any[];
  @Input() titles!:any[];
  @Input() positions!:any[];
  @Input() services!:any[];
 

  constructor(
    private route: Router,
    public dialog: MatDialog,
    private servProfessional: DetailsService
    ) { }

  ngOnInit(): void {
  }

  goTo(){
    this.route.navigate(['dashboard/professionals/management',this.professional.moniker])
  }

  contact(){
    const dialogRef = this.dialog.open(ContactByEmailDialogComponent);
  } 

  genetareCV(){
    this.servProfessional.getCV(this.professional.id).subscribe(res=>
     {
      const url= res.toString()
      window.open(url, '_blank');
     })
  }

  SearchJobs(){
    const dialogRef = this.dialog.open(JobsSugestionsComponent, {width: 'auto', height: 'auto'  , data:this.professional.id},
      );
      
  }

}
