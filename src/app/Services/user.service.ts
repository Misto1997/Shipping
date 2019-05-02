import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Response} from '@angular/http/src/static_response';
import {Observable} from 'rxjs';
import 'rxjs/rx';
import { Order } from '../Classes/usertab';
import {ContactUs} from '../Classes/usertab';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  orderId=0;
  url:string="http://localhost:5000/";

  constructor(private ob:Http,public router:Router) { }

  getAddItem(user : Order ) : string
    {
        // return this.ob.get(this.url+"login/userHome"+ user.date+"/"+user.name+"/"+user.quantity+ user.from+"/"+user.to).map((response:any)=>response)
        console.log(user);
        return "Item Added";

    }


  contactUs(contact:ContactUs):string
    {
        console.log(contact);
        return "Thanks for Reaching Us.. we will contact you soon..";
    }

  profile()
    {
        //code here
    }

  myOrder()
    {
        //code here
    }

  getOrderDetail(orderId)
  {
    this.orderId=orderId;
    console.log(orderId);
    this.router.navigateByUrl("userHome/orderDetail");
    
  }
  
  

}
