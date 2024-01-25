import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './Shared/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { DefaultDataServiceConfig, EntityDataModule } from '@ngrx/data';
import { entityConfig } from './entity-metadata';
import { HomeComponent } from './dashboard/home/home.component';
import { MsalBroadcastService, MsalGuard, MsalInterceptor, MsalModule, MSAL_GUARD_CONFIG, MSAL_INTERCEPTOR_CONFIG, } from '@azure/msal-angular';
import {  MsalService, MSAL_INSTANCE } from '@azure/msal-angular'
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { initAuth } from './Core/msal-helper';
import { AuthInterceptor } from './Core/interceptors/auth.interceptor';
import { ErrorIntercept } from './Core/interceptors/error.interceptor';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import * as fromAccount from 'src/app/store/account'
import * as fromProfessional from 'src/app/store/professional'
import { ProfessionalEffects } from 'src/app/store/professional'
import { AccountEffects } from './store/account'
import { reducers } from './store'
import { SpinnerComponent } from './Shared/spinner/spinner.component';
import { SpinnerInterceptor } from './Shared/spinner/spinner.interceptor';

const {
  MSALInstanceFactory,
  MSALInterceptorConfigFactory,
  MSALGuardConfigFactory,
} = initAuth()

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SpinnerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      timeOut: 30000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
      progressBar: true,
      tapToDismiss: true,

    }),
    HttpClientModule,
    
    StoreModule.forFeature('account', fromAccount.reducer),
    StoreModule.forFeature('professional', fromProfessional.reducer),
    StoreModule.forRoot(reducers, {
      runtimeChecks: {
        strictActionImmutability: false,
        strictStateImmutability: false,
      },
    }),
    EffectsModule.forRoot([AccountEffects, ProfessionalEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EntityDataModule.forRoot(entityConfig)
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorIntercept,
      multi: true,
      deps: [ToastrService],
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MsalInterceptor,
      multi: true,
    },
    {
      provide: MSAL_INSTANCE,
      useFactory: MSALInstanceFactory,
    },
    {
      provide: MSAL_GUARD_CONFIG,
      useFactory: MSALGuardConfigFactory,
    },
    {
      provide: MSAL_INTERCEPTOR_CONFIG,
      useFactory: MSALInterceptorConfigFactory,
    },
    MsalService,
    MsalGuard,
    MsalBroadcastService,
    { provide: DefaultDataServiceConfig, useValue: { root: environment.apiBaseUrl } },
    {provide: HTTP_INTERCEPTORS, useClass:SpinnerInterceptor, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
