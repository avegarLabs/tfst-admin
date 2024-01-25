import { createAction, props } from '@ngrx/store'
import { User } from 'src/app/models/user'
import { IUserIdentity } from 'src/app/models/user.identity'




export const setIsAuthenticated = createAction(
  '[Account] Set User Is Authenticated',
  props<{ isAuthenticated: boolean }>()
)

export const getUserProfile = createAction('[User] Get User Profile')
export const getUserProfileFail = createAction(
  '[User/me] Get User Profile Fails',
  props<{ error: string }>()
)

export const getUserProfileSuccess = createAction(
  '[User] Get User Profile Success',
  props<{ payload: User }>()
)

export const setUserIdentity = createAction(
  '[Account] Set User Identity',
  props<{ userIdentity: IUserIdentity }>()
)
