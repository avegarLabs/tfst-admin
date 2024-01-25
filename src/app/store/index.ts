import { ActionReducerMap } from '@ngrx/store'
import * as fromAccount from './account/account.reducer'
import * as fromProfessional from './professional/professional.reducer'

export interface AppState {
  account: fromAccount.AccountState
  professional: fromProfessional.ProfessionalState
}

export const reducers: ActionReducerMap<AppState> = {
  account: fromAccount.reducer,
  professional: fromProfessional.reducer,
}
