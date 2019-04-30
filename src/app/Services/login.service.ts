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
  
   requestOptions = {                                                                                                                                                                                 
    headers: new Headers(this.headerDict), 
  };

  constructor(private http:Http) { }

  getUser(user : LoginUser) : Observable<any>
  {
    
    return this.http.get(this.url+"login/"+ user.type+"/"+user.mobileNo+"/"+user.pass).map((response:any)=>response)
  }

   postUser(user : User ) : Observable<any>
  {
    
    //return this.ob.get(this.url+"userSignUp/"+ user.type+"/"+user.mobileNo+"/"+user.pass).map((response:any)=>response);

   // var jsonObj  = { "name":user.name , "emailId":user.emailId , "mobileNo":user.mobileNo , "age":user.age , "address":user.address , "pass":user.pass };
    
    //console.log(jsonObj);
    console.log(JSON.stringify(user));
    return this.http.post(  this.url+"userSignUp/", JSON.stringify(user) , this.requestOptions ).map((response:any)=>response);
    
  }

  

}
