import { Component, Input, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { ProfessionalTitle } from 'src/app/models/professional';
import { DetailsService } from '../../../service/details.service';
import { TitleDialogComponent } from '../title-dialog/title-dialog.component';
import { TitlesDeleteComponent } from '../titles-delete/titles-delete.component';

export interface DialogData {
  id: string;
  title: ProfessionalTitle;
}

@Component({
  selector: 'app-titles-management',
  templateUrl: './titles-management.component.html',
  styleUrls: ['./titles-management.component.scss']
})
export class TitlesManagementComponent implements OnInit {

  titles!:ProfessionalTitle[];
  @Input() professionalId!: string

  constructor(
    public dialog: MatDialog,
    public professionalService: DetailsService
  ) { }

  ngOnInit(): void {
    this.getTitles();
  }

  getTitles(){
    this.professionalService.listTitles(this.professionalId).subscribe(
     titles=>{
       this.titles=titles
     })
 }

 addTitle(){
  const dialogRef = this.dialog.open(TitleDialogComponent, {data:{id: this.professionalId, title: null}});
  dialogRef.afterClosed().subscribe(result => {
    this.getTitles()
  });
}

editTitle(title:ProfessionalTitle){
  const dialogRef = this.dialog.open(TitleDialogComponent, {data:{id: this.professionalId, title: title}});
  dialogRef.afterClosed().subscribe(result => {
    this.getTitles()
  });
}

deleteTitle(title:ProfessionalTitle){
  const dialogRef = this.dialog.open(TitlesDeleteComponent, {data:{id: this.professionalId, title: title}});
  dialogRef.afterClosed().subscribe(result => {
    this.getTitles()
    });
}

}
