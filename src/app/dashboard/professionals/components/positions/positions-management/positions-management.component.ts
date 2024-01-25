import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProfessionalPositions } from 'src/app/models/professional';
import { DetailsService } from '../../../service/details.service';
import { PositionDeleteComponent } from '../position-delete/position-delete.component';
import { PositionDialogComponent } from '../position-dialog/position-dialog.component';

export interface DialogData {
  id: string;
  position: ProfessionalPositions;
}

@Component({
  selector: 'app-positions-management',
  templateUrl: './positions-management.component.html',
  styleUrls: ['./positions-management.component.scss']
})
export class PositionsManagementComponent implements OnInit {

  positions!:ProfessionalPositions[];
  @Input() professionalId!: string

  constructor(
    public dialog: MatDialog,
    public professionalService: DetailsService
  ) { }

  ngOnInit(): void {
    this.getPositions();
  }

  addPosition(){
    const dialogRef = this.dialog.open(PositionDialogComponent, {data:{id: this.professionalId, position: null}});
    dialogRef.afterClosed().subscribe(result => {
      this.getPositions()
    });
  }

  editPosition(position:ProfessionalPositions){
    const dialogRef = this.dialog.open(PositionDialogComponent, {data:{id: this.professionalId, position: position}});
    dialogRef.afterClosed().subscribe(result => {
      this.getPositions()
    });
  }

  getPositions(){
    this.professionalService.listPositions(this.professionalId).subscribe(
     positions=>{
       this.positions=positions
     })
 }

 deletePosition(position:ProfessionalPositions){
  const dialogRef = this.dialog.open(PositionDeleteComponent, {data:{id: this.professionalId, position: position}});
  dialogRef.afterClosed().subscribe(result => {
    this.getPositions()
  });
}

}
