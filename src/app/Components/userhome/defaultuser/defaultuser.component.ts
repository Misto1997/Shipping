import { Component, OnInit } from '@angular/core';

import { UserService } from 'src/app/Services/user.service';
import { AddItem } from 'src/app/Classes/usertab';
import {FormControl,FormGroup,Validators, AbstractControl, ValidatorFn, ValidationErrors} from '@angular/forms';

import {formatDate} from '@angular/common';

@Component({
  selector: 'defaultuser',
  templateUrl: './defaultuser.component.html',
  styleUrls: ['./defaultuser.component.css']
})
export class DefaultuserComponent implements OnInit {

  additem: AddItem={"date":"","pName":"","quantity":0,"from":"","to":"","mobileNo":0 ,"approval":""};
  response : Response ;
  add;
  myDate=formatDate(new Date(), 'MM/dd/yyyy','en');

  constructor( public ob:UserService) { 
    
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
              this.additem = new AddItem(this.myDate,add.pName,add.quantity,add.from,add.to,1234567890);
              alert(this.ob.getAddItem(this.additem));
          }
    }
  



}
