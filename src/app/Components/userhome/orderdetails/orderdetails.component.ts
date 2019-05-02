import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-orderdetails',
  templateUrl: './orderdetails.component.html',
  styleUrls: ['./orderdetails.component.css']
})
export class OrderdetailsComponent implements OnInit {

  constructor(private ob:UserService) { }
  mobileNo=98676586575;
  orderId=this.ob.orderId;
  orderName="rahul";
  from="chd";
  to="blore";
  quantity="2";
  date="22-33-5434";
  approved="Accepted";

  ngOnInit() {
  }

}
