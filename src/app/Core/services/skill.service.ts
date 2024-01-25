import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { BaseService } from './base/base.service';
import { SKILL_API_PATH } from '../api-constants';
import { catchError, Observable } from 'rxjs'
import { BasicSkill } from 'src/app/models/skills';

@Injectable({
  providedIn: 'root',
})
export class SkillOneService extends BaseService {
constructor(http: HttpClient) {
    super(SKILL_API_PATH, http)
  }
  list(): Observable<BasicSkill[]> {
    return this.http
      .get<BasicSkill[]>(`${this.url}`)
      .pipe(catchError(this.handleError)) 
  }

}
