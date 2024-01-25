import { Professional } from 'src/app/models/professional';
import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
  EntityDataService
} from '@ngrx/data';

@Injectable({
  providedIn: 'root'
})
export class ProfessionalService extends EntityCollectionServiceBase<Professional> {

  constructor(
    serviceElementsFactory: EntityCollectionServiceElementsFactory,
  ) { 
    super('Professional', serviceElementsFactory);
  } 

}
