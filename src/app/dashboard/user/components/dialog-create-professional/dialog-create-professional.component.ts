import { User } from 'src/app/models/user';
import { Component, OnInit, Inject,} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DetailsService } from 'src/app/dashboard/professionals/service/details.service';

@Component({
  selector: 'app-dialog-create-professional',
  templateUrl: './dialog-create-professional.component.html',
  styleUrls: ['./dialog-create-professional.component.scss']
})
export class DialogCreateProfessionalComponent implements OnInit {

  professionalForm!:FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public user: User, 
    public snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<DialogCreateProfessionalComponent>,
    private formBuilder:FormBuilder,
    private professionalService: DetailsService,
  ) { }

  ngOnInit(): void {
    this.professionalForm=this.initForm()
  }

  initForm():FormGroup{
    return this.formBuilder.group({
      fullName:[this.user.name, [Validators.required]],
      role:['', [Validators.required]],
      aboutMe:['', [Validators.required]],
      bussines:['', [Validators.required]],
      yearsExperience:['', [Validators.required]] 
    }) 
  }

  addProfessional(){
    let itemModel = {
      name: this.professionalForm.value.fullName,
      title: this.professionalForm.value.role,
      aboutMe: this.professionalForm.value.aboutMe,
      industry: this.professionalForm.value.bussines,
      accountId: this.user.accountId,
      skills: []
     }
     return this.professionalService.addProfessional(itemModel).subscribe(async response => {
      if (response) {
        this.snackBar.open('Profesional insertado con exito','',{duration:2000});
        this.dialogRef.close();
      }
    });
  }

}
