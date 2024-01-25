export interface Language{
        id:string
        name:string
        localName:string
        isoCode:string
        threeLetterIsoCode:string
        lcid: number
}

export interface ProfessionalLanguage{
        level:string
        language:Language
}