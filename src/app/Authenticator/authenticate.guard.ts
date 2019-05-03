import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree , CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { LoginService } from '../Services/login.service';
import { StorageModule } from '../Modules/storage.module';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateGuard implements CanActivate 
{
  sm : StorageModule ;
  constructor(private ls : LoginService ,  private router :  Router)
  {

  }

  canActivate(next: ActivatedRouteSnapshot,state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree 
  {
    
    if(this.ls.getUserLoggedIn())
      return true;
    else
     {
       alert("please login first");
       this.router.navigateByUrl('');
       return false;  
     }  

  }

  
}
