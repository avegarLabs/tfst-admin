import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {Component, ElementRef, ViewChild, OnInit, Input, Inject} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MatAutocompleteSelectedEvent} from '@angular/material/autocomplete';
import {MatChipInputEvent} from '@angular/material/chips';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { Output, EventEmitter } from '@angular/core';
import { SkillOneService } from 'src/app/Core/services/skill.service';
import { JobService } from 'src/app/dashboard/jobs/services/job.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { JobListItem, JobsSalaryType } from 'src/app/models/job';

export interface JobSpecifications {
  text: string,
  value:string  
}

@Component({
  selector: 'app-job-form',
  templateUrl: './job-form.component.html',
  styleUrls: ['./job-form.component.scss']
})
export class JobFormComponent implements OnInit {

  jobTypes: JobSpecifications[] = [
    { text: 'Full time', value: 'fulltime' },
    { text: 'Flexible', value: 'flexible' },
  ];
  localizations: JobSpecifications[] = [
    { text: 'Presencial', value: 'presential' },
    { text: 'Remote', value: 'remote' },
    { text: 'Hibrid', value: 'hibrid' },
  ];
  salaryTypes: JobSpecifications[] = [
    { text: 'Per hours', value: 'hour' },
    { text: 'Per month', value: 'month' },
    { text: 'Per year', value: 'year' },
  ];
  languages: JobSpecifications[] = [
    { text: 'Español', value: 'Español' },
    { text: 'English', value: 'English' },
  ];
  languageLevelsTypes: JobSpecifications[] = [ 
    { text: 'A1', value: 'a1' },
    { text: 'A2', value: 'a2' },
    { text: 'B1', value: 'b1' },
    { text: 'B2', value: 'b2' },
    { text: 'C1', value: 'c1' },
    { text: 'C2', value: 'c2' },
  ];


  separatorKeysCodes: number[] = [ENTER, COMMA]; 
  skillCtrl = new FormControl();
  filteredSkills: Observable<any[]>;
  skillList!: any[];
  skills: string[] = [];
  allSkills: any[] = [];
  @ViewChild('skillInput') skillInput!: ElementRef<HTMLInputElement>;
  @Output() update = new EventEmitter<boolean>(); 


  addOnBlur = true;
  readonly separatorKeysCode = [ENTER, COMMA] as const;
  responsibilities: any[] = [];
  arrResponsibilities:string[]=[]

  updateModel!: JobListItem;

  jobForm!:FormGroup;
  @Input() orgs!:any[];
  @Input() prof!:any[];

  constructor(
    public dialogRef: MatDialogRef<JobFormComponent>,
    public snackBar: MatSnackBar,
    private skillService:SkillOneService,
    @Inject(MAT_DIALOG_DATA ) public job:any,
    private jobsService:JobService
  ) {
    this.filteredSkills = this.skillCtrl.valueChanges.pipe(
      startWith(null),
      map((skill: string | null) => (skill ? this._filter(skill) : this.allSkills.slice())),
    );
   }

   ngOnInit(): void {
    if(this.job.action==='create'){
      this.jobForm=this.initForm();
    }
    else if(this.job.action==='edit'){
      this.initEditJob();
    }
    this.getSkills();
  }

  getSkills(){
    return this.skillService.list().subscribe(
      data=>{
        this.skillList=data;
        this.allSkills = this.skillList.map(item => item.name)
      }
    )
  }

  initEditJob(){
    this.jobForm=this.initFormData();
     this.populateSkillChipsList();
    this.populateResponsabilitiesChipsList();
  }

  populateSkillChipsList() {
    this.skills = this.job.job.jobSkills.map((item:any) => item.skillName)
   }

  populateResponsabilitiesChipsList(){
    //this.responsibilities=this.job.job.jobResponsabilities.map((item:any) => item.responsibilityDescription)
    this.job.job.jobResponsabilities.forEach((item: any) => {
      this.responsibilities.push({name: item.responsibilityDescription})
    })
  }

  initForm():FormGroup{
   return this.jobForm = new FormGroup({
      jobTitle: new FormControl('', Validators.required),
      jobDescription: new FormControl('', Validators.required),
      jobSkills: new FormGroup({
        skillName: new FormControl(this.skills,Validators.required),
        skillMoniker: new FormControl('',Validators.required),
      }),
      jobContractTypes: new FormGroup({
        contractTypeName: new FormControl('',Validators.required),
      }),
      jobsJobTypes: new FormGroup({
        jobTypeName: new FormControl('',Validators.required),
      }),
      jobsSalaryTypes: new FormGroup({
        salaryTypeName: new FormControl('',Validators.required),
        currency: new FormControl('',Validators.required),
        minAmount: new FormControl('',Validators.required),
        maxAmount: new FormControl('',Validators.required),
      }),
      jobLanguages: new FormGroup({
        language: new FormControl('',Validators.required),
        languageMoniker: new FormControl('Lang',Validators.required),
        level: new FormControl('',Validators.required),
      }),
      jobResponsibilities: new FormGroup({
        responsibilityDescription: new FormControl(this.arrResponsibilities,Validators.required),
      }),
    });
  }

