import { Injectable } from '@angular/core';
import { Roles } from 'src/app/models/roles';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from '@ngrx/data';

@Injectable({
  providedIn: 'root'
})
export class RolesService extends EntityCollectionServiceBase<Roles>{

  constructor(
    serviceElementsFactory: EntityCollectionServiceElementsFactory,
  ) {
    super('Roles', serviceElementsFactory);
   } 
}
