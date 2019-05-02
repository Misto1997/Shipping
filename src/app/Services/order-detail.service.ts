import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailService {

  constructor() { }

  orderDetail(orderId)
  {
    if(orderId==12345)
     return true;
    else
     return false;
  }

  getOrders() : Observable<any>
  {
    return ;
  }
}
