import { Component, OnInit } from '@angular/core';
import {MsalService} from "@azure/msal-angular";

@Component({
  selector: 'app-error404-page',
  templateUrl: './error404-page.component.html',
  styleUrls: ['./error404-page.component.scss']
})
export class Error404PageComponent implements OnInit {

  constructor(private authService: MsalService) { }

  ngOnInit(): void {
  }

  logout(){
    this.authService.logout()
  }

} 
