import { Injectable } from '@angular/core';
import { AdminService } from './admin.service';
import { UserService } from './user.service';
import { LocalStorage } from '@ngx-pwa/local-storage';

@Injectable({
  providedIn: 'root'
})
export class SessionService {


  private mobileNo : number ;
  //private userLoggedIn :  boolean ;

  constructor(private as : AdminService , private us  : UserService,protected localStorage: LocalStorage )
  {
  }

  ngOnInit()
  {
  }

  

 
  //getter and setter for current session of user or employee
  setuserLoggedIn(loginData) : void 
  {
    localStorage.setItem('userLogin','true');
    localStorage.setItem('mobileNo', loginData.mobileNo);
   
    //this.mobileNo = loginData.mobileNo ;
  }
  getCurrentUser() : string
  {
    
    return localStorage.getItem('mobileNo') ;
    
  } 

  //get login status
  getUserLoggedIn()
  {
    //return this.userLoggedIn;
    return localStorage.getItem('userLogin');
  }
  
  setUserLoggedOut()
  {
    //this.mobileNo = 0  ;
    localStorage.setItem('mobileNo','0');
    localStorage.setItem('userLogin','false');
    //this.userLoggedIn= false;
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

