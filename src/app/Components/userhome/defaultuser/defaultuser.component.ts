import { Component, OnInit } from '@angular/core';

import { Order } from 'src/app/Classes/usertab';
import { FormControl,FormGroup,Validators, AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';

import {formatDate} from '@angular/common';

import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'defaultuser',
  templateUrl: './defaultuser.component.html',
  styleUrls: ['./defaultuser.component.css']
})
export class DefaultuserComponent implements OnInit {

  order: Order = {"date":"","order_name":"","quantity":0,"from":"","to":"","mobileNo":0 ,"approval":"" , "order_id":0 };
  response : Response ;
  add: FormGroup;
  myDate=formatDate(new Date(), 'MM/dd/yyyy','en');

  constructor( public os :UserService) { 
    
  }
 
  ngOnInit() {

    this.add=new FormGroup({
      date:new FormControl({value: 'myDate' , disabled :true}),
      pName:new FormControl('',[Validators.required]),
      quantity:new FormControl( '',[Validators.required]),
      from:new FormControl('',[Validators.required]),
      to:new FormControl('',[Validators.required])  } );

  }
   
  addItem(add)
    {
        if(this.add.invalid)   
          {
              alert("All Fields Are Mandatory...");
              return;
          }  
        else
          {
              this.order  = new Order(this.myDate,add.pName,add.quantity,add.from,add.to,9464552572);
              this.os.addOrder(this.order)
                                          .subscribe((response:Response)=>
                                            {
                                              alert(response.json()["Status"]);
                                            }

                      );    
          }
    }
  



}
