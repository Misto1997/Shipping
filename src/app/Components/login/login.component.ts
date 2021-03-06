import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, ValidatorFn, ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/Services/login.service';
import { LoginUser, User } from 'src/app/Classes/user';
import { Response } from '@angular/http';
import { SessionService } from 'src/app/Services/session.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent 
{
  login: FormGroup;
  signUp: FormGroup;
  loginSubmit: boolean = false;
  signUpSubmit: boolean = false;
  captchaVal: boolean = true;
  seq :  string ;
  disp: boolean = true;
  disp1: boolean = false;
  temp: boolean;
  luser: LoginUser = { "mobileNo": 0, "pass": "", "type": "" };
  suser: User = { "name": "", "email": "", "mobileNo": 0, "age": 0, "address": "", "password": "" };
  response: Response;

  constructor(private router: Router, private ls: LoginService, private ss: SessionService) { }

  ngOnInit() 
  {
    this.ss.setUserLoggedOut();

    if (this.captchaVal == true)
      this.call();
    this.login = new FormGroup({
      loginType: new FormControl('', [Validators.required]),
      cId: new FormControl('', [Validators.required]),
      pass: new FormControl('', [Validators.required]),
      captchaValue: new FormControl('')

    },
      {
        validators: [this.captchaCheck]
      }
    );

    this.signUp = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]+')]),
      email: new FormControl('', [Validators.required, Validators.email]),
      cId: new FormControl('', [Validators.required, Validators.pattern('[6-9]{1}[0-9]{9}')]),
      age: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      pass: new FormControl('', [Validators.required, Validators.minLength(6), Validators.pattern('[a-zA-Z]+[@_]{1}[0-9]+')]),
      cpass: new FormControl('', [Validators.required])


    },
      {
        validators: [this.confirmPass , this.ageVal ]
      }
    );
  }


  //Login Submit button
  onLoginSubmit(login) 
  {
    this.loginSubmit = true;
    if (this.login.invalid)
        return;
    else 
    {
      this.luser = new LoginUser(login.cId, login.pass, login.loginType);

      this.ls.getUser(this.luser)
        .subscribe((response: Response) => 
        {
          if (response.json()["Status"] === "true") 
          {
            this.ss.setuserLoggedIn(this.luser);
            this.router.navigateByUrl(login.loginType + 'Home');
          }
          else
            alert(response.json()["Status"]);
        }
        );
    }
     
  }


  //SignUp Submit button
  onSignUpSubmit(signUp) 
  {
    this.signUpSubmit = true;
    if (this.signUp.invalid)
      return;
    else 
    {
      this.suser = new User(signUp.name, signUp.email, signUp.cId, signUp.age, signUp.address, signUp.pass);

      this.ls.postUser(this.suser)
        .subscribe((response: Response) => 
        {

          if (response.json()["Status"] === "true") 
          {
            this.ss.setuserLoggedIn(this.suser);
            this.router.navigateByUrl('userHome');

          }
          else
            alert(response.json()["Status"]);
        }
        );
      this.router.navigateByUrl("");
    }

  }


  //Captcha Number Genereator
  call() 
  {
    this.seq = (Math.floor(Math.random() * 10000) + 10000).toString().substring(1);
  }

  //Switcher of login and signup form
  changeValue(val : boolean) 
  {
    if (val == false) 
    {
      this.disp1 = true;
      this.disp = false;
      this.signUpSubmit = false;
    }
    else 
    {
      this.disp1 = false;
      this.disp = true;
      this.loginSubmit = false;
    }
  }

  // login and signup FormControl getters
  get loginPush() 
  {
    return this.login.controls;
  }
  get signUpPush() 
  {
    return this.signUp.controls;
  }




  //VALIDATORS ----------------------------------------------------------------------------------------------------------------------------------------------------  

  captchaCheck: ValidatorFn = (control: FormGroup): ValidationErrors | null => 
  {
    const captcha = control.get('captchaValue');
    if (this.seq === captcha.value) 
    {
      return null;
    }
    else 
    {
      captcha.setErrors({ 'misMatch': true });
      return;
    }
  }

  confirmPass: ValidatorFn = (control: FormGroup): ValidationErrors | null => 
  {
    const pass = control.get('pass');
    const cpass = control.get('cpass');

    if (pass.value === cpass.value)
      return null;
    else 
    {
      cpass.setErrors({ 'noMatch': true });
      return;
    }
  }

  ageVal: ValidatorFn = (control: FormGroup): ValidationErrors | null => 
  {
    const age = control.get('age');

    if (!(age.value < 18 || age.value > 52))
      return null;
    else 
    {
      age.setErrors({ 'ageVal': true });
      return;
    }
  }
  
}