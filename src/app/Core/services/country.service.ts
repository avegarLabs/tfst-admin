import { Country } from './../../models/country';
import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from '@ngrx/data';

@Injectable({
  providedIn: 'root'
})
export class CountryService extends EntityCollectionServiceBase<Country>{

  constructor(
    serviceElementsFactory: EntityCollectionServiceElementsFactory,
  ) {
    super('Country', serviceElementsFactory);
   } 
}
