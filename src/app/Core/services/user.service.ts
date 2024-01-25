import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { BaseService } from './base/base.service';
import { USERPROFILE_API_PATH } from '../api-constants';
import { User, UserProfilesListItem } from 'src/app/models/user';
import { catchError, Observable } from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class UserDetailsService extends BaseService {
  private listPath = 'list'
  private uploadImagePath = 'avatar'
  private contactInformation = 'contact'
  private profiles = 'profiles'

  constructor(http: HttpClient) {
    super(USERPROFILE_API_PATH, http)
  }

  list(): Observable<User[]> {
    return this.http
      .get<User[]>(`${this.url}/${this.listPath}`)
      .pipe(catchError(this.handleError))
  }

  me(): Observable<User> {
    return this.http.get<User>(
      `${this.url}`
    )
  }

  getProfiles(): Observable<UserProfilesListItem> {
    return this.http.get<UserProfilesListItem>(
      `${this.url}/${this.profiles}`
    )
  }

}

