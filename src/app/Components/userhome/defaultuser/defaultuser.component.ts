import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/Classes/usertab';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { formatDate } from '@angular/common';
import { UserService } from 'src/app/Services/user.service';

import { SessionService } from 'src/app/Services/session.service';

@Component({
  selector: 'defaultuser',
  templateUrl: './defaultuser.component.html',
  styleUrls: ['./defaultuser.component.css']
})
export class DefaultuserComponent implements OnInit 
{

  order: Order;
  response: Response;
  add: FormGroup;
  myDate = formatDate(new Date(), 'MM/dd/yyyy', 'en');
  currentUser: number;

  constructor(private os: UserService , private ss: SessionService) { }

  ngOnInit() 
  {
    this.currentUser = +this.ss.getCurrentUser();

    this.add = new FormGroup({
      date: new FormControl({ value: 'myDate', disabled: true }),
      pName: new FormControl('', [Validators.required]),
      quantity: new FormControl('', [Validators.required]),
      from: new FormControl('', [Validators.required]),
      to: new FormControl('', [Validators.required])
    });

  }

  addItem(add) 
  {
    if (this.add.invalid) 
    {
      alert("All Fields Are Mandatory...");
      return;
    }
    else 
    {
      this.order = new Order(this.myDate, add.pName, add.quantity, add.from, add.to, +this.ss.getCurrentUser());
      this.os.addOrder(this.order)
        .subscribe((response: Response) => 
        {
          alert(response.json()["Status"]);
          this.add.reset();
        }
        );
    }
  }

  
}
