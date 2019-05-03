import { Injectable } from '@angular/core';
import { Headers ,  Http} from '@angular/http';
import {Response} from '@angular/http/src/static_response';
import {Observable} from 'rxjs';
import 'rxjs/rx';
import {LoginUser, User} from '../Classes/user';
import { UserService } from './user.service';
import { AdminService } from './admin.service';
import { Employee } from '../Classes/admintab';



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

  constructor(private http:Http , private us : UserService , private as  : AdminService , public sm : StorageModule )
  {
    
  }

  //LOGIN
  getUser(user : LoginUser) : Observable<any>
  {
    return this.http.post(this.url+"login/" , JSON.stringify(user) , { headers : new Headers(this.headerDict) }).map((response:any)=>response);
  }

  //SIGNUP
   postUser(user : User ) : Observable<any>
  {
    return this.http.post(  this.url+"signUp/user/", JSON.stringify(user) , { headers : new Headers(this.headerDict) , } ).map((response:any)=>response);
  }

  currentUser : User | Employee ;
  userLoggedIn :  boolean = false;
  
  //store current User or Admin Details

  setuserLoggedIn(loginData) : void 
  {
    const data = { "mobileNo" : loginData.mobileNo };

    this.userLoggedIn = true;
    if(loginData.type === "admin")
    {
      this.as.getAdmin(data)
            .subscribe((response:Response)=>
                                            {                                              
                                              this.currentUser = response.json();
                                              this.sm.setCurrentUser(this.currentUser)
                                            }
                      );  
    }  
    else
    {
      this.us.getUser(data)
            .subscribe((response:Response)=>
                                            {                                              
                                              this.currentUser = response.json();
                                              this.sm.setCurrentUser(this.currentUser);
                                            }
                      );  
    }                                          
   
  }

  getUserLoggedIn()
  {
    return this.userLoggedIn;
  }

  setUserLoggedOut()
  {
    this.sm.setCurrentUser(null);
    this.userLoggedIn= false;
  }
}
