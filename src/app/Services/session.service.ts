import { Injectable } from '@angular/core';
import { User } from '../Classes/user';
import { Employee } from '../Classes/admintab';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  private currentUser : User | Employee ;
  
  constructor()
  {

  }

  setCurrentUser(currentUser : User | Employee ): void
  {
    this.currentUser = currentUser ;
  }

  getCurrentUser() : User | Employee
  {
    return this.currentUser ;
  }

}
