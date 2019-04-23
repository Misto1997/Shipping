import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,Validators, AbstractControl} from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent {

  login;
  signUp;

  submitted : boolean = false ;

  disp:boolean=true;
  disp1:boolean=false;
  temp:boolean;

  ngOnInit()
  {
    this.login=new FormGroup({
      loginType:new FormControl('',[Validators.required]),
      cId:new FormControl('',[Validators.required]),
      pass:new FormControl( '',[Validators.required])
      
    });

    this.signUp=new FormGroup({
      fname:new FormControl(""),
      lname:new FormControl(""),
      cId:new FormControl(""),
      pass:new FormControl(""),
      cpass:new FormControl("")
    });
  }

  get f()
  {
       return this.login.controls; 
  }

  

  constructor() { }

  changeValue(val)
  {
    if(val==false)
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

  onSubmit(login)
  {
      this.submitted = true;
      if(this.login.invalid)   
        return;  

      console.log(login);
  }

   

}
