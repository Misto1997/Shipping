import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/Services/admin.service';
import { Router } from '@angular/router';
import { OrderDetailService } from 'src/app/Services/order-detail.service';
import { Order } from 'src/app/Classes/usertab';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  submitted : boolean = true;
  currentOrder : Order = { "order_id":0 ,"date": "" , "order_name" : "" ,"quantity": 0, "from": "","to": "",  "mobileNo": 0 ,"approval": ""};
  orders : Order[] = [] ;

  constructor( public router:Router, public as:AdminService , private os : OrderDetailService , private us : UserService)
  { }

  
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


  getOrder(order_id)
  {
    const data = {"order_id": order_id}
    this.os.orderDetail(data).subscribe((response:Response)=>
                                            {
                                                //console.log(this.currentOrder);
                                                //console.log( response.json()); 
                                                
                                                //console.log(response.json());
   
                                                this.currentOrder.order_id = response.json()['order_id'];
                                                this.currentOrder.approval = response.json()['approval'];
                                                this.currentOrder.date = response.json()['date'];
                                                this.currentOrder.order_name = response.json()['order_name'];
                                                this.currentOrder.quantity = response.json()['quantity'];
                                                this.currentOrder.from = response.json()['from'];
                                                this.currentOrder.to = response.json()['to'];
                                                this.currentOrder.mobileNo = response.json()['mobileNo'];                                              
                                                //console.log(this.currentOrder);
                                                this.us.setOrderDetail(this.currentOrder);
                                                this.router.navigateByUrl('adminHome/orderDetail');
                                            });
                                           
  }

}
