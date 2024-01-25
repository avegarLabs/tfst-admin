
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