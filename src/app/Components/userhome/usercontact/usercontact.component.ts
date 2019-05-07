import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/user.service';
import { ContactUs } from 'src/app/Classes/usertab';

@Component({
  selector: 'usercontact',
  templateUrl: './usercontact.component.html',
  styleUrls: ['./usercontact.component.css']
})
export class UsercontactComponent implements OnInit 
{

  contact : FormGroup ;
  contactus: ContactUs = { "name": "", "email": "", "pNumber": 0, "msg": "" };

  constructor(private us: UserService) { }

  ngOnInit() 
  {
    this.contact = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      pNumber: new FormControl('', [Validators.required]),
      msg: new FormControl('', [Validators.required])
    });
  }

  contactUs(contact) 
  {
    if (this.contact.invalid) 
    {
      alert("All Fields Are Mandatory...");
      return;
    }
    else 
    {
      this.contactus = new ContactUs(contact.name, contact.email, contact.pNumber, contact.msg);
      alert(this.us.contactUs(this.contactus));
      this.contact.reset();
    }
  }

}
