import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { AdminPageComponent } from './admin-page/admin-page.component';

const routes: Routes = [
  {
  path: '',
  component: AdminPageComponent,
  children: [
    {
      path: '',
      component:HomeComponent
    },
    {
      path: "users",
      loadChildren: () =>
        import("../user/user.module").then(m => m.UserModule),
    },
    {
      path: "professionals",
      loadChildren: () =>
        import("../professionals/professionals.module").then(m => m.ProfessionalsModule),
    },
    {
      path: "institutions",
      loadChildren: () =>
        import("..//institutions/institutions.module").then(m => m.InstitutionsModule),
    },
    {
      path: "organizations",
      loadChildren: () =>
        import("../organizations/organizations.module").then(m => m.OrganizationsModule),
    },
    {
      path: "jobs",
      loadChildren: () =>
        import("../jobs/jobs.module").then(m => m.JobsModule),
    },
    {
      path: "countries",
      loadChildren: () =>
        import("../countries/countries.module").then(m => m.CountriesModule),
    },
    {
      path: "skills",
      loadChildren: () =>
        import("../skills/skills.module").then(m => m.SkillsModule),
    },
    {
      path: "services",
      loadChildren: () =>
        import("../services/services.module").then(m => m.ServicesModule),
    },
  ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminPanelRoutingModule { }
