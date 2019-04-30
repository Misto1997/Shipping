import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orderdetails',
  templateUrl: './orderdetails.component.html',
  styleUrls: ['./orderdetails.component.css']
})
export class OrderdetailsComponent implements OnInit {

  constructor() { }
  mobileNo=98676586575;
  orderId=4634567645;
  orderName="rahul";
  from="chd";
  to="blore";
  quantity="2";
  date="22-33-5434";
  status="approved";
  ngOnInit() {
  }

}
