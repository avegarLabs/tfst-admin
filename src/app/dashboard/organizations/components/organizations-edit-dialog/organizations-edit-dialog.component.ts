import { Organization } from './../../../../models/organization';
import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OrganizationService } from '../../service/organization.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Country } from 'src/app/models/country';
import { CountryService } from 'src/app/Core/services/country.service';

@Component({
  selector: 'app-organizations-edit-dialog',
  templateUrl: './organizations-edit-dialog.component.html',
  styleUrls: ['./organizations-edit-dialog.component.scss']
})
export class OrganizationsEditDialogComponent implements OnInit {

  organizationForm!: FormGroup;
  countries!:Country[]

  constructor(
    private formBuilder:FormBuilder,
    public snackBar:MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public organization: Organization,
    private dialogRef: MatDialogRef<OrganizationsEditDialogComponent>,
    private organizationService: OrganizationService,
    private countryService: CountryService
  ) { } 

  ngOnInit(): void {
    this.organizationForm=this.initFormDataForm();
    this.getCountries();
  }

  initFormDataForm():FormGroup{
    return this.formBuilder.group({
      name:[this.organization.name, [Validators.required]],
      zise:[this.organization.zise],
      phone:[this.organization.phone,],
      contactEmail:[this.organization.contactEmail,[Validators.required]],
      sector:[this.organization.sector,[Validators.required]],
      description:[this.organization.description,[Validators.required]],
      country:[this.organization.country.id, [Validators.required]],
      linkedInProfile:[this.organization.linkedInProfile],
      youtubeProfile:[this.organization.youtubeProfile],
      organizationWeb:[this.organization.organizationWeb],
    })
  } 

  editInfo(){
    this.insertDataToUpdate();
    this.organizationService.update(this.organization).subscribe(res=>{
      this.dialogRef.close();
      this.snackBar.open('Organización editada con exito','',{duration:2000});
    });
  }

  insertDataToUpdate(){
    this.organization.name= this.organizationForm.value.name
    this.organization.country= this.getEntityCountry(this.organizationForm.value.country)
    this.organization.zise= this.organizationForm.value.zise
    this.organization.phone= this.organizationForm.value.phone
    this.organization.contactEmail= this.organizationForm.value.contactEmail
    this.organization.sector= this.organizationForm.value.sector
    this.organization.description= this.organizationForm.value.description
    this.organization.linkedInProfile= this.organizationForm.value.linkedInProfile
    this.organization.youtubeProfile= this.organizationForm.value.youtubeProfile
    this.organization.organizationWeb= this.organizationForm.value.organizationWeb
    this.organization.accountId = ""
  }
  
  getCountries(){
    return this.countryService.getAll().subscribe(
      data=>{
       this.countries=data;
      }
    )
  }

  getEntityCountry(idC: any): Country {
    return this.countries.filter(item => item.id === idC)[0]
    } 

} 
