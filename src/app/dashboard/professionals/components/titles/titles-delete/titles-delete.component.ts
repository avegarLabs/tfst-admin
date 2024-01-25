import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DetailsService } from '../../../service/details.service';

@Component({
  selector: 'app-titles-delete',
  templateUrl: './titles-delete.component.html',
  styleUrls: ['./titles-delete.component.scss']
})
export class TitlesDeleteComponent implements OnInit {

  professionalId: string=''

  constructor(
    public dialogRef: MatDialogRef<TitlesDeleteComponent>,
    @Inject(MAT_DIALOG_DATA ) public title:any,
    private service: DetailsService
  ) { }

  ngOnInit(): void {
    this.professionalId = this.title.id
  }

  deleteTitle(){
    return this.service.removeTitle(this.professionalId, this.title.title.id).subscribe(result => {
     this.dialogRef.close()
    })
   }

}
