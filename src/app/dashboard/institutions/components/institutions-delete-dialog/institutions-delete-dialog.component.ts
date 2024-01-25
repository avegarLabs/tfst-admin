import { Institution } from './../../../../models/institutions';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { InstitutionService } from '../../service/institution.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-institutions-delete-dialog',
  templateUrl: './institutions-delete-dialog.component.html',
  styleUrls: ['./institutions-delete-dialog.component.scss']
})
export class InstitutionsDeleteDialogComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public institution: Institution,
    private dialogRef: MatDialogRef<InstitutionsDeleteDialogComponent>,
    private institutionService: InstitutionService,
    public snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
  } 

  deleteInstitution(id:string){
    this.institutionService.delete(id).subscribe(
      res=>{
        this.snackBar.open('Institución eliminada con exito','',{duration:2000}); 
        this.dialogRef.close()
      }
    )
  }

}
