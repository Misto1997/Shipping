import { Injectable } from '@angular/core';

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
}
