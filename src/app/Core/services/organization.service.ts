import {HttpClient} from '@angular/common/http'
import {Injectable} from '@angular/core'
import { BaseService } from './base/base.service'
import { ORGANIZATION_API_PATH } from '../api-constants'
import { catchError, Observable } from 'rxjs'
import { Organization, OrganizationModel, Sugestions } from 'src/app/models/organization'
import { ProfessionalServiceModel, ProfessionalServicePostModel } from 'src/app/models/professional'

@Injectable({
  providedIn: 'root',
})
export class OrganizationService extends BaseService {
  constructor(http: HttpClient) {
    super(ORGANIZATION_API_PATH, http) 
  }

  organizationList():Observable<Organization[]>{ 
    return this.http.get<Organization[]>(`${this.url}`).pipe(catchError(this.handleError))
  } 

  sugestionsList():Observable<Sugestions[]>{ 
    return this.http.get<Sugestions[]>(`${this.url}/sugestions`).pipe(catchError(this.handleError))
  }


  persistOrganization(org: OrganizationModel): Observable<Organization>{
   return this.http.post<Organization>(`${this.url}`, org).pipe(catchError(this.handleError))
  }

  details(moniker: string): Observable<Organization> {
    return this.http
      .get<Organization>(`${this.url}/${moniker}`)
      .pipe(catchError(this.handleError))
  }

  updateOrganization(
    organizationId: string,
    organization: any
  ){
    return this.http.put<any>(
      `${this.url}/${organizationId}`,
      organization
    )
    .pipe(catchError(this.handleError))
  }

  listServices(organizationId: string): Observable<any[]> {
    return this.http
      .get<any[]>(
        `${this.url}/${organizationId}/services`
      )
      .pipe(catchError(this.handleError))
  }

   /**
   * Add service to organization
   */
   addService(
    organizationId: string,
    service: ProfessionalServicePostModel
  ): Observable<ProfessionalServiceModel> {
    return this.http
      .post<ProfessionalServiceModel>(
        `${this.url}/${organizationId}/services`,
        service
      )
      .pipe(catchError(this.handleError))
  }

  /**
   * Update service for a organization
   */
  updateService(
    organizationId: string,
    service: ProfessionalServiceModel,
    serviceId: string
  ): Observable<ProfessionalServiceModel> {
    return this.http
      .put<ProfessionalServiceModel>(
        `${this.url}/${organizationId}/services/${serviceId}`,
        service
      )
      .pipe(catchError(this.handleError))
  }

   /**
   * Remove service from a organization
   */
   removeService(
    organizationId: string,
    id: string
  ): Observable<boolean> {
    return this.http
      .delete<boolean>(
        `${this.url}/${organizationId}/services/${id}`
      )
      .pipe(catchError(this.handleError))
  }

} 
