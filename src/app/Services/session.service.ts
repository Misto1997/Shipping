import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService 
{
  constructor() { }

  ngOnInit() 
  {
  }


  //setter for current session of user or employee
  setuserLoggedIn(loginData): void 
  {
    localStorage.setItem('userLogin', 'true');
    localStorage.setItem('mobileNo', loginData.mobileNo);
  }

  //get current logged in mobileNo
  getCurrentUser(): string 
  {
    return localStorage.getItem('mobileNo');
  }

  //get login status
  getUserLoggedIn()
  {
    return localStorage.getItem('userLogin');
  }

  //LOGOUT
  setUserLoggedOut() 
  {
    localStorage.setItem('mobileNo', '0');
    localStorage.setItem('userLogin', 'false');
  }


}

