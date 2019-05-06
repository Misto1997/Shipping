import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/Classes/usertab';
import { Router } from '@angular/router';
import { OrderDetailService } from 'src/app/Services/order-detail.service';
import { UserService } from 'src/app/Services/user.service';
import { SessionService } from 'src/app/Services/session.service';

@Component({
  selector: 'userorder',
  templateUrl: './userorder.component.html',
  styleUrls: ['./userorder.component.css']
})
export class UserorderComponent implements OnInit 
{

  orders: Order[] = [];
  currentOrder: Order = { "order_id": 0, "date": "", "order_name": "", "quantity": 0, "from": "", "to": "", "mobileNo": 0, "approval": "" };

  constructor(private router: Router, private os: OrderDetailService, private us: UserService, private ss: SessionService) { }


  ngOnInit() 
  {
    this.showUserOrders();
  }

//show order of current User Loggedin
  showUserOrders() 
  {
    this.us.getUserOrder(+this.ss.getCurrentUser())
      .subscribe((response: Response) => 
      {
        for (var i = 0; i < response.json()["Tables"].length; i++) 
        {
          this.orders[i] = response.json()["Tables"][i];
        }
      }
      );
  }


  //show order Details of particular order
  orderDetail(order_id) 
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
      this.router.navigateByUrl('userHome/orderDetail');
    }
    );
  }

}
