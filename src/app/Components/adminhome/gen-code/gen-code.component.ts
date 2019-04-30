import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,Validators} from '@angular/forms';
import { OrderDetailService } from 'src/app/Services/order-detail.service';
import { Response } from '@angular/http';

@Component({
  selector: 'gen-code',
  templateUrl: './gen-code.component.html',
  styleUrls: ['./gen-code.component.css']
})
export class GenCodeComponent implements OnInit {

  constructor(public ob:OrderDetailService) { }
 disp:boolean=false;
 order;
  ngOnInit() {

    this.order=new FormGroup({
      orderId:new FormControl('',[Validators.required])    
  })
}

  orderDetail(order)
  {
    if(this.order.invalid)   
        {
          alert("Enter Order Id..");
          return; 
        }
      else
      {
        if(this.ob.orderDetail(order.orderId)==true)
         {
           this.disp=true;
         }
         else
         {
           this.disp=false;
         }
             
      }
  }




}
