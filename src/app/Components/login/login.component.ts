import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,Validators, AbstractControl, ValidatorFn, ValidationErrors} from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/Services/login.service';
import { LoginUser , User } from 'src/app/Classes/user';
import { ReactiveFormsModule  } from '@angular/forms';
import { Response } from '@angular/http';


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
  captchaVal : boolean=true;
  seq;
  disp:boolean=true;
  disp1:boolean=false;
  temp:boolean;
  luser: LoginUser={"mobileNo":0,"pass":"","type":""};
  suser: User={"name":"","email":"","mobileNo":0,"age":0,"address":"","password":""};
  response : Response ;

  constructor(public router:Router,public ob:LoginService )
  {}
  
  ngOnInit()
  {
    
    if(this.captchaVal==true)
      this.call();
    this.login=new FormGroup({
      loginType:new FormControl('',[Validators.required]),
      cId:new FormControl('',[Validators.required]),
      pass:new FormControl( '',[Validators.required]),
      captchaValue:new FormControl('')
      
    },
    {
      validators : [ this.captchaCheck]
    }
    );

    this.signUp=new FormGroup({
        name:new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z ]+')]),
      email:new FormControl('',[Validators.required,Validators.email]),
      cId:new FormControl('',[Validators.required,Validators.pattern('[6-9]{1}[0-9]{9}')]),
      age:new FormControl('',[Validators.required]),
      address:new FormControl('',[Validators.required]),
      pass:new FormControl('',[Validators.required,Validators.minLength(6),Validators.pattern('[a-zA-Z]+[@_]{1}[0-9]+')]),
      cpass:new FormControl('',[Validators.required])
     
      
    },
    { 
      validators : [ this.confirmPass]
   }
    );
  }



  onLoginSubmit(login)
  {
      this.loginSubmit = true;
      if(this.captchaVal==true)
        this.call();
      if(this.login.invalid)   
        return; 
      else
      {
    
            this.luser = new LoginUser(login.cId,login.pass,login.loginType);

            this.ob.getUser(this.luser)
            .subscribe((response:Response)=>
                                            {
                                              if(response.json()["Status"]==="true")
                                                this.router.navigateByUrl(login.loginType+'Home');
                                              else
                                                alert(response.json()["Status"]);
                                            }

                      );             
      }

  }

  onSignUpSubmit(signUp)
  {
      this.signUpSubmit = true;
      if(this.signUp.invalid)   
        return;
      else
      {
        this.suser = new User(signUp.name , signUp.email , signUp.cId  , signUp.age , signUp.address , signUp.pass );
        
        this.ob.postUser(this.suser)
            .subscribe((response:Response)=>
                                            {
                                              
                                              if(response.json()["Status"]=== "true" )
                                              { 
                                                console.log(response.json()["Status"])
                                                this.router.navigateByUrl("/userHome");
                                              } 
                                              else
                                                alert(response.json()["Status"]);
                                            }
                      )  
      }         
    
  }


//Captcha Number Genereator
 call()
  {
    
       this.seq = (Math.floor(Math.random() * 10000) + 10000).toString().substring(1);
       //console.log(this.seq);
    
  }

//Form Switcher
  changeValue(val)
  {
    if(val==false)
      {
        this.disp1=true;
        this.disp=false;
        this.signUpSubmit = false;
      }
    else
      {
        this.disp1=false;
        this.disp=true;
        this.loginSubmit = false;
      }
  }

   get loginPush()
  {
       return this.login.controls; 
  }
  get signUpPush()
  {
       return this.signUp.controls; 
  }

//VALIDATORS ----------------------------------------------------------------------------------------------------------------------------------------------------  
 
  captchaCheck : ValidatorFn = (control: FormGroup): ValidationErrors | null => 
  {
    const captcha = control.get('captchaValue');
      if( this.seq === captcha.value )
         {
           //console.log(captcha.value);
           return  null ;
         }
      else
      {
        captcha.setErrors({ 'misMatch' : true});
          return  ;
      }  
  }

  confirmPass : ValidatorFn = (control: FormGroup): ValidationErrors | null => 
  {
    const pass = control.get('pass');
    const cpass = control.get('cpass');

      if( pass.value === cpass.value )
         return  null ;
      else
      {
          cpass.setErrors({ 'noMatch' : true});
          return  ;
      }  
  }
   
}
