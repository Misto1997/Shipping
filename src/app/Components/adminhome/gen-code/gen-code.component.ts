import { Component, OnInit, Input } from '@angular/core';
import {FormControl,FormGroup,Validators} from '@angular/forms';
import { OrderDetailService } from 'src/app/Services/order-detail.service';
import { Response } from '@angular/http';
import { UserService } from 'src/app/Services/user.service';
import { Order } from 'src/app/Classes/usertab';

@Component({
  selector: 'gen-code',
  templateUrl: './gen-code.component.html',
  styleUrls: ['./gen-code.component.css']
})
export class GenCodeComponent implements OnInit 
{
  constructor(private os:OrderDetailService , private us : UserService) 
  {}


 disp:boolean=false;
 currentOrder :  Order;
 order : FormGroup;
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
        this.disp = false;
        const data = {"order_id": order.orderId}
        this.os.orderDetail(data).subscribe((response:Response)=>
                                            {
                                              this.currentOrder = response.json(); 
                                              //console.log(this.currentOrder);
                                              this.us.setOrderDetail(this.currentOrder);
                                              this.disp = true ;
                                            }
                                            );

        //this.us.setOrderDetail(order.orderId);
        

        // if( )
        //  {
        //    this.disp=true;
        //    //order ;
           
        //  }
        //  else
        //  {
        //    this.disp=false;
        //  }
             
      }
  }




}
