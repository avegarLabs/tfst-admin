export interface GeneralSkillRegister {
    name: string
    id: string
    icon: string
    ischeck: boolean
    level: string
}

export interface SaveSkillRegister {
    name: string
    level: string
}

export interface LevelsSkillRegister {
    text: string
    value: number
    description: string
}