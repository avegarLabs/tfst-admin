import { BrowserCacheLocation } from '@azure/msal-browser'
import { LogLevel as MsalLogLevel } from '@azure/msal-browser';
import { LogLevelEnum } from 'src/app/Core/enums/log-level.enum';

export const environment = {
  production: true,

  logLevel: LogLevelEnum.Error,
  apiBaseUrl: '##{API-URL}##admin/',
  maxFileSize: 52428800,
  msalGuardConfig: {
    scopes: ['openid', '##{B2C-Scope}##'],
  },
  msalConfig: {
    clientId: '##{B2C-ClientId}##',
    domain: '##{B2C-Domain}##',
    authorityDomain: '##{B2C-Authority-Domain}##',
    b2cPolicies: {
      names: {
        signUpSignIn: 'B2C_1_si',
        forgotPassword: 'B2C_1_password_reset',
        signUp: 'B2C_1_su',
      },
    },
    cache: {
      cacheLocation: BrowserCacheLocation.LocalStorage,
    },
    logLevel: MsalLogLevel.Error,
  },  
};
