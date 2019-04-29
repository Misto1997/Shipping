import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Response} from '@angular/http/src/static_response';
import {Observable} from 'rxjs';
import 'rxjs/rx';
import {LoginUser, User} from '../Classes/user';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url:string="http://localhost:5000/";

  constructor(private ob:Http) { }

  getUser(user : LoginUser) : Observable<any>
  {
    
    return this.ob.get(this.url+"login/"+ user.type+"/"+user.mobileNo+"/"+user.pass).map((response:any)=>response)
  }

   postUser(user : User ) : Observable<any>
  {
    
    //return this.ob.post(this.url+"userSignUp/"+ user.type+"/"+user.mobileNo+"/"+user.pass).map((response:any)=>response);
    console.log(user);
    return this.ob.post(this.url+"userSignUp/",user).map((response:any)=>response);
    
  }

  

}
