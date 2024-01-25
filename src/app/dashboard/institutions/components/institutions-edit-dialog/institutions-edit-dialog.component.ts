import { Institution } from './../../../../models/institutions';
import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Country } from 'src/app/models/country';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CountryService } from 'src/app/Core/services/country.service';
import { InstitutionService } from '../../service/institution.service';

@Component({
  selector: 'app-institutions-edit-dialog',
  templateUrl: './institutions-edit-dialog.component.html',
  styleUrls: ['./institutions-edit-dialog.component.scss']
})
export class InstitutionsEditDialogComponent implements OnInit {

  institutionForm!: FormGroup;
  countries!:Country[]

  constructor(
    private formBuilder:FormBuilder,
    public snackBar:MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public institution: Institution,
    private countryService: CountryService,
    private institutionService: InstitutionService,
    private dialogRef: MatDialogRef<InstitutionsEditDialogComponent>
  ) { }

  ngOnInit(): void {   
    this.getCountries();
    this.selectForm()
  }

  getCountries(){
    return this.countryService.getAll().subscribe(
      data=>{
       this.countries=data;
      }
    )
  }

  selectForm(){
    if(this.institution){
      this.institutionForm=this.initFormDataForm();
      }else{
        this.institutionForm=this.initForm();
      }
  }

  initForm():FormGroup{
    return this.formBuilder.group({
      name:['', [Validators.required]],
      description:['',[Validators.required]],
      country:['', [Validators.required]],
      city:['', [Validators.required]],
      organizationWeb:['']
    })
  } 

  initFormDataForm():FormGroup{
    return this.formBuilder.group({
      name:[this.institution.name, [Validators.required]],
      description:[this.institution.description,[Validators.required]],
      country:[this.institution.country.id, [Validators.required]],
      city:[this.institution.city, [Validators.required]],
    })
  } 

  update() {
    this.generateUpdate()
    this.institutionService.update(this.institution).subscribe(response=>{
      this.dialogRef.close();
      this.snackBar.open('Institución editada con exito','',{duration:2000});
  })
  }
  
  add(){
    this.institutionForm.value.country = this.getEntityCountry(this.institutionForm.value.country)
    this.institutionService.add(this.institutionForm.value).subscribe(response=>{
      this.dialogRef.close();
     this.snackBar.open('Institución agregada con exito','',{duration:2000});
  })  
  } 

  generateUpdate(){
    this.institution.name=this.institutionForm.value.name 
    this.institution.description=this.institutionForm.value.description
    this.institution.city=this.institutionForm.value.city
    this.institution.country=this.getEntityCountry(this.institutionForm.value.country)
  }

  getEntityCountry(idC: any): Country {
    return this.countries.filter(item => item.id === idC)[0] 
    } 

} 
