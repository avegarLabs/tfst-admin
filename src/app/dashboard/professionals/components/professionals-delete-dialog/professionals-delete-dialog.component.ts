import { Professional } from './../../../../models/professional';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProfessionalService } from '../../service/professional.service';

@Component({
  selector: 'app-professionals-delete-dialog',
  templateUrl: './professionals-delete-dialog.component.html',
  styleUrls: ['./professionals-delete-dialog.component.scss']
})
export class ProfessionalsDeleteDialogComponent implements OnInit {

  professionalId: string=''

  constructor(
    @Inject(MAT_DIALOG_DATA) public professional: Professional,
    private dialogRef: MatDialogRef<ProfessionalsDeleteDialogComponent>,
    private professionalService: ProfessionalService,
    public snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
  }

  deleteProfessional(id:string){
    this.professionalService.delete(id).subscribe(res=>{
      this.snackBar.open('Professional eliminado con exito','',{duration:2000}); 
      this.dialogRef.close()
    }) 
  }

}
