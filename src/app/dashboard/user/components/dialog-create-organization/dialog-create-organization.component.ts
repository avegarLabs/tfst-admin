import { Component, OnInit, Inject,} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OrganizationService } from 'src/app/Core/services/organization.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Country } from 'src/app/models/country';
import { CountryService } from 'src/app/Core/services/country.service';

@Component({
  selector: 'app-dialog-create-organization',
  templateUrl: './dialog-create-organization.component.html',
  styleUrls: ['./dialog-create-organization.component.scss']
})
export class DialogCreateOrganizationComponent implements OnInit {

  clientForm!:FormGroup;
  countries!:Country[]

  constructor(
    public dialogRef: MatDialogRef<DialogCreateOrganizationComponent>,
    private formBuilder:FormBuilder,
    private service: OrganizationService,
    @Inject(MAT_DIALOG_DATA) public accountId: string, 
    public snackBar: MatSnackBar,
    private countryService: CountryService
  ) { }

  ngOnInit(): void {
    this.clientForm=this.initForm();
    this.getCountries();
  }

  initForm():FormGroup{
    return this.formBuilder.group({
      name:['', [Validators.required]],
      sector:['', [Validators.required]],
      zise:['',[Validators.required]],
      country:['', [Validators.required]],
      description:['', [Validators.required]],
      accountId: [this.accountId],
      organizationWeb: [''],
      linkedInProfile: [''],
      youtubeProfile: [''],
      phone: [''],
      contactEmail: [''],
    })
  }

  addOrganization(){
    this.clientForm.value.country = this.getEntityCountry(this.clientForm.value.country)
    return this.service.persistOrganization(this.clientForm.value).subscribe(data => {
      this.snackBar.open('Organization insertado con exito','',{duration:2000});
       this.dialogRef.close()
    })
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
