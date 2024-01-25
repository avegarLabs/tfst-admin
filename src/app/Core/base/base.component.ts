import { AppInjector } from './app.Injector'
import { ToastrService } from 'ngx-toastr'
import { LogService } from '../services/log.service'
import { OperationNotCompleted } from '../constants/error-constants'

export class BaseComponent {
  protected logger: LogService
  protected toastr: ToastrService
  public loading: boolean = false

  /**
   *
   */
  constructor() {
    const injector = AppInjector.getInjector()
    this.toastr = injector.get(ToastrService)
    this.logger = injector.get(LogService)
  }

  /**
   *
   * */
  success = (message: string) => {
    this.toastr.success(message)
  }
  /**
   *
   * */
  warning = (message: string) => {
    this.toastr.warning(message)
  }
  /**
   *
   * */
  error = (message: string) => {
    this.toastr.error(message)
  }

  /**
   * Execute the promise without modify event data.
   * @param event The event
   * @param promise Api service call
   */
  safeExecute(event: any, promise: Promise<any>) {
    event.cancel = new Promise((resolve, reject) => {
      promise
        .then(success => {
          if (success) {
            resolve(null)
          } else {
            reject(OperationNotCompleted)
          }
        })
        .catch(err => {
          this.logger.error('BaseComponent::safeVoidExecute', err)
          reject(OperationNotCompleted)
        })
    })
  }

  /**
   * Execute the promise and modify event data.
   * @param event The event.
   * @param promise Api service call.
   */
  safeInsertExecute(event: any, promise: Promise<any>) {
    event.cancel = new Promise((resolve, reject) => {
      promise
        .then(dataResponse => {
          if (dataResponse) {
            event.data = dataResponse
            resolve(null)
          } else {
            reject(OperationNotCompleted)
          }
        })
        .catch(err => {
          this.logger.error('BaseComponent::safeReturnExecute', err)
          reject()
        })
    })
  }
}
