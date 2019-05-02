import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'userorder',
  templateUrl: './userorder.component.html',
  styleUrls: ['./userorder.component.css']
})
export class UserorderComponent implements OnInit {

  constructor(public ob:UserService) { 

  }
  orderDetails=[
    {no:1,orderId:123,orderName:"abc",quantity:5,approval:"accepted"},
    {no:2,orderId:123445674567546,orderName:"abfgdc",quantity:2,approval:"rejected"},
    {no:3,orderId:1235,orderName:"abdfgc",quantity:3,approval:"pending"},
    {no:4,orderId:1236,orderName:"asdfbc",quantity:5,approval:"accepted"}
  ]

  ngOnInit() {
    this.myOrder(); 
  }
  myOrder()
  {
    
  }
  orderDetail(orderId)
  {
    this.ob.getOrderDetail(orderId);
  }


 


}
