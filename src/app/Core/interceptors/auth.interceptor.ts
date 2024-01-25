import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http'
import { Inject, Injectable } from '@angular/core'
import { LogService } from '../services/log.service'
import {
  MsalInterceptorConfiguration,
  MsalService,
  MSAL_INTERCEPTOR_CONFIG,
} from '@azure/msal-angular'
import { AccountInfo, AuthenticationResult } from '@azure/msal-browser'
import { environment } from 'src/environments/environment'
import { Observable } from 'rxjs'
import { catchError, switchMap } from 'rxjs/operators'

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(
    private logger: LogService,
    @Inject(MSAL_INTERCEPTOR_CONFIG)
    private msalInterceptorConfig: MsalInterceptorConfiguration,
    private authService: MsalService
  ) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let scopes = environment.msalGuardConfig.scopes
    let account: AccountInfo | null
    if (!!this.authService.instance.getActiveAccount()) {
      this.logger.verbose('Interceptor - active account selected')
      account = this.authService.instance.getActiveAccount()
    } else {
      this.logger.verbose(
        'Interceptor - no active account, fallback to first account'
      )
      account = this.authService.instance.getAllAccounts()[0]
    }
    if (account == null) {
      return next.handle(req)
    } else {
      return this.authService
        .acquireTokenSilent({
          ...this.msalInterceptorConfig.authRequest,
          scopes,
          account,
        })
        .pipe(
          switchMap((result: AuthenticationResult) => {
            this.logger.verbose('Interceptor - setting authorization headers')
            const headers = req.headers.set(
              'Authorization',
              `Bearer ${result.accessToken}`
            )

            const requestClone = req.clone({ headers })
            return next.handle(requestClone)
          }),
          catchError(err => {
            this.logger.error('Interceptor - acquireTokenSilent ERROR: ' + err)
            return next.handle(req)
          })
        )
    }
  }
}
