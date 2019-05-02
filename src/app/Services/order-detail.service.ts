import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../Classes/admintab';
import { Headers ,  Http} from '@angular/http';


@Injectable({
  providedIn: 'root'
})
export class OrderDetailService {

  constructor(private http:Http) 
  { }

  url:string="http://localhost:5000/";
  orderDetail(orderId)
  {
    if(orderId==12345)
     return true;
    else
     return false;
  }

  getOrders() : Observable<any>
  {
    return this.http.get(this.url+"showOrders/").map((response:any)=>response.json());
  }
}
