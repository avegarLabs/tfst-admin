import { Component, OnInit } from '@angular/core';
import {MsalService} from "@azure/msal-angular";

@Component({
  selector: 'app-access-denied',
  templateUrl: './access-denied.component.html',
  styleUrls: ['./access-denied.component.scss']
})
export class AccessDeniedComponent implements OnInit {

  constructor(private authService: MsalService) { }

  ngOnInit(): void {
  }

  logout(){
    this.authService.logout()
  }

}
