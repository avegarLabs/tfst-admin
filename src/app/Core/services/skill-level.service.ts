import { Injectable } from '@angular/core';
import { LevelsSkillRegister } from 'src/app/models/skills-register';


@Injectable({
  providedIn: 'root'
})
export class SkillLevelService {

  constructor() { }
  level!: LevelsSkillRegister
  levels: LevelsSkillRegister[] = [
    {
      text: "Newbie",
      value: 1,
      description: "No experience"
    },
    {
      text: "Junior",
      value: 2,
      description: "Little experience"
    },
    {
      text: "Intermediate",
      value: 3,
      description: "Intermediate experience"
    },
    {
      text: "Senior",
      value: 4,
      description: "Experienced developer"
    },
    {
      text: "Super Senior",
      value: 5,
      description: "Wide experience"
    }
  ];

  mapLevelValuetoString(val: number): string{
    this.level = this.levels.filter(item => item.value == val)[0]
   return this.level.text
  }

}
