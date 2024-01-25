import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
//import { ProfessionalService } from '@app/core/services/professional.service'
//import * as actions from '@app/store/professional/professional.actions'
import { catchError, exhaustMap, map } from 'rxjs/operators'
import { of } from 'rxjs'

@Injectable()
export class ProfessionalEffects {
  constructor(
    private actions$: Actions,
  //  private professionalService: ProfessionalService
  ) {}

 /* getProfessional$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.getProfessional),
      exhaustMap(action =>
        this.professionalService.getActiveProfessional().pipe(
          map(m => actions.getProfessionalSuccess({ professional: m })),
          catchError(error => of(actions.getProfessionalFail({ error })))
        )
      )
    )
  )*/
}
