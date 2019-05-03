import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';
import { Order } from 'src/app/Classes/usertab';
import { OrderDetailService } from 'src/app/Services/order-detail.service';
import { User } from 'src/app/Classes/user';

@Component({
  selector: 'app-orderdetails',
  templateUrl: './orderdetails.component.html',
  styleUrls: ['./orderdetails.component.css']
})
export class OrderdetailsComponent implements OnInit {

  constructor(private os:OrderDetailService , private us : UserService) 
  {
    this.currentOrder = this.us.getOrderDetail();
    //console.log(this.currentOrder);
   }

  currentOrder : Order ; 

  ngOnInit()
  {
   
  }



}
