import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/rx';
import { LoginUser, User } from '../Classes/user';
import { SessionService } from './session.service';
import { Connectivity } from '../Classes/Connectivity';



@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url: string = Connectivity.getUrl() ;
  headerDict = Connectivity.getHeaders();
  

  constructor(private http: Http, public ss: SessionService) { }

  //LOGIN
  getUser(user: LoginUser): Observable<any> 
  {
    return this.http.post( this.url + "login/", JSON.stringify(user), {headers: new Headers(this.headerDict)} ).map((response: any)=>response);
  }

  //SIGNUP
  postUser(user: User): Observable<any> 
  {
    return this.http.post( this.url + "signUp/user/", JSON.stringify(user), {headers: new Headers(this.headerDict)} ).map((response: any)=>response);
  }

}
