import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,Validators} from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  login;
  ngOnInit()
  {
    this.login=new FormGroup({
      cId:new FormControl(""),
      pass:new FormControl(""),
      loginType:new FormControl("")
    });
  }
  constructor() { }
  disp:boolean=true;
  disp1:boolean=false;
  temp:boolean;

  changeValue(val)
  {
    if(val=false)
      {
        this.disp1=true;
        this.disp=false;
      }
    else
    {
        this.disp1=false;
        this.disp=true;
    }

  }
  onSubmit(myForm)
  {
    console.log(myForm);
  }

}
