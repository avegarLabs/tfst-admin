import { Injectable } from '@angular/core'
import { User } from 'src/app/models/user'
import { Store } from '@ngrx/store'
import * as fromAccount from 'src/app/store/account/index'
import * as fromRoot from 'src/app/store'
import { Observable, tap } from 'rxjs'
import { AccountInfo } from '@azure/msal-browser'
import * as fromProfessional from 'src/app/store/professional'

@Injectable({
  providedIn: 'root',
})
export class AccountStoreService {
  constructor(private store: Store<fromRoot.AppState>) { }

  userProfile(): Observable<User> {
    return this.store.select(fromAccount.userProfile).pipe(
      tap(user => {
        if (!user) {
          this.store.dispatch(fromAccount.getUserProfile())
        }
      })
    )
  }

  setAccount(accountInfo: AccountInfo) {
    this.store.dispatch(
      fromAccount.setIsAuthenticated({ isAuthenticated: true })
    )
    this.store.dispatch(
      fromAccount.setUserIdentity({ userIdentity: accountInfo })
    )
    this.store.dispatch(fromAccount.getUserProfile())
    this.store.dispatch(fromProfessional.getProfessional())
  }
}
