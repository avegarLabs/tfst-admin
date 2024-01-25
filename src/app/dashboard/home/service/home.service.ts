import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from '@ngrx/data';
import { General } from 'src/app/models/general';

@Injectable({
  providedIn: 'root'
})
export class HomeService extends EntityCollectionServiceBase<General> {

  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory,) {
    super('General', serviceElementsFactory);
   }
} 
