import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,Validators, AbstractControl, ValidatorFn, ValidationErrors} from '@angular/forms';
import { UserService } from 'src/app/Services/user.service';
import { ContactUs } from 'src/app/Classes/usertab';

@Component({
  selector: 'usercontact',
  templateUrl: './usercontact.component.html',
  styleUrls: ['./usercontact.component.css']
})
export class UsercontactComponent implements OnInit {

  contact;
  contactus: ContactUs={"name":"","email":"","pNumber":0,"msg":""};

  constructor(public ob:UserService) { }

  ngOnInit() {

    this.contact=new FormGroup({
      name:new FormControl('',[Validators.required]),
      email:new FormControl('',[Validators.required]),
      pNumber:new FormControl( '',[Validators.required]),
      msg:new FormControl('',[Validators.required]) } );
  }

  contactUs(contact)
    {
        if(this.contact.invalid)   
          {
            alert("All Fields Are Mandatory...");
            return;
          }  
        else
          {
            this.contactus = new ContactUs(contact.name,contact.email,contact.pNumber,contact.msg);
            alert(this.ob.contactUs(this.contactus));
            this.contact.reset();
          }
    }

}
