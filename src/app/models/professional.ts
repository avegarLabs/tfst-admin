export interface Professional {
  id:string
  name:string
  phone:string
  country:any
  aboutMe: string
  title: string
  moniker: string
  industry:string
  contactEmail?:string
  personalWeb?:string
  linkedInProfile?:string
  youtubeProfile?:string
  picture?: any
  professionalLanguegeListItems:ProfessionalLanguageListItem[]
}

export interface ProfessionalModel {
  name:string
  phone:string
  aboutMe: string
  title: string
  industry:string
  contactEmail?:string
  personalWeb?:string
  linkedInProfile?:string
  youtubeProfile?:string
}

export interface ProfessionalSkill {
  id: string
  skillName: string
  skillMoniker?: string
  skillLevel: number
}

export interface ProfessionalSkillPost {
  name: string
  skillMoniker?: string
  level: number
}

export interface ProfessionalTitle {
  id:string
  name: string
  titleType?: string
  organizationName: string
  organizationId?: string
  startMonthYear: Date
  endMonthYear?: Date 
  type: string
}

export interface ProfessionalTitlePost {
  name: string
  titleType?: string
  organizationName: string
  organizationMoniker?: string
  type: string
  startMonthYear: Date
  endMonthYear?: Date 
}

export interface ProfessionalPositions {
  id:string
  name: string
  description: string
  organizationName?: string
  organizationId?: string
  startMonthYear: Date
  endMonthYear?: Date
  skillPositionLists: any[]
  type: string
}

export interface ProfessionalPositionsPost {
  name: string
  description: string
  organizationName: string
  organizationMoniker: string,
  type: string
  startMonthYear: Date
  endMonthYear?: Date
  skillVersionsModels: any[]
}

export interface ProfessionalServiceModel {
  id:string
  serviceName:string
  price: number
  currency: string
  serviceDescription: string,
  skillList: any[] 
 }

 export interface ProfessionalServicePostModel {
  servicesName:string
  price: number
  currency: string
  serviceDescription: string
 }

 export interface ProfessionalLanguageListItem{
    id:string
    languageId:string 
    name:string
    level:string
 }
