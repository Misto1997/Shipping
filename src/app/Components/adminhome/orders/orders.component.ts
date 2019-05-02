import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/Services/admin.service';
import { Router } from '@angular/router';
import { OrderDetailService } from 'src/app/Services/order-detail.service';
import { Order } from 'src/app/Classes/usertab';

@Component({
  selector: 'orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  submitted : boolean = true;
  constructor( public router:Router, public as:AdminService , private os : OrderDetailService)
  { }

  orders : Order[] = [] ;
  ngOnInit() 
  {
    this.showOrders();
  }


  changeStatus(approval : string  , order_id : string)
  {
    console.log(approval);
    if(confirm("Are you sure"))
    {
      const data = { "order_id" : order_id , "approval": approval };

      this.as.changeApproval(data)
             .subscribe((response:Response)=>
                                             {
                                               console.log(response.json()["Status"]);
                                               this.showOrders();
                                             }
                                             
                        );   
    }
    else
      return;
  }

  showOrders()
  {
    this.os.getOrders()
            .subscribe((response:Response)=>
                                            {                                      
                                              for(var i=0 ; i< response["Tables"].length ; i++)
                                              {
                                                //response["Tables"][i]["mobileNo"] =parseInt(response["Tables"][i]["mobileNo"]);
                                                //response["Tables"][i]["order_id"] =parseInt(response["Tables"][i]["order_id"]);
                                                //response["Tables"][i]["quantity"] =parseInt(response["Tables"][i]["quantity"]);
                                                //console.log( response["Tables"][i]); 
                                                this.orders[i] = response["Tables"][i] ; 
                                              }
                                              //console.log(this.orders);
                                              
                                            }

                      );    
  }

}
