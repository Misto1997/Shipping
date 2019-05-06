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
export class OrdersComponent implements OnInit 
{

  submitted: boolean = true;
  currentOrder: Order = { "order_id": 0, "date": "", "order_name": "", "quantity": 0, "from": "", "to": "", "mobileNo": 0, "approval": "" };
  orders: Order[] = [];

  constructor(private router: Router, private as: AdminService, private os: OrderDetailService, private us: UserService){ }


  ngOnInit() 
  {
    this.showOrders();
  }

//change Approval Status in database i.e. either Accepted or Rejected
  changeStatus(approval: string, order_id: string) 
  {
    if (confirm("Are you sure")) {
      const data = { "order_id": order_id, "approval": approval };

      this.as.changeApproval(data)
        .subscribe((response: Response) => 
        {
          this.showOrders();
        }

        );
    }
    else
      return;
  }


//Show all the orders for admin in the database
  showOrders() 
  {
    this.os.getOrders()
      .subscribe((response: Response) => 
      {
        for (var i = 0; i < response["Tables"].length; i++) 
        {
          this.orders[i] = response["Tables"][i];
        }
      }

      );
  }


//get order of particular order_id
  getOrder(order_id) 
  {
    const data = { "order_id": order_id }
    this.os.orderDetail(data).subscribe((response: Response) => 
    {
      this.currentOrder.order_id = response.json()['order_id'];
      this.currentOrder.approval = response.json()['approval'];
      this.currentOrder.date = response.json()['date'];
      this.currentOrder.order_name = response.json()['order_name'];
      this.currentOrder.quantity = response.json()['quantity'];
      this.currentOrder.from = response.json()['from'];
      this.currentOrder.to = response.json()['to'];
      this.currentOrder.mobileNo = response.json()['mobileNo'];
      this.us.setOrderDetail(this.currentOrder);
      this.router.navigateByUrl('adminHome/orderDetail');
    });
  }

  
}
