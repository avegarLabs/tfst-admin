import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from '@ngrx/data';
import { Language } from 'src/app/models/language';

@Injectable({
  providedIn: 'root'
})
export class LanguagesService extends EntityCollectionServiceBase<Language> {

  constructor(
    serviceElementsFactory: EntityCollectionServiceElementsFactory,
    ) {
    super('Language', serviceElementsFactory);
  }
}
