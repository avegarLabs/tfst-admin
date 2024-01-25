import * as fromRoot from 'src/app/store/index'
import {
  Action,
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
} from '@ngrx/store'
import * as actions from './account.actions'
import { IUserIdentity } from 'src/app/models/user.identity'
import { User } from 'src/app/models/user'


export interface AccountState {
  isAuthenticated: boolean
  userProfile: User
  userIdentity: IUserIdentity
  error: string
}

export interface AppState extends fromRoot.AppState {
  account: AccountState
}

const initialState: AccountState = {
  isAuthenticated: false,
  userProfile: null as any,
  userIdentity: null as any,
  error: '',
}

const featureReducer = createReducer(
  initialState,
  on(actions.setIsAuthenticated, (state, { isAuthenticated: payload }) => ({
    ...state,
    isAuthenticated: payload,
  })),
  on(actions.getUserProfileFail, (state, { error: payload }) => ({
    ...state,
    error: payload,
  })),
  on(actions.getUserProfileSuccess, (state, { payload: payload }) => ({
    ...state,
    userProfile: payload,
  })),
  on(actions.setUserIdentity, (state, { userIdentity }) => ({
    ...state,
    userIdentity,
  }))
)

export function reducer(state = initialState, action: Action) {
  return featureReducer(state, action)
}

const getAccountFeatureState = createFeatureSelector<AccountState>('account')

export const isAuthenticated = createSelector(
  getAccountFeatureState,
  state => state.isAuthenticated
)

export const userProfile = createSelector(
  getAccountFeatureState,
  state => state.userProfile
)

export const userIdentity = createSelector(
  getAccountFeatureState,
  state => state.userIdentity
)
