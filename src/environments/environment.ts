// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import {
  BrowserCacheLocation,
  LogLevel as MsalLogLevel,
} from '@azure/msal-browser'
import { LogLevelEnum } from '../app/Core/enums/log-level.enum'

export const environment = {
  production: false,
  logLevel: LogLevelEnum.Verbose,
  apiBaseUrl: 'https://localhost:6001/admin/',
  maxFileSize: 52428800,
  msalGuardConfig: {
    scopes: ['openid', 'https://devtfst.onmicrosoft.com/tfst-api/full_access'],
  },
  msalConfig: {
    clientId: 'bb95f3dc-2afe-4086-aab5-6fe4f87682ee',
    domain: 'devtfst.onmicrosoft.com',
    authorityDomain: 'https://devtfst.b2clogin.com',
    b2cPolicies: {
      names: {
        signUpSignIn: 'B2C_1_susi',
        forgotPassword: 'B2C_1_password_reset',
        signUp: 'B2C_1_susi',
      },
    },
    cache: {
      cacheLocation: BrowserCacheLocation.LocalStorage,
    },
    logLevel: MsalLogLevel.Error,
  },
  
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
