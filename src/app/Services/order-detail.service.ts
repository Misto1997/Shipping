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

  headerDict = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Access-Control-Allow-Headers': 'Content-Type',
  }
  
  //show order details of particular order_id
  orderDetail(data) : Observable<any>
  {
    //console.log(JSON.stringify(data));
    return this.http.post(this.url+"showDetails/order", JSON.stringify(data) , { headers : new Headers(this.headerDict) } ).map((response:any)=>response) ;
  }


  //show all the orders in db
  getOrders() : Observable<any>
  {
    return this.http.get(this.url+"showOrders/").map((response:any)=>response.json());
  }
}
