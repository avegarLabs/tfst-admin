import { Injectable } from '@angular/core';
import { SIGNUP } from '../constants/local-storage-constants';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  getSignUp() {
    let signupObj = localStorage.getItem(SIGNUP)
    if (!signupObj) {
      this.setSignUp({})
    }
    return JSON.parse(localStorage.getItem(SIGNUP)!)
  }

  setSignUp(obj: any) {
    localStorage.setItem(SIGNUP, JSON.stringify(obj))
  }
}
