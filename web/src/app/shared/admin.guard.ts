/*import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../auth.service';*/
import { AdminService } from './admin.service';

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
//import { AuthService } from './../shared/auth.service';
@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  /*constructor( private AdminService: AdminService,
    private _router : Router) {}

    canActivate(): boolean {
      if(this.AdminService.adminLoggedIn()){
        return true
      } else {
        this._router.navigate(['/admin-login'])
        return false
      }
    }

}
*/



/*

constructor(
  public authService: AdminService,
  public router: Router
) { }



canActivate() {
  return this.authService.isLoggedIn1();
}
*/


constructor(private authService: AdminService){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      return this.authService.isLoggedIn();
  }
}
