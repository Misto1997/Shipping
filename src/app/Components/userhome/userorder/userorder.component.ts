import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/Classes/usertab';
import { Router } from '@angular/router';
import { OrderDetailService } from 'src/app/Services/order-detail.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'userorder',
  templateUrl: './userorder.component.html',
  styleUrls: ['./userorder.component.css']
})
export class UserorderComponent implements OnInit {

  orders : Order[] = [] ;

  constructor( public router:Router  , private os : OrderDetailService , private us : UserService) 
  { 

  }
  ngOnInit() 
  {
    this.showOrders();
  }



  showOrders()
  {
    this.os.getOrders()
            .subscribe((response:Response)=>
                                            {                                    ;
                                              for(var i=0 ; i< response["Tables"].length ; i++)
                                              {
                                                this.orders[i] = response["Tables"][i] ; 
                                              }
                                              //console.log(this.orders);
                                              
                                            }

                      );    
  }


  orderDetail(order_id)
  {
    this.us.getOrderDetail(order_id);
  }


 


}
