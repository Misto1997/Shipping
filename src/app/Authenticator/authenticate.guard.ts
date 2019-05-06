import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { LoginService } from '../Services/login.service';
import { SessionService } from '../Services/session.service';


@Injectable({
  providedIn: 'root'
})
export class AuthenticateGuard implements CanActivate {

  constructor(private ls: LoginService, private router: Router, private ss: SessionService) 
  {
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree 
  {
    if (this.ss.getUserLoggedIn())
      return true;
    else
    {
      alert("please login first");
      this.router.navigateByUrl('');
      return false;
    }
  }


}
