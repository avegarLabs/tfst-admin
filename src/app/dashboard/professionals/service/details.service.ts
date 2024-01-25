import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { PROFESSIONAL_API_PATH } from 'src/app/Core/api-constants';
import { BaseService } from 'src/app/Core/services/base/base.service';
import { JobSugestionsItems } from 'src/app/models/job';
import { ProfessionalLanguage } from 'src/app/models/language';
import { ProfessionalLanguageListItem, ProfessionalPositions, ProfessionalPositionsPost, ProfessionalServiceModel, ProfessionalServicePostModel, ProfessionalSkill, ProfessionalSkillPost, ProfessionalTitle, ProfessionalTitlePost } from 'src/app/models/professional';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class DetailsService extends BaseService {

  constructor(http: HttpClient) { 
    super(PROFESSIONAL_API_PATH, http)
  }

  details(moniker: string): Observable<any> {
    return this.http
      .get<any>(`${this.url}/${moniker}`)
      .pipe(catchError(this.handleError))
  }

  addProfessional(item: any){
    return this.http.post(`${this.url}`, item).pipe(
      catchError(this.handleError))
  }

  /**
   * List a professional's skills
   */
  listSkills(professionalId: string): Observable<ProfessionalSkill[]> {
    return this.http
      .get<ProfessionalSkill[]>(
        `${this.url}/${professionalId}/skills`
      )
      .pipe(catchError(this.handleError))
  }

  /**
   * Add a skill to a professional
   */
  addSkill(
    professionalId: string,
    skill: ProfessionalSkillPost
  ): Observable<ProfessionalSkill> {
    return this.http
      .post<ProfessionalSkill>(
        `${this.url}/${professionalId}/skills`,
        skill
      )
      .pipe(catchError(this.handleError))
  }

  /**
   * Update a skill for a professional
   */
  updateSkill(
    professionalId: string,
    skillId:string,
    skill: ProfessionalSkillPost
  ): Observable<ProfessionalSkill> { 
    return this.http
      .put<ProfessionalSkill>(
        `${this.url}/${professionalId}/skill/${skillId}`,
        skill
      )
      .pipe(catchError(this.handleError))
  }

  /**
   * Remove a skill from a professional
   */
  removeSkill(
    professionalId: string,
    professionalSkillId: string
  ): Observable<boolean> {
    return this.http
      .delete<boolean>(
        `${this.url}/${professionalId}/skill/${professionalSkillId}`
      )
      .pipe(catchError(this.handleError))
  }

   /**
   * List professional titles
   */
   listTitles(professionalId: string): Observable<ProfessionalTitle[]> {
    return this.http
      .get<ProfessionalTitle[]>(
        `${this.url}/${professionalId}/titles`
      )
      .pipe(catchError(this.handleError))
  }

  /**
   * Add title to a professional
   */
  addTitle(
    professionalId: string,
    title: ProfessionalTitlePost
  ): Observable<ProfessionalTitle> {
    return this.http
      .post<ProfessionalTitle>(
        `${this.url}/${professionalId}/titles`,
        title
      )
      .pipe(catchError(this.handleError))
  }

  /**
   * Update title for a professional
   */
  updateTitle(
    professionalId: string,
    title: ProfessionalTitlePost,
    titlelId: string,
  ): Observable<ProfessionalTitle> {
    return this.http
      .put<ProfessionalTitle>(
        `${this.url}/${professionalId}/titles/${titlelId}`,
        title
      )
      .pipe(catchError(this.handleError))
  }

  /**
   * Remove title from a professional
   */
  removeTitle(
    professionalId: string,
    id: string
  ): Observable<boolean> {
    return this.http
      .delete<boolean>(
        `${this.url}/${professionalId}/titles/${id}`
      )
      .pipe(catchError(this.handleError))
  }


  /**
   * List professional positions
   */
  listPositions(professionalId: string): Observable<ProfessionalPositions[]> {
    return this.http
      .get<ProfessionalPositions[]>(
        `${this.url}/${professionalId}/positions`
      )
      .pipe(catchError(this.handleError))
  }

  /**
   * Add position to a professional
   */
  addPosition(
    professionalId: string,
    position: ProfessionalPositionsPost
  ): Observable<ProfessionalPositions> {
    return this.http
      .post<ProfessionalPositions>(
        `${this.url}/${professionalId}/position`,
        position
      )
      .pipe(catchError(this.handleError))
  }

  /**
   * Update position for a professional
   */
  updatePosition(
    professionalId: string,
    position: ProfessionalPositionsPost,
    positionId: string
  ): Observable<ProfessionalPositions> {
    return this.http
      .put<ProfessionalPositions>(
        `${this.url}/${professionalId}/position/${positionId}`,
        position
      )
      .pipe(catchError(this.handleError))
  }

  /**
   * Remove position from a professional
   */
  removePosition(
    professionalId: string,
    id: string
  ): Observable<boolean> {
    return this.http
      .delete<boolean>(
        `${this.url}/${professionalId}/position/${id}`
      )
      .pipe(catchError(this.handleError))
  }


   /**
   * List professional services
   */
   listServices(professionalId: string): Observable<ProfessionalServiceModel[]> {
    return this.http
      .get<ProfessionalServiceModel[]>(
        `${this.url}/${professionalId}/services`
      )
      .pipe(catchError(this.handleError))
  }

  /**
   * Add service to a professional
   */
  addService(
    professionalId: string,
    service: ProfessionalServicePostModel
  ): Observable<ProfessionalServiceModel> {
    return this.http
      .post<ProfessionalServiceModel>(
        `${this.url}/${professionalId}/services`,
        service
      )
      .pipe(catchError(this.handleError))
  }

  /**
   * Update service for a professional
   */
  updateService(
    professionalId: string,
    service: ProfessionalServiceModel,
    serviceId: string
  ): Observable<ProfessionalServiceModel> {
    return this.http
      .put<ProfessionalServiceModel>(
        `${this.url}/${professionalId}/services/${serviceId}`,
        service
      )
      .pipe(catchError(this.handleError))
  }

  /**
   * Remove service from a professional
   */
  removeService(
    professionalId: string,
    id: string
  ): Observable<boolean> {
    return this.http
      .delete<boolean>(
        `${this.url}/${professionalId}/services/${id}`
      )
      .pipe(catchError(this.handleError))
  }

   /**
   * Add language to a professional
   */
   addLanguage(
    professionalId: string,
    language: ProfessionalLanguage
  ): Observable<ProfessionalLanguageListItem> {
    return this.http
      .post<ProfessionalLanguageListItem>(
        `${this.url}/${professionalId}/language`,
        language
      )
      .pipe(catchError(this.handleError))
  }

    /**
   * Remove language from a professional
   */
    removeLanguage(
      professionalId: string,
      id: string
    ): Observable<boolean> {
      return this.http
        .delete<boolean>(
          `${this.url}/${professionalId}/language/${id}`
        )
        .pipe(catchError(this.handleError))
    }


    getCV(professionalId: string) {
      return this.http
        .get(
          `${this.url}/cv/${professionalId}`
        )
        .pipe(catchError(this.handleError))
    }

    /**
   * List a Jobs Match
   */
  listSugestionsJobs(professionalId: string): Observable<JobSugestionsItems[]> {
    return this.http
      .get<JobSugestionsItems[]>(
        `${this.url}/findjob/${professionalId}`
      )
      .pipe(catchError(this.handleError))
  }

}
