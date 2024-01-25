import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Organization } from 'src/app/models/organization';
import { OrganizationService } from '../../service/organization.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-organizations-delete-dialog',
  templateUrl: './organizations-delete-dialog.component.html',
  styleUrls: ['./organizations-delete-dialog.component.scss']
})
export class OrganizationsDeleteDialogComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public organization: Organization,
    private dialogRef: MatDialogRef<OrganizationsDeleteDialogComponent>,
    private organizationService: OrganizationService,
    public snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
  }

  deleteOrg(id:string){
    this.organizationService.delete(id).subscribe(
      res=>{
        this.snackBar.open('Organización eliminada con exito','',{duration:2000}); 
        this.dialogRef.close() 
      }
    )
  }

} 
