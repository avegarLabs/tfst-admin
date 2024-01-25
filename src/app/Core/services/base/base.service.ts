import { Inject, Injectable } from '@angular/core'
import { catchError, Observable, throwError } from 'rxjs'
import { environment } from 'src/environments/environment'
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root',
})
export abstract class BaseService {
  protected url!: string

  /**
   * Constructor
   * @param apiPath
   * @param http
   * @protected 
   */
  protected constructor(
    @Inject(String) apiPath: string,
    protected http: HttpClient
  ) {
    this.url = `${environment.apiBaseUrl}${apiPath}`
  }

  /**
   * Get all elements of type TResponse
   * @returns Observable<TResponse>
   */
  public get<TResponse>(): Observable<TResponse> {
    return this.http.get<TResponse>(this.url).pipe(catchError(this.handleError))
  }

  /**
   * Get all elements of type TResponse
   * @returns Observable<TResponse>
   */
  public lookup<TResponse>(): Observable<TResponse> {
    return this.http
      .get<TResponse>(`${this.url}/lookup`)
      .pipe(catchError(this.handleError))
  }

  /**
   * Get all elements of type TResponse
   * @returns Observable<TResponse>
   */
  public getBy<TResponse>(param: any): Observable<TResponse> {
    return this.http
      .get<TResponse>(`${this.url}/${param}`)
      .pipe(catchError(this.handleError))
  }

  /**
   * Crate an element of type T by id
   * @param data of tye TInput
   * @returns Observable<TResponse>
   */
  public create<TInput, TResponse>(data: TInput): Observable<TResponse> {
    return this.http
      .post<TResponse>(this.url, data)
      .pipe(catchError(this.handleError))
  }

  /**
   * Update an element of type T by id
   * @param data of type TInput
   * @param identifier of type TIdentifier
   * @returns Observable<TResponse>
   */
  update<TInput, TResponse>(
    data: TInput,
    identifier: string
  ): Observable<TResponse> {
    return this.http
      .put<TResponse>(`${this.url}/${identifier}`, data)
      .pipe(catchError(this.handleError))
  }

  /**
   * Delete an element  by id
   * @param identifier
   * @returns Observable<boolean>
   */
  delete(identifier: string): Observable<boolean> {
    return this.http
      .delete<boolean>(`${this.url}/${identifier}`)
      .pipe(catchError(this.handleError))
  }

  /**
   * Handle error
   * @param err
   * @protected
   */
  protected handleError(err: any) {
    let errorMessage: string
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred while searching: ${err.error.message}`
    } else {
      errorMessage = `Backend returned code ${err.status}: ${err.body?.error}`
    }
    console.error(err)
    return throwError(errorMessage)
  }
}
