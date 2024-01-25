import { Component, OnInit } from '@angular/core';
import {MsalService} from "@azure/msal-angular";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  constructor(private authService: MsalService,) { }

  ngOnInit(): void {
  }

  login(){
    this.authService.loginRedirect()
  }

}
