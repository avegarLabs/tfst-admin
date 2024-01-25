import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http'
import { Observable, throwError } from 'rxjs'
import { catchError } from 'rxjs/operators'
import { ToastrService } from 'ngx-toastr'
import { Router } from '@angular/router';

export class ErrorIntercept implements HttpInterceptor {
  constructor(private toastr: ToastrService, private router: Router) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        switch (error.status) {
          case 401:
          this.toastr.error('Unauthorized')
          break
          case 400:
            this.toastr.error(error.error.detail)
            break
          case 404:
            this.toastr.error(error.message)
            break
          case 500:
            this.toastr.error(error.message)
            break
          case 0:
            break
        }
        return throwError(error)
      })
    )
  }
}
