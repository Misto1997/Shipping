import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Headers ,  Http} from '@angular/http';
import { Connectivity } from '../Classes/Connectivity';


@Injectable({
  providedIn: 'root'
})
export class OrderDetailService {

  constructor(private http:Http) { }

  url: string = Connectivity.getUrl() ;
  headerDict = Connectivity.getHeaders();
  
  //show order details of particular order_id
  orderDetail(data) : Observable<any>
  {
    return this.http.post(this.url+"showDetails/order", JSON.stringify(data) , { headers : new Headers(this.headerDict) } ).map((response:any)=>response) ;
  }


  //show all the orders in db
  getOrders() : Observable<any>
  {
    return this.http.get(this.url+"showOrders/").map((response:any)=>response.json());
  }
}