  initFormData():FormGroup{
    return this.jobForm = new FormGroup({
      id:new FormControl(this.job.job.id, Validators.required),
       jobTitle: new FormControl(this.job.job.jobTitle, Validators.required),
       jobDescription: new FormControl(this.job.job.jobDescription, Validators.required),
       jobContractTypes: new FormGroup({
         contractTypeName: new FormControl(this.job.job.jobContractTypes[0].contractTypeName,Validators.required),
       }),
       jobsJobTypes: new FormGroup({
         jobTypeName: new FormControl(this.job.job.jobsJobTypes[0].jobTypeName,Validators.required),
       }),
       jobsSalaryTypes: new FormGroup({
         salaryTypeName: new FormControl(this.job.job.jobsSalaryTypes[0].salaryTypeName,Validators.required),
         currency: new FormControl(this.job.job.jobsSalaryTypes[0].currency,Validators.required),
         minAmount: new FormControl(this.job.job.jobsSalaryTypes[0].minAmount,Validators.required),
         maxAmount: new FormControl(this.job.job.jobsSalaryTypes[0].maxAmount,Validators.required),
       }),
       jobLanguages: new FormGroup({
         language: new FormControl(this.job.job.jobLanguagues[0].languegue,Validators.required),
         languageMoniker: new FormControl('',Validators.required),
         level: new FormControl(this.job.job.jobLanguagues[0].level,Validators.required),
       }),
     });
   }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.skills.push(value);
    }

    // Clear the input value
    event.chipInput!.clear();

    this.skillCtrl.setValue(null);
  }

  remove(skill: string): void {
    const index = this.skills.indexOf(skill);

    if (index >= 0) {
      this.skills.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.skills.push(event.option.viewValue);
    this.skillInput.nativeElement.value = '';
    this.skillCtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.allSkills.filter(skill => skill.toLowerCase().includes(filterValue));
  }

  addR(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.responsibilities.push({name: value});
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  removeR(responsability: any): void {
    const index = this.responsibilities.indexOf(responsability);

    if (index >= 0) {
      this.responsibilities.splice(index, 1);
    }
  }

  saveJob(){
   this.responsibilities.forEach(responsibility=>{this.arrResponsibilities.push(responsibility.name)})
    let jobModel = this.simpleJobModel(this.jobForm.value)
   return this.jobsService.add(jobModel).subscribe(
      data=>{
        this.snackBar.open('Job creado con exito', '', { duration: 2000 });
        this.dialogRef.close()
      }
    )
  }
  updateJob(){
   this.updateModel = this.simpleUpdateJobModel(this.jobForm.value)
   return this.jobsService.update(this.updateModel).subscribe(
      data=>{
        this.snackBar.open('Job actualizado con exito', '', { duration: 2000 });
      this.dialogRef.close()
      }
    )
  }

  simpleJobModel(value: any): any {
   let job = {
    jobTitle: value.jobTitle,
    jobDescription: value.jobDescription,
    ownerId: this.job.id,
    type: this.job.type,
    jobSkills: this.createdSkillsInJob(value.jobSkills),
    jobContractTypes: this.createdContract(value.jobContractTypes),
    jobsJobTypes: this.createdJobType(value.jobsJobTypes),
    jobsSalaryTypes: value.jobsSalaryTypes,
    jobLanguagues: this.createdLaguagueinJob(value.jobLanguages),
    jobResponsabilities: this.createResponsibilities(value.jobResponsibilities),
 }
   return job
  }

 simpleUpdateJobModel(value: any): JobListItem{
  let updateModel = {
    id: this.job.job.id,
    jobTitle: value.jobTitle,
    jobDescription: value.jobDescription,
    jobsSalaryTypes: value.jobsSalaryTypes,
    jobLanguagues: this.createdLaguagueinJob(value.jobLanguages),
    jobContractTypes: this.createdContract(value.jobContractTypes),
    jobsJobTypes: this.createdJobType(value.jobsJobTypes),
    jobSkills: this.createdSkillsInJob(value.jobSkills),
    jobResponsabilities: this.createResponsibilities(value.jobResponsibilities)
    }
    return updateModel; 
  }

  responsabilitiesList: any[]=[]
  createResponsibilities(jobResponsibilities: any) {
  if(this.job.action==='create'){
   jobResponsibilities.responsibilityDescription.forEach((item: any) => {
    let resp = {
      responsibilityDescription: item
    }
    this.responsabilitiesList.push(resp)
   })
  }else{
    this.responsibilities.forEach((item: any) => {
      let resp = {
        responsibilityDescription: item.name
      }
      this.responsabilitiesList.push(resp)
     })
  }
   return this.responsabilitiesList
  }
  languageList:any[]=[]
  createdLaguagueinJob(jobLanguages: any):any[] {
    let lang = {
       languegue: jobLanguages.language,
       languegueMoniker: "Lang",
       level: jobLanguages.level
    }
    this.languageList.push(lang)
    return this.languageList
  }
  jobList:any[]=[]
  createdJobType(jobTypes: any):any[] {
    this.jobList.push(jobTypes)
    return this.jobList
  }
    
  contractList:any[]=[]
  createdContract(contractTypes: any):any[] {
   this.contractList.push(contractTypes)
   return this.contractList
  }
  listSkill:any[]=[]
  createdSkillsInJob(skills: any): any[] {
  if(this.job.action==='create'){
   skills.skillName.forEach((item:any) => {
    const skReal = this.skillList.filter(sk => sk.name==item); 
    if(skReal[0]!=null){
         let sk = {
           skillName: skReal[0].name,
           skillMoniker: skReal[0].moniker
         }
         this.listSkill.push(sk);
      }else{
        let sk = {
          skillName: item,
          skillMoniker: item
        }
        this.listSkill.push(sk);
      }
   })
  }else{
    this.skills.forEach((item:any) => {
      const skReal = this.skillList.filter(sk => sk.name==item); 
      if(skReal[0]!=null){
           let sk = {
             skillName: skReal[0].name,
             skillMoniker: skReal[0].moniker
           }
           this.listSkill.push(sk);
        }else{
          let sk = {
            skillName: item,
            skillMoniker: item
          }
          this.listSkill.push(sk);
        }
     })
  }
   return this.listSkill
  }
}
