import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkillsMainPageComponent } from './pages/skills-main-page/skills-main-page.component';
import { SkillsPageComponent } from './pages/skills-page/skills-page.component';

const routes: Routes = [
  {
    path: '',
    component: SkillsMainPageComponent,
    children: [
      {
        path: '',
        component: SkillsPageComponent
      },
    ]
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SkillsRoutingModule { }
