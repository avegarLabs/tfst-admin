import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { of } from 'rxjs'
import { catchError, exhaustMap, map } from 'rxjs/operators'
import * as actions from './account.actions'
import { UserDetailsService } from 'src/app/Core/services/user.service'
import { User } from 'src/app/models/user'

@Injectable()
export class AccountEffects {
  constructor(
    private actions$: Actions,
    public userService: UserDetailsService
  ) {}

  getUserProfile$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.getUserProfile),
      exhaustMap(() =>
        this.userService.get<User>().pipe(
          map(m => actions.getUserProfileSuccess({ payload: m })),
          catchError(error => of(actions.getUserProfileFail({ error })))
        )
      )
    )
  )
}
