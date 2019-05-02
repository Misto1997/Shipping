import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReactiveFormsModule  } from '@angular/forms';
import { Response } from '@angular/http';
import { AdminService } from 'src/app/Services//admin.service';
import { AddEmp } from 'src/app/Classes/admintab';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  emp : AddEmp = { "mobileNo": 0,"name":"","age" : 0,"password":"","email":"","address":""};

  constructor(public router:Router,public as:AdminService) { }

  ngOnInit() 
  {
    this.showDetails();
  }

  showDetails()
  {
    const data = {"mobileNo" : 123};
    this.as.getAdmin(data)
            .subscribe((response:Response)=>
                                            {
                                              this.emp = response.json();
                                            }

                      );    

   
  }
}
