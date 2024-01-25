import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment'
import { LogLevelEnum } from '../enums/log-level.enum'

@Injectable({
  providedIn: 'root'
})
export class LogService {
  private readonly isDevEnvironment!: boolean
  private readonly isLoggingEnabled!: boolean
  private readonly logLevel!: LogLevelEnum

  constructor() {
    this.logLevel =
      environment.logLevel != null ? environment.logLevel : LogLevelEnum.None
    this.isDevEnvironment = !environment.production
    this.isLoggingEnabled = this.logLevel !== LogLevelEnum.None
   }

  
   public verbose(message: string, obj?: any): void {
    this.log(message, LogLevelEnum.Verbose, obj)
  }

  public info(message: string, obj?: any): void {
    this.log(message, LogLevelEnum.Info, obj)
  }

  public warn(message: string, obj?: any): void {
    this.log(message, LogLevelEnum.Warn, obj)
  }

  public error(message: string, obj?: any): void {
    this.log(message, LogLevelEnum.Error, obj)
  }

  private log(message: string, level: LogLevelEnum, obj?: any): void {
    // Always log errors
    if (LogService.isError(level)) {
      console.error(LogService.formatMessage(message, LogLevelEnum.Error), obj)
      return
    }

    if (!this.shouldLogMessage(level)) {
      return
    }

    if (level === LogLevelEnum.Warn) {
      console.warn(LogService.formatMessage(message, LogLevelEnum.Warn), obj)
    } else {
      LogService.logMessage(message, level, obj)
    }
  }

  private static logMessage(
    message: string,
    level: LogLevelEnum,
    obj?: any
  ): void {
    if (environment.production) {
      return
    }
    if (obj) {
      console.log(LogService.formatMessage(message, level), obj)
    } else {
      console.log(LogService.formatMessage(message, level))
    }
  }

  private static isError(level: LogLevelEnum): boolean {
    return level === LogLevelEnum.Error
  }

  private static formatMessage(message: string, level: LogLevelEnum): string {
    const now = new Date()
    return `(${LogLevelEnum[level]}) ${now.toUTCString()}: ${message}`
  }

  private shouldLogMessage(level: LogLevelEnum): boolean {
    // Only log errors in production environments
    if (!this.isDevEnvironment) {
      return false
    }
    if (!this.isLoggingEnabled) {
      return false
    }
    return this.isLoggableLevel(level)
  }

  private isLoggableLevel(level: LogLevelEnum): boolean {
    return level >= this.logLevel
  }

}
