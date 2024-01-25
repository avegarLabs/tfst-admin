import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from '@ngrx/data';
import { Institution } from 'src/app/models/institutions';

@Injectable({
  providedIn: 'root'
})
export class InstitutionService  extends EntityCollectionServiceBase<Institution> {

  constructor(
    serviceElementsFactory: EntityCollectionServiceElementsFactory,
  ) {
    super('Institution', serviceElementsFactory);
   }   
}
