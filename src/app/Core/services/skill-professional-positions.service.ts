import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { SKILL_POSITION_API_PATH } from '../api-constants';
import { BaseService } from './base/base.service';

@Injectable({
  providedIn: 'root'
})
export class SkillProfessionalPositionsService extends BaseService {

  constructor(http: HttpClient) {
    super(SKILL_POSITION_API_PATH, http) 
  }

   /**
   * Add skill to position 
   */
   addskillProfessionalPosition( 
    PositionId: string,
    skillPosition: any
  ): Observable<any> {
    return this.http
      .post<any>(
        `${this.url}/${PositionId}`,
        skillPosition
      )
      .pipe(catchError(this.handleError))
  }

  /**
   * Update skill to position
   */
  updateskillProfessionalPosition(
    PositionId: string,
    skillPosition: string,
  ): Observable<any> {
    return this.http
      .put<any>(
        `${this.url}/${PositionId}`,
        skillPosition
      )
      .pipe(catchError(this.handleError))
  }

  /**
   * Remove skill to position
   */
  removeskillProfessionalPosition(
    PositionId: string,
  ): Observable<boolean> {
    return this.http
      .delete<boolean>(
        `${this.url}/${PositionId}`
      )
      .pipe(catchError(this.handleError))
  }


}
