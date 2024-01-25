import { User } from './../../../models/user';
import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from '@ngrx/data';


@Injectable({
  providedIn: 'root'
})
export class UserService extends EntityCollectionServiceBase<User> {

  constructor(
    serviceElementsFactory: EntityCollectionServiceElementsFactory,
    ) {
    super('User', serviceElementsFactory);
  }
 
}  
