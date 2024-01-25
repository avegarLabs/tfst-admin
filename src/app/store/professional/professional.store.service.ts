import { Injectable } from '@angular/core'
import { Store } from '@ngrx/store'
import * as fromProfessional from 'src/app/store/professional'

@Injectable({
  providedIn: 'root',
})
export class ProfessionalStoreService {
  constructor(private store: Store<fromProfessional.ProfessionalState>) {}

  professional = () => this.store.select(fromProfessional.professional)

  setProfessional() {
    this.store.dispatch(fromProfessional.getProfessional())
  }
}
