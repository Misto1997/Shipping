import { Injectable } from '@angular/core';
import { AdminService } from './admin.service';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class SessionService {


  private mobileNo : number ;
  private userLoggedIn :  boolean ;

  constructor(private as : AdminService , private us  : UserService )
  {
    this.mobileNo = 0;
    this.userLoggedIn = false ;
  }

  ngOnInit()
  {
  }

  //getter and setter for current session of user or employee
  setuserLoggedIn(loginData) : void 
  {
    this.userLoggedIn = true ;
    this.mobileNo = loginData.mobileNo ;
  }
  getCurrentUser() : number
  {
    return this.mobileNo ;
  } 

  //get login status
  getUserLoggedIn()
  {
    return this.userLoggedIn;
  }
  
  setUserLoggedOut()
  {
    this.mobileNo = 0  ;
    this.userLoggedIn= false;
  }

  // setuserLoggedIn(loginData) : void 
  // {
  //   const data = { "mobileNo" : loginData.mobileNo };

  //   this.userLoggedIn = true;

  //   if(loginData.type === "admin")
  //   {
  //     this.as.getAdmin(data)
  //           .subscribe((response:Response)=>
  //                                           {     
  //                                             console.log(response.json());
  //                                           }
  //                     );  
  //   }  
  //   else
  //   {
  //     this.us.getUser(data)
  //           .subscribe((response:Response)=>
  //                                           {                                              
  //                                             console.log(response.json());
  //                                           }
  //                     );  
  //   }                                          
   
  //   }


}

