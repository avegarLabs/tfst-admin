import { Language } from './../../../../models/language';
import { Professional } from 'src/app/models/professional';
import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators, FormArray  } from '@angular/forms';
import { ProfessionalService } from '../../service/professional.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LanguagesService } from 'src/app/Core/services/languages.service';
import { DetailsService } from '../../service/details.service';
import { Country } from 'src/app/models/country';
import { CountryService } from 'src/app/Core/services/country.service';

@Component({
  selector: 'app-professionals-edit-dialog',
  templateUrl: './professionals-edit-dialog.component.html',
  styleUrls: ['./professionals-edit-dialog.component.scss']
})
export class ProfessionalsEditDialogComponent implements OnInit {

  professionalForm!: FormGroup;
  languages:any=[]
  languagesList:Language[]=[];
  levels=['Basic', 'Intermediate', 'Advanced']
  lang:any
  countries!:Country[]

  constructor(
    private formBuilder:FormBuilder,
    private languagesService:LanguagesService,
    public snackBar:MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public professional: Professional,
    private dialogRef: MatDialogRef<ProfessionalsEditDialogComponent>,
    private professionalService: ProfessionalService,
    private professionalLanguageService:DetailsService,
    private countryService: CountryService
  ) { }

  ngOnInit(): void {
    console.log(this.professional)
    this.professionalForm=this.initFormDataForm();
    this.getLanguages();
    this.getCountries();
  } 

  initFormDataForm():FormGroup{
    return this.formBuilder.group({
      name:[this.professional.name, [Validators.required]],
      title:[this.professional.title,[Validators.required]],
      phone:[this.professional.phone,[Validators.required]],
      country:[this.professional.country.id, [Validators.required]],
      contactEmail:[this.professional.contactEmail,[Validators.required]],
      industry:[this.professional.industry,[Validators.required]],
      aboutMe:[this.professional.aboutMe,[Validators.required]],
      linkedInProfile:[this.professional.linkedInProfile],
      youtubeProfile:[this.professional.youtubeProfile],
      personalWeb:[this.professional.personalWeb],
      level:[''],
      language:[''],
    })
  } 

  updateProfessional(){
    this.insertDataToUpdate();
    this.professionalService.update(this.professional).subscribe(res=>{
      console.log(res)
      this.dialogRef.close();
      this.snackBar.open('Profesional editado con exito','',{duration:2000});
    }); 
  }

  insertDataToUpdate(){
    this.professional.name= this.professionalForm.value.name
    this.professional.title= this.professionalForm.value.title
    this.professional.country= this.getEntityCountry(this.professionalForm.value.country)
    this.professional.contactEmail= this.professionalForm.value.contactEmail
    this.professional.industry= this.professionalForm.value.industry
    this.professional.aboutMe= this.professionalForm.value.aboutMe
    this.professional.linkedInProfile= this.professionalForm.value.linkedInProfile
    this.professional.phone= this.professionalForm.value.phone
    this.professional.youtubeProfile= this.professionalForm.value.youtubeProfile
    this.professional.personalWeb= this.professionalForm.value.personalWeb
  }

  agregarL(){
     this.languagesList.forEach(lg=>{
      if(lg.name===this.professionalForm.value.language){
         this.lang= lg;
      }})
      const level= this.professionalForm.value.level
      const languageToAdd={level:level, language:this.lang};
     return this.professionalLanguageService.addLanguage(this.professional.id,languageToAdd).subscribe(
        res=>{
          this.professional.professionalLanguegeListItems.push(res)
           this.professionalForm.controls['language'].reset();
           this.professionalForm.controls['level'].reset();
        }
      );
      
  }

  removeL(lang:any){
    const index = this.professional.professionalLanguegeListItems.indexOf(lang);
     this.professionalLanguageService.removeLanguage(this.professional.id,lang.id).subscribe(
      res=>{
        this.professional.professionalLanguegeListItems.splice(index, 1)
      }
    )
  }

  getLanguages(){
    this.languagesService.getAll().subscribe(
      data=>{
        this.languagesList=data;
      }
    )
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
