import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';
import { Order } from 'src/app/Classes/usertab';

@Component({
  selector: 'app-orderdetails',
  templateUrl: './orderdetails.component.html',
  styleUrls: ['./orderdetails.component.css']
})
export class OrderdetailsComponent implements OnInit 
{
  currentOrder : Order ;

  constructor(private us : UserService) 
  {
    this.currentOrder = this.us.getOrderDetail();
  }

  ngOnInit()
  {
  }

}
