import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/rx';
import { Order } from '../Classes/usertab';
import { ContactUs } from '../Classes/usertab';
import { Connectivity } from '../Classes/Connectivity';


@Injectable({
  providedIn: 'root'
})

export class UserService
 {
  private currentOrder: Order;
  url: string = Connectivity.getUrl() ;
  headerDict = Connectivity.getHeaders();

  constructor(private http: Http) { }

  //add a new order
  addOrder(order: Order): Observable<any> 
  {
    return this.http.post(this.url + "addOrder/", JSON.stringify(order), { headers: new Headers(this.headerDict)} ).map((response: any)=>response);;
  }

  //to show User profile
  getUser(mobileNo): Observable<any> 
  {
    return this.http.post(this.url + "showDetails/user", JSON.stringify(mobileNo), { headers: new Headers(this.headerDict) }).map((response: any) => response);
  }
  
  //Contact Us page
  contactUs(contact: ContactUs): string 
  {
    return "Thanks for Reaching Us.. we will contact you soon..";
  }

  //get Order of particular mobileNo
  getUserOrder(mobileNo: number): Observable<any> 
  {
    return this.http.get(this.url + "showUserOrders/" + mobileNo).map((response: any)=>response);
  }

  // getter and setter for OrderDetails page
  setOrderDetail(currentOrder: Order) 
  {
    this.currentOrder = currentOrder;
  }

  getOrderDetail(): Order 
  {
    return this.currentOrder;
  }

}
