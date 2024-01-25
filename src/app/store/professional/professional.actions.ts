import { createAction, props } from '@ngrx/store'
import { Professional } from 'src/app/models/professional'



export const getProfessional = createAction('[Professional] Get professional')
export const getProfessionalSuccess = createAction(
  '[Professional] Get professional success',
  props<{ professional: Professional }>()
)
export const getProfessionalFail = createAction(
  '[Professional] Get professional fail',
  props<{ error: string }>()
)
