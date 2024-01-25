import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MsalGuard } from '@azure/msal-angular';
import { PermissionsGuard } from './Core/guards/permissions.guard';
import { HomeComponent } from './dashboard/home/home.component';

const routes: Routes = [
{path: '', redirectTo:'/dashboard', pathMatch:'full'},

{
  path: "login",
  loadChildren: () =>
    import("./pages/login/login.module").then(m => m.LoginModule),
},
{
  path: '404',
  loadChildren: () =>
    import("./pages/error404/error404.module").then(m => m.Error404Module),
},
{
  path: "dashboard",
  loadChildren: () =>
    import("./dashboard/admin-panel/admin-panel.module").then(m => m.AdminPanelModule),
    canActivate: [MsalGuard, PermissionsGuard]
},
{
  path: 'denied',
  loadChildren: () =>
    import("./pages/access-denied/access-denied.module").then(m => m.AccessDeniedModule),
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
