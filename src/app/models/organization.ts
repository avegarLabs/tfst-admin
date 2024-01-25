export interface Organization {
    id: string
    name: string
    description: string
    moniker: string 
    zise:string
    sector:string
    logo?: any
    organizationWeb?: string
    linkedInProfile?: string
    youtubeProfile?: string
    phone: string
    contactEmail: string
    organizationServices?: any[]
    accountId: string
    country:any
  }

  export interface Sugestions {
    name: string
    moniker: string 
    type:string
  }

  export interface OrganizationModel {
    name: string
    description: string
    zise: string
    sector: string
    accountId: string
    countryId: string
 }