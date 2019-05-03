import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/Classes/usertab';
import { FormControl,FormGroup,Validators, AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';
import {formatDate} from '@angular/common';
import { UserService } from 'src/app/Services/user.service';
import { User } from 'src/app/Classes/user';
import { LoginService } from 'src/app/Services/login.service';
import { SessionService } from 'src/app/Services/session.service';

@Component({
  selector: 'defaultuser',
  templateUrl: './defaultuser.component.html',
  styleUrls: ['./defaultuser.component.css']
})
export class DefaultuserComponent implements OnInit {

  order: Order  ;
  response : Response ;
  add: FormGroup;
  myDate=formatDate(new Date(), 'MM/dd/yyyy','en');
  currentUser : User ;

  constructor( private os :UserService , private ls : LoginService , public ss : SessionService) 
  { 
  
  }
 
  ngOnInit() 
  {
    console.log(this.ss.getCurrentUser());
   
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
              console.log(this.currentUser.mobileNo);
              this.order  = new Order(this.myDate,add.pName,add.quantity,add.from,add.to,9464552572);
             // console.log(this.order);
              this.os.addOrder(this.order)
                                          .subscribe((response:Response)=>
                                            {
                                              alert(response.json()["Status"]);
                                            }

                      );    
          }
    }
  



}
