import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router : Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean { //Observable<boolean> | Promise<boolean> | boolean {
      //User is authenticated if there exist a userToken
      if(localStorage.getItem('userToken') != null){
        return true;
      }
      this.router.navigate(['/login']);
      return false;
  }
}

//Approved
/***
 * We need this guard so we can secure our home component 
 * when the user is not logged in. A user should only be 
 * authorized to access /home when he/she is logged in.
 * 
 */



