import { Router } from '@angular/router';

import { Component, ViewChild, Inject, OnInit, ChangeDetectorRef } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { AccountStoreService } from './store/account/account.store.service';
import {
  AuthenticationResult,
  AuthError,
  EventMessage,
  EventType,
  InteractionStatus
} from "@azure/msal-browser";
import { filter, Subject, takeUntil } from "rxjs";
import {
  MSAL_GUARD_CONFIG,
  MsalBroadcastService,
  MsalGuardConfiguration,
  MsalService
} from "@azure/msal-angular";
import { LogService } from './Core/services/log.service';
import { environment } from 'src/environments/environment';
import { Store } from '@ngrx/store'
import * as fromRoot from 'src/app/store'
import * as fromAccount from 'src/app/store/account/index'

interface IdTokenClaims extends AuthenticationResult {
  idTokenClaims: {
    acr?: string
    tfp?: string
  };
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'tfst-admin';
  isAuthenticated: boolean = false;
  private readonly _destroying$ = new Subject<void>();
 

  isIframe = false;

  log!:boolean;



  private readonly _destroy = new Subject<void>();
  constructor(
    @Inject(MSAL_GUARD_CONFIG) private msalGuardConfig: MsalGuardConfiguration,
      private msalBroadCastService: MsalBroadcastService,
      private authService: MsalService,
      private route:Router,
      private readonly store: Store<fromRoot.AppState>,
      private accountStoreService: AccountStoreService){
        
      }

  ngOnInit(): void {
    this.auth();
    this.isIframe = window !== window.parent && !window.opener;
    this.handleAuthentication();
    this.handleMsalProgress();
  }

  auth(){
    this.store.select(fromAccount.userIdentity).subscribe(user => {
      if(user){
        this.log = true;
        this.route.navigate(['']);
      }
      else{
        this.log = false;
        this.route.navigate(['/login']);
      }
    });
  }

  private handleMsalProgress() {
    this.msalBroadCastService.inProgress$
      .pipe(
        filter(
          (status: InteractionStatus) => status === InteractionStatus.None
        ),
        takeUntil(this._destroying$)
      )
      .subscribe(() => {
       this.checkAndSetActiveAccount();
      });
  }

  checkAndSetActiveAccount() {
    const activeAccount = this.authService.instance.getActiveAccount();
    if (activeAccount) {
      this.accountStoreService.setAccount(activeAccount);
    } else if (this.authService.instance.getAllAccounts().length > 0) {
      let accounts = this.authService.instance.getAllAccounts();
      this.authService.instance.setActiveAccount(accounts[0]);
      this.accountStoreService.setAccount(accounts[0]);
    }
  }

  private subscribeToMsalEvents() {
    this.msalBroadCastService.msalSubject$
      .pipe(
        filter(
          (msg: EventMessage) =>
            msg.eventType === EventType.LOGIN_SUCCESS ||
            msg.eventType === EventType.ACQUIRE_TOKEN_SUCCESS
        ),
        takeUntil(this._destroying$)
      )
      .subscribe((result: EventMessage) => {
        let payload: IdTokenClaims = <AuthenticationResult>result.payload;
        if (
          payload.idTokenClaims?.acr ===
          environment.msalConfig.b2cPolicies.names.forgotPassword
        ) {
          window.alert(
            "Password has been reset successfully. \nPlease sign-in with your new password."
          );
          return this.authService.logout();
        }
        return result;
      });
  }

  private handleAuthentication() {
    this.isIframe = window !== window.parent && !window.opener;
     this.checkAndSetActiveAccount();
    this.subscribeToMsalEvents();

    this.authService.handleRedirectObservable().subscribe({
      next: (result: AuthenticationResult) => {
        if (result) {
          this.authService.instance.setActiveAccount(result.account);
         this.checkAndSetActiveAccount();
        } else {
          this.isAuthenticated = false;
        }
      },
      error: error => {
        if (error instanceof AuthError) {
          if (error.message.includes("AADB2C90118")) {
            let resetPasswordFlowRequest = {
              scopes: ["openid"],
              authority: `${environment.msalConfig.authorityDomain}/${environment.msalConfig.domain}/${environment.msalConfig.b2cPolicies.names.forgotPassword}`
            };
            this.authService.loginRedirect(resetPasswordFlowRequest);
          }
        }
      }
    });
  }

}
