import { Component, OnInit, Inject,ElementRef, ViewChild, } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import {MatAutocompleteSelectedEvent} from '@angular/material/autocomplete';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { OrganizationService } from 'src/app/Core/services/organization.service';
import { SkillProfessionalPositionsService } from 'src/app/Core/services/skill-professional-positions.service';
import { DetailsService } from '../../../service/details.service';
import {MatChipInputEvent} from '@angular/material/chips';
import { ProfessionalPositions, ProfessionalPositionsPost } from 'src/app/models/professional';

@Component({
  selector: 'app-position-dialog',
  templateUrl: './position-dialog.component.html',
  styleUrls: ['./position-dialog.component.scss']
})
export class PositionDialogComponent implements OnInit {

  organizationList: any[] = []
  OrgItem!: any
  positionForm!: FormGroup;
  professionalId: string = ''
  positionModel!: any
  flagEdit:boolean=false;
  professionalPositionId!: string
  skillVersionMap!: any[]
  skillVersion!: any

  // SKILLS INPUT
  separatorKeysCodes: number[] = [ENTER, COMMA]; 
  skillCtrl = new FormControl();
  filteredSkills!: Observable<string[]>;
  skills: string[] = [];
  allSkills: string[] = ['Angular', '.Net', 'Azure', 'Java', 'Python'];
  @ViewChild('skillInput') skillInput!: ElementRef<HTMLInputElement>;

  constructor(
    private formBuilder: FormBuilder,
    public snackBar: MatSnackBar,
    public professionalService: DetailsService,
    public skillPositionService:SkillProfessionalPositionsService,
    public orgService: OrganizationService,
    public dialogRef: MatDialogRef<PositionDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public position: any,
  ) { 
    this.filteredSkills = this.skillCtrl.valueChanges.pipe(
      startWith(null),
      map((skill: string | null) => (skill ? this._filter(skill) : this.allSkills.slice())),
    );
  }

  ngOnInit(): void {
    this.professionalId = this.position.id 
    if (this.position.position !== null) {
      this.positionForm = this.initFormData();
      this.professionalPositionId=this.position.position.id
      this.flagEdit=true;
      this.populateSkillChipsList();
    } else {
      this.positionForm = this.initFormEmpty();
    } 
    this.orgService.sugestionsList().subscribe(data => {
      this.organizationList = data
    })
  }

  populateSkillChipsList() {
    this.skills = this.position.position.skillPositionLists.map((item:any) => item.description)
   }

  initFormEmpty(): FormGroup {
    return this.formBuilder.group({
      name: ['', [Validators.required]],
      organizationName: ['', [Validators.required]],
      startMonthYear: ['', [Validators.required]], 
      endMonthYear: ['', [Validators.required]],
      description: ['', [Validators.required]],
      skillVersionsModels:[''], 
    })
  }

  initFormData(): FormGroup {
    return this.formBuilder.group({
      name: [this.position.position.name, [Validators.required]],
      organizationName: [this.position.position.organizationName, [Validators.required]],
      startMonthYear: [this.position.position.startMonthYear, [Validators.required]],
      endMonthYear: [this.position.position.endMonthYear, [Validators.required]],
      description: [this.position.position.description, [Validators.required]],
    })
  }


  editPosition() {
    let item = this.createPositionPost() 
    this.professionalService.updatePosition(this.professionalId, item, this.position.position.id).subscribe({
      next:(resp: ProfessionalPositions) => { 
      this.snackBar.open('Positions editada con exito','',{duration:2000})
      this.dialogRef.close()
      },
      error: (err: any) => {
        this.snackBar.open(err.error.detail ,'',{duration:2000})
      }})
  }

  addPosition() {
    let item = this.createPositionPost() 
    this.professionalService.addPosition(this.professionalId, item).subscribe({
      next:(resp: ProfessionalPositions) => { 
      this.snackBar.open('Positions agregada con exito','',{duration:2000})
      this.dialogRef.close()
      },
      error: (err: any) => {
        this.snackBar.open(err.error.detail ,'',{duration:2000})
      }})
  }
  createPositionPost(): ProfessionalPositionsPost {
    const org = this.organizationList.filter(item => item.name == this.positionForm.value.organizationName)[0]
    if (org) {
      this.positionModel = {
        name: this.positionForm.value.name,
        description: this.positionForm.value.description,
        organizationName: org.name,
        organizationMoniker: org.moniker,
        type: org.type,
        startMonthYear: this.positionForm.value.startMonthYear,
        endMonthYear: this.positionForm.value.endMonthYear,
        skillVersionsModels: this.mapStringInSkillVersionModel()
      }
    } else {
      this.positionModel = {
        name: this.positionForm.value.name,
        description: this.positionForm.value.description,
        organizationName: this.positionForm.value.organizationName,
        organizationMoniker: this.positionForm.value.organizationName,
        type:"inst",
        startMonthYear: this.positionForm.value.startMonthYear,
        endMonthYear: this.positionForm.value.endMonthYear,
        skillVersionsModels: this.mapStringInSkillVersionModel() 
      }
    }
    return this.positionModel  
  }

  mapStringInSkillVersionModel(): any[]{
    this.skillVersionMap = []
    this.skills.forEach(item => {
     this.skillVersion = {
      description: item 
     }
    this.skillVersionMap.push(this.skillVersion)     
   })
   return this.skillVersionMap
  }


  //SKILLS METHODS

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if(this.flagEdit == true){
      if(value){
        this.skillVersion = {
          description: value
         }
         this.addSkillToServices(this.skillVersion)
      }
    }else{
      if (value) {
        this.skills.push(value);
      }
    }
   
    // Clear the input value
    event.chipInput!.clear();

    this.skillCtrl.setValue(null);
  }

  addSkillToServices(item: any){
    return this.skillPositionService.addskillProfessionalPosition(this.professionalPositionId, item).subscribe(data => {
      this.position.position.skillPositionLists.push(data)
      this.skills.push(item.description)
    })
  }

  remove(skill: string): void {
    const index = this.skills.indexOf(skill);
    if(this.flagEdit===true){
      const itemRemove = this.position.position.skillPositionLists.filter((sk:any) => sk.description === skill)
        this.deleteSkill(itemRemove[0].id, index)
    }else{
      if (index >= 0) {
        this.skills.splice(index, 1);
      }
    }

  }

  deleteSkill(id: any, index: number) {
    this.skills.splice(index, 1);
    return this.skillPositionService.removeskillProfessionalPosition(id).subscribe(data => {
    })
 }

  selected(event: MatAutocompleteSelectedEvent): void {
   if (this.flagEdit == true) {
      this.skillVersion = {
        description: event.option.viewValue
       }
       this.addSkillToServices(this.skillVersion)
    }
    else{
      this.skills.push(event.option.viewValue);
       this.skillInput.nativeElement.value = '';
    }
    this.skillCtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allSkills.filter(skill => skill.toLowerCase().includes(filterValue));
  }

}
