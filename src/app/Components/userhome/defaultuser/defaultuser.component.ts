import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from 'src/app/Services/user.service';
import { AddItem } from 'src/app/Classes/usertab';
import {FormControl,FormGroup,Validators, AbstractControl, ValidatorFn, ValidationErrors} from '@angular/forms';

@Component({
  selector: 'defaultuser',
  templateUrl: './defaultuser.component.html',
  styleUrls: ['./defaultuser.component.css']
})
export class DefaultuserComponent implements OnInit {

  additem: AddItem={"date":"","pName":"","quantity":0,"from":"","to":""};
  response : Response ;
  add;

  constructor( public ob:UserService) { }
  
  ngOnInit() {

    this.add=new FormGroup({
      date:new FormControl('',[Validators.required]),
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
              this.additem = new AddItem(add.date,add.pName,add.quantity,add.from,add.to);
              alert(this.ob.getAddItem(this.additem));
          }
    }
  



}
