import { Component, ViewChild, Inject, OnInit, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MsalService } from '@azure/msal-angular';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent implements OnInit, AfterViewInit {

  @ViewChild(MatDrawer) drawer!:MatDrawer
  isIframe = false;

  items=[
    {icon:'home', text:'Home', route:''},
    {icon:'person', text:'Users', route:'users'},
    {icon:'account_circle', text:'Professionals', route:'professionals'},
    {icon:'groups', text:'Organizations', route:'organizations'},
    {icon:'apartment', text:'Institutions', route:'institutions'},
    {icon:'work', text:'Jobs', route:'jobs'},
    {icon:'directions_run', text:'Skills', route:'skills'},
    {icon:'support_agent', text:'Services', route:'services'},
    {icon:'public', text:'Countries', route:'countries'},
  ]

  constructor(
    private observer:BreakpointObserver,
    private cdr: ChangeDetectorRef,
    private authService: MsalService,) { }

  ngOnInit(): void { 
    this.isIframe = window !== window.parent && !window.opener;
  }

  ngAfterViewInit(){
    this.observer.observe(['(max-width:900px)']).subscribe((res)=>{
      if(res.matches){
        this.drawer.mode='over';
        this.drawer.close();
      }else{
        this.drawer.mode='side';
        this.drawer.open();
      }
    })
    this.cdr.detectChanges();
  }

  logout() {
    this.authService.logout(); 
  }

}
