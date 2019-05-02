import { Injectable } from '@angular/core';
import { Headers ,  Http} from '@angular/http';
import {Response} from '@angular/http/src/static_response';
import {Observable} from 'rxjs';
import 'rxjs/rx';
import {LoginUser, User} from '../Classes/user';



@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url:string="http://localhost:5000/";


   headerDict = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Access-Control-Allow-Headers': 'Content-Type',
  }
  

  constructor(private http:Http) { }

  getUser(user : LoginUser) : Observable<any>
  {
    
    //return this.http.get(this.url+"login/"+ user.type+"/"+user.mobileNo+"/"+user.pass).map((response:any)=>response)
    return this.http.post(this.url+"login/" , JSON.stringify(user) , { headers : new Headers(this.headerDict) }).map((response:any)=>response);
  }

   postUser(user : User ) : Observable<any>
  {

    //console.log(JSON.stringify(user));
    return this.http.post(  this.url+"signUp/user/", JSON.stringify(user) , { headers : new Headers(this.headerDict) , } ).map((response:any)=>response);
  }

  

}
