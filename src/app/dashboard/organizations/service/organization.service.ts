import { Organization } from './../../../models/organization';
import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from '@ngrx/data';

@Injectable({
  providedIn: 'root'
})
export class OrganizationService extends EntityCollectionServiceBase<Organization> {

  constructor(
    serviceElementsFactory: EntityCollectionServiceElementsFactory,
  ) {
    super('Organization', serviceElementsFactory);
   } 
}
