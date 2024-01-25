import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserDetailsService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class PermissionsGuard implements CanActivate {
  hasPermissions:boolean = false;
  constructor(private authService: UserDetailsService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    this.authService.me().subscribe(
      (result) => {
        this.hasPermissions = true;
      },
      (error) => {
        switch (error.status) {
          case 0:
            this.router.navigate(['denied'])
            break
           case 404:
            this.router.navigate(['404'])
           break
           case 403:
            this.router.navigate(['denied'])
           break
           case 401:
            this.router.navigate(['denied'])
           break
        }
        return this.hasPermissions;
      }
    );
      return true;
    } 
  
}
