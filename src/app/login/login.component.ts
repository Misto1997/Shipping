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

  loginSubmit : boolean = false ;
  signUpSubmit : boolean = false ;

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
      fname:new FormControl('',[Validators.required]),
      lname:new FormControl('',[Validators.required]),
      cId:new FormControl('',[Validators.required]),
      pass:new FormControl('',[Validators.required]),
      cpass:new FormControl('',[Validators.required])
    });
  }

  get loginPush()
  {
       return this.login.controls; 
  }
  get signUpPush()
  {
       return this.signUp.controls; 
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

  onLoginSubmit(login)
  {
    //sdkjfhgdskjhfdskjhh sdjfhdskjfh kjsdhfkj hsdjkfhdsjk hskdjh es
      this.loginSubmit = true;
      if(this.login.invalid)   
        return; 
      console.log(login);
  }
  onSignUpSubmit(submit)
  {
      this.signUpSubmit = true;
      if(this.signUp.invalid)   
        return;
      console.log(submit);
  }

   

}
