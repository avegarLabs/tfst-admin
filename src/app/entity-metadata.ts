import { EntityMetadataMap, EntityDataModuleConfig } from '@ngrx/data';
import { General } from './models/general';
import { Skill } from './models/skills';


const entityMetadata: EntityMetadataMap = {
  User: {},
  Professional: {},
  Organization: {},
  Country: {},
  Job: {},
  Roles: {},
  Skill:{},
  Language:{},
  Institution:{},
  General: {
    selectId: (general: General) => general.entityName,
  },
};

const pluralNames = { 
  User: 'User', 
  Skill: 'Skill', 
  General: 'General', 
  Professional:'Professional', 
  Organization: 'Organization',
  Country:'Country',
  Job:'Job',
  Roles: 'Roles',
  Language:'Language',
  Institution:'Institution'
};

export const entityConfig: EntityDataModuleConfig = {
  entityMetadata,
  pluralNames
};

