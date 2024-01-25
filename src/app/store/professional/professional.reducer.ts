
import {
  Action,
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
} from '@ngrx/store'
import * as actions from 'src/app/store/professional/professional.actions'
import { AccountState } from 'src/app/store/account'
import { Professional } from 'src/app/models/professional'

export interface ProfessionalState {
  professional: Professional
  error: string
}

const initialState: ProfessionalState = {
  professional: null as any,
  error: '',
}

export function reducer(state = initialState, action: Action) {
  return featureReducer(state, action)
}

const featureReducer = createReducer(
  initialState,
  on(actions.getProfessionalSuccess, (state, { professional: payload }) => ({
    ...state,
    professional: payload,
  })),
  on(actions.getProfessionalFail, (state, { error: payload }) => ({
    ...state,
    error: payload,
  }))
)
const getProfessionalFeatureState =
  createFeatureSelector<ProfessionalState>('professional')

export const professional = createSelector(
  getProfessionalFeatureState,
  state => state.professional
)
