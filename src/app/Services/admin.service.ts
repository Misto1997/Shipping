import { Injectable } from '@angular/core';
import { AddEmp } from '../Classes/admintab';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor() { }

  getAddEmp(user : AddEmp) : string
  {
    
    console.log(user);
    return "gfdgf";

  }
}
