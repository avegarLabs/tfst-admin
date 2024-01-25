import { Country } from './../../../../models/country';
import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User, UserModel } from 'src/app/models/user';
import { UserService } from '../../service/user.service';
import { CountryService } from 'src/app/Core/services/country.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Roles } from 'src/app/models/roles';
import { RolesService } from 'src/app/Core/services/roles.service';

@Component({
  selector: 'app-users-edit-dialog',
  templateUrl: './users-edit-dialog.component.html',
  styleUrls: ['./users-edit-dialog.component.scss']
})
export class UsersEditDialogComponent implements OnInit { 

  userForm!:FormGroup;
  userPost!: User;
  countries!:Country[]
  roles!:Roles[]
  userRoles!: string[]
  isAdmin!:boolean
  isUser!:boolean
  isCustomer!:boolean
  countryId!:string
  
  constructor(
    private formBuilder:FormBuilder,
    @Inject(MAT_DIALOG_DATA) public user: User,
    private dialogRef: MatDialogRef<UsersEditDialogComponent>,
    private userService: UserService,
    private countryService: CountryService,
    public snackBar:MatSnackBar,
    private roleService: RolesService
    ) { }

  ngOnInit(): void {
    this.getCountries();
    this.getRoles();
    if(this.user){
    this.userForm=this.initForm();
    }else{
      this.userForm=this.initEmptyForm();
    }
  }
  getRoles() {
   return this.roleService.getAll().subscribe(data => {
     this.roles = data
    })
  }

  getCountries(){
    return this.countryService.getAll().subscribe(
      data=>{
       this.countries=data;
      }
    )
  }

  initForm():FormGroup{
    return this.formBuilder.group({
      firstName:[this.user.firstName, [Validators.required]],
      lastName:[this.user.lastName, [Validators.required]],
      email:[this.user.contactEmail, [Validators.required, Validators.email]],
      phone:[this.user.phone,[Validators.required]],
      postal:[this.user.zipOrPostalCode, [Validators.required]],
      address:[this.user.line1, [Validators.required]],
      city:[this.user.city,[Validators.required]],
      country:[this.user.country?.id, [Validators.required]], 
      admin:[this.isAdminValidation()],
      user:[this.isUserValidation()],
      customer:[this.isCustomerValidation()],
    })
  }
  isCustomerValidation(): boolean {
    this.isCustomer = false;
    const val = this.user.roles.find(r => r.name === 'CUSTOMERSERVICE')
    if(val){
      this.isCustomer = true;
    }
    return this.isCustomer;
  }
  isAdminValidation(): boolean {
    this.isAdmin = false;
    const val = this.user.roles.find(r => r.name === 'ADMIN')
    if(val){
      this.isAdmin = true;
    }
    return this.isAdmin;
  }
  isUserValidation(): boolean {
    this.isUser = false;
    const val = this.user.roles.find(r => r.name === 'USER')
    if(val){
      this.isUser = true;
    }
    return this.isUser;
  }

  initEmptyForm():FormGroup{
    return this.formBuilder.group({
      firstName:['', [Validators.required]],
      lastName:['', [Validators.required]],
      email:['', [Validators.required, Validators.email]],
      phone:['',[Validators.required]],
      postal:['', [Validators.required]],
      address:['', [Validators.required]],
      city:['',[Validators.required]],
      country:['', [Validators.required]], 
      admin:false,
      user:true,
      customer:false,
    })
  }

  update() {
    this.generateUserUpdate()
    this.userService.update(this.user).subscribe(response=>{
      this.dialogRef.close();
      this.snackBar.open('Usuario editado con exito','',{duration:2000});
  })
  }
  
  addUser(){
    this.generateUserAdd();
    console.log(this.userPost)
    this.userService.add(this.userPost).subscribe(response=>{
      this.dialogRef.close();
     this.snackBar.open('Usuario agregado con exito','',{duration:2000});
  })  
  } 

  generateUserAdd(){
    this.userPost = {
      id: "" ,
      line1: this.userForm.value.address, 
      firstName: this.userForm.value.firstName,
      lastName: this.userForm.value.lastName,
      name: this.userForm.value.firstName + ' ' + this.userForm.value.lastName,
      phone: this.userForm.value.phone,
      city: this.userForm.value.city,
      contactEmail: this.userForm.value.email,
      country: this.userForm.value.country,
      roles: this.SetRoles(),
      accountId: "**",
      stateProvinceCountry:"ss",
      otherAddressDetails:"ssdsdsdsddsds",
      zipOrPostalCode: this.userForm.value.postal,
      moniker: ""
    }
  }
  SetRoles(): string[] {
    this.userRoles = []
    if(this.userForm.value.user){
       let userMoniker = this.roles.filter(r => r.name === 'USER').map(r => r.moniker) 
       this.userRoles.push(userMoniker[0])
    }

    if(this.userForm.value.admin){
      let adminMoniker = this.roles.filter(r => r.name === 'ADMIN').map(r => r.moniker) 
      this.userRoles.push(adminMoniker[0])
    }

    if(this.userForm.value.customer){
      let customerMoniker = this.roles.filter(r => r.name ==='CUSTOMERSERVICE').map(r => r.moniker) 
      this.userRoles.push(customerMoniker[0])
    }
   return this.userRoles
  }

  generateUserUpdate(){
    this.user.name=this.userForm.value.firstName + ' ' + this.userForm.value.lastName
    this.user.line1 = this.userForm.value.address
    this.user.firstName = this.userForm.value.firstName
    this.user.lastName = this.userForm.value.lastName
    this.user.phone = this.userForm.value.phone
    this.user.city = this.userForm.value.city
    this.user.country= this.getCountrytoUpdate(this.userForm.value.country)
    this.user.contactEmail = this.userForm.value.email
    this.user.zipOrPostalCode = this.userForm.value.postal
    this.resetRolesToUpdate()
  }
  resetRolesToUpdate(){
    this.user.roles = []
    if(this.userForm.value.user === true){
     this.user.roles.push(this.roles.find(r => r.name === 'USER'))
    }
    if(this.userForm.value.admin === true){
      this.user.roles.push(this.roles.find(r => r.name === 'ADMIN'))
    }
    if(this.userForm.value.customer === true){
      this.user.roles.push(this.roles.find(r => r.name === 'CUSTOMERSERVICE'))
    }
   
  }

  getCountrytoUpdate(idC: any): Country {
    const country = this.countries.filter(item => item.id === idC)
    return country[0]
  }
 

}
