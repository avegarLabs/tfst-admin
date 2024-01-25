import {
  BrowserCacheLocation,
  InteractionType,
  IPublicClientApplication,
  LogLevel,
  PublicClientApplication,
} from '@azure/msal-browser'
import { environment } from 'src/environments/environment'
import {
  MsalGuardConfiguration,
  MsalInterceptorConfiguration,
} from '@azure/msal-angular'

export function initAuth() {
  const isIE =
    window.navigator.userAgent.indexOf('MSIE ') > -1 ||
    window.navigator.userAgent.indexOf('Trident/') > -1

  function loggerCallback(logLevel: LogLevel, message: string) {
  }

  function MSALInstanceFactory(): IPublicClientApplication {
    return new PublicClientApplication({
      auth: {
        clientId: environment.msalConfig.clientId,
        authority: `${environment.msalConfig.authorityDomain}/${environment.msalConfig.domain}/${environment.msalConfig.b2cPolicies.names.signUpSignIn}`,
        redirectUri: window.location.origin,
        postLogoutRedirectUri: window.location.origin,
        knownAuthorities: [environment.msalConfig.authorityDomain],
      },
      cache: {
        cacheLocation: BrowserCacheLocation.LocalStorage,
        storeAuthStateInCookie: isIE, // set to true for IE 11
      },
      system: {
        loggerOptions: {
          loggerCallback,
          logLevel: environment.msalConfig.logLevel,
          piiLoggingEnabled: true,
        },
      },
    })
  }

  function MSALInterceptorConfigFactory(): MsalInterceptorConfiguration {
    const protectedResourceMap = new Map<string, Array<string>>()
    protectedResourceMap.set(
      window.location.origin,
      environment.msalGuardConfig.scopes
    )
    return {
      interactionType: InteractionType.Redirect,
      protectedResourceMap,
    }
  }

  function MSALGuardConfigFactory(): MsalGuardConfiguration {
    return {
      interactionType: InteractionType.Redirect,
      authRequest: {
        scopes: environment.msalGuardConfig.scopes,
      },
    }
  }

  return {
    MSALInstanceFactory,
    MSALInterceptorConfigFactory,
    MSALGuardConfigFactory,
  }
}
