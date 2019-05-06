import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Response } from '@angular/http';
import { AdminService } from 'src/app/Services//admin.service';
import { Employee } from 'src/app/Classes/admintab';
import { SessionService } from 'src/app/Services/session.service';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit 
{

  emp: Employee = { "mobileNo": 0, "name": "", "age": 0, "password": "", "email": "", "address": "" };

  constructor(private router: Router, private as: AdminService, private ss: SessionService) { }

  ngOnInit() 
  {
    this.showDetails();
  }

  //show details of current admin
  showDetails() 
  {
    const data = { "mobileNo": +this.ss.getCurrentUser() };
    this.as.getAdmin(data).subscribe((response: Response)=>this.emp=response.json());
  }


}
