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

  orders : Order[];
  ngOnInit() 
  {
    this.showOrders();
  }


  changeStatus(approval : string )
  {
    console.log(approval);
    if(confirm("Are you sure"))
    {
      this.submitted = false ;
      const data = {"order_id" : 123 , "approval": approval};
      //console.log(data);
      // this.as.changeApproval(data)
      //        .subscribe((response:Response)=>
      //                                        {
      //                                          console.log(response.json());
      //                                        }

      //                  );   
    }
    else
      return;
  }

  showOrders()
  {
    this.os.getOrders()
            .subscribe((response:Response)=>
                                            {
                                              // this.orders = response.json();
                                              console.log(response);
                                            }

                      );    
  }

}
