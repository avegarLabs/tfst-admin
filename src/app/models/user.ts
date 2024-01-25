import { Country } from "./country"
import { Professional } from "./professional"

export interface User {
  id:string
  name: string
  moniker:string
  firstName:string
  lastName:string
  contactEmail: string
  phone: string
  roles: any[]
  accountId: string
  zipOrPostalCode: string
  city: string
  country: Country | null
  line1:string
  stateProvinceCountry:string
  otherAddressDetails:string
  picture?:Picture

}

export interface UserProfilesListItem {
  professional: Professional
  
}

export interface Picture {
  thumbUrl:string
  displayUrl:string
  
}

export interface UserModel {
  name: string
  firstName:string
  lastName:string
  contactEmail: string
  phone: string
  roles: string[]
  accountId: string
  zipOrPostalCode: string
  city: string
  country:Country | null
  line1:string
  stateProvinceCountry:string
  otherAddressDetails:string
}