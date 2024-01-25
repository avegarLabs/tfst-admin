import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, OnInit, Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DetailsService } from '../../../service/details.service';
import { OrganizationService } from 'src/app/Core/services/organization.service';
import { ProfessionalTitle, ProfessionalTitlePost } from 'src/app/models/professional';

@Component({
  selector: 'app-title-dialog',
  templateUrl: './title-dialog.component.html',
  styleUrls: ['./title-dialog.component.scss']
})
export class TitleDialogComponent implements OnInit {

  titleForm!:FormGroup;
  titleDialog!:any
  professionalId!: string
  organizationList: any[] = []
  OrgItem!: any
  titleModel!: any

  constructor(
    private formBuilder:FormBuilder,
    public snackBar:MatSnackBar,
    public professionalService: DetailsService,
    public dialogRef: MatDialogRef<TitleDialogComponent>,
    @Inject(MAT_DIALOG_DATA ) public title:any,
    private orgService: OrganizationService
  ) { }

  ngOnInit(): void {
    this.professionalId = this.title.id
    if(this.title.title !== null){
      this.titleForm=this.initFormDataForm();
    }else{
      this.titleForm=this.initFormEmptyForm();
    }
    this.orgService.sugestionsList().subscribe(data => {
      this.organizationList = data
    })
  }

  initFormDataForm():FormGroup{
    return this.formBuilder.group({
      name:[this.title.title.name, [Validators.required]],
      organizationName:[this.title.title.organizationName,[Validators.required]],
      startMonthYear:[this.title.title.startMonthYear,[Validators.required]],
      endMonthYear:[this.title.title.endMonthYear,[Validators.required]],
    })
  } 

  initFormEmptyForm():FormGroup{
    return this.formBuilder.group({
      name:["", [Validators.required]],
      organizationName:["",[Validators.required]],
      startMonthYear:[new Date(),[Validators.required]],
      endMonthYear:[new Date(),[Validators.required]],
    })
  }

  editTitle(){
    const item = this.createTitleModel()
    this.professionalService.updateTitle(this.professionalId, item, this.title.title.id).subscribe({
        next:(resp: ProfessionalTitle) => { 
        this.snackBar.open('Title editado con exito','',{duration:2000})
        this.dialogRef.close()
        },
        error: (err: any) => {
          this.snackBar.open(err.error.detail ,'',{duration:2000})
        }})
  }

  addTitle(){
    const item = this.createTitleModel()
    this.professionalService.addTitle(this.professionalId, item ).subscribe({
      next:(resp: ProfessionalTitle) => { 
      this.snackBar.open('Title agregado con exito','',{duration:2000})
      this.dialogRef.close()
      },
      error: (err: any) => {
        this.snackBar.open(err.error.detail ,'',{duration:2000})
      }})
  }

  createTitleModel():ProfessionalTitlePost{
    const org = this.organizationList.filter(item => item.name == this.titleForm.value.organizationName)[0]
    if(org){
      this.titleModel = {
        name: this.titleForm.value.name,
        titleType: "Title", 
        organizationName: org.name,
        organizationMoniker: org.moniker,
        type: org.type,
        startMonthYear: this.titleForm.value.startMonthYear,
        endMonthYear: this.titleForm.value.endMonthYear
        }
    }else{
      this.titleModel = {
        name: this.titleForm.value.name,
        titleType: "Title", 
        organizationName: this.titleForm.value.organizationName,
        organizationMoniker: this.titleForm.value.organizationName,
        type: "inst",
        startMonthYear: this.titleForm.value.startMonthYear,
        endMonthYear: this.titleForm.value.endMonthYear
        }
    }
    return this.titleModel
  }

}
