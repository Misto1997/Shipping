import { Injectable } from '@angular/core';
import { Employee } from '../Classes/admintab';
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

  //Admin Profile
  getAdmin(mobileNo) : Observable<any>
  {
    return this.http.post(this.url+"showDetails/admin" , JSON.stringify(mobileNo) , { headers : new Headers(this.headerDict) }).map((response:any)=>response);
  }

  //Change the approval state of order
  changeApproval(data) : Observable<any>
  {
    //console.log(data);
    return this.http.post(this.url+"approval/" , JSON.stringify(data) , { headers : new Headers(this.headerDict) }).map((response:any)=>response);
  }

  //delete user 
  removeUser(data) : Observable<any>
  {
   
    return this.http.delete(this.url+"remove/user/"+data["deleteId"]).map((response:any)=>response.json())
    
  }
  getAddEmp(user : Employee ) : string
  {
    
    console.log(user);
    return "gfdgf";

  }

  



}
