import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogginService {
  isUserLoggedIn: Subject<boolean> = new Subject<boolean>();
  constructor() { }
}

