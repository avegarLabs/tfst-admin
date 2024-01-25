import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DetailsService } from '../../../service/details.service';

@Component({
  selector: 'app-position-delete',
  templateUrl: './position-delete.component.html',
  styleUrls: ['./position-delete.component.scss']
})
export class PositionDeleteComponent implements OnInit {

  professionalId: string=''

  constructor(
    public dialogRef: MatDialogRef<PositionDeleteComponent>,
    @Inject(MAT_DIALOG_DATA ) public position:any,
    private service: DetailsService
  ) { }

  ngOnInit(): void {
    this.professionalId = this.position.id
  }

  deletePosition(){
    return this.service.removePosition(this.professionalId, this.position.position.id).subscribe(result => {
     this.dialogRef.close() 
    })
   }

}
