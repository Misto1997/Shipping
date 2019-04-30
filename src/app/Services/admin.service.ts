import { Injectable } from '@angular/core';
import { AddEmp } from '../Classes/admintab';
import { Headers ,  Http} from '@angular/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:Http) { }

  url:string="http://localhost:5000/";

  headerDict = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Access-Control-Allow-Headers': 'Content-Type',
  }

  getAdmin(mobileNo) : Observable<any>
  {
    return this.http.post(this.url+"showDetails/admin" , JSON.stringify(mobileNo) , { headers : new Headers(this.headerDict) }).map((response:any)=>response)
  }

  getAddEmp(user : AddEmp) : string
  {
    
    console.log(user);
    return "gfdgf";

  }

  DeleteUser(deleteId)
  {
    if(deleteId==12345)
     return true;
    else
     return false;
  }
}
