import { Skill } from './../../../models/skills';
import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from '@ngrx/data';

@Injectable({
  providedIn: 'root'
})
export class SkillsService extends EntityCollectionServiceBase<Skill>  {

  constructor(
    serviceElementsFactory: EntityCollectionServiceElementsFactory,
    ) {
    super('Skill', serviceElementsFactory);
  }

}
