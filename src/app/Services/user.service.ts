import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Response} from '@angular/http/src/static_response';
import {Observable} from 'rxjs';
import 'rxjs/rx';
import {AddItem} from '../Classes/usertab';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  url:string="http://localhost:5000/";

  constructor(private ob:Http) { }

  getAddItem(user : AddItem) : string
  {
    // return this.ob.get(this.url+"login/userHome"+ user.date+"/"+user.name+"/"+user.quantity+ user.from+"/"+user.to).map((response:any)=>response)
    console.log(user);
    return "gfdgf";

  }
  
  

}
