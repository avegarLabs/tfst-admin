import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-contact-by-email-dialog',
  templateUrl: './contact-by-email-dialog.component.html',
  styleUrls: ['./contact-by-email-dialog.component.scss']
})
export class ContactByEmailDialogComponent implements OnInit {

  contactForm!:FormGroup;

  constructor(
    private formBuilder:FormBuilder,
    public dialogRef: MatDialogRef<ContactByEmailDialogComponent>,
    public snackBar: MatSnackBar,
    ) { }

  ngOnInit(): void {
    this.buildForm();
  }

  
  buildForm():void{
    this.contactForm=this.formBuilder.group({
      email:['', [Validators.required, Validators.email]],
      subject:['', [Validators.required]],
      message:['', [Validators.required]],
    })
  }

  onSubmit(){
    this.snackBar.open('Email enviado con exito', '', { duration: 2000 });
   this.dialogRef.close()
  }

}
