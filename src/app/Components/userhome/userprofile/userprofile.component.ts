import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReactiveFormsModule  } from '@angular/forms';
import { Response } from '@angular/http';
import { AdminService } from 'src/app/Services//admin.service';
import { Employee } from 'src/app/Classes/admintab';
import { User } from 'src/app/Classes/user';
import { UserService } from 'src/app/Services/user.service';


@Component({
  selector: 'userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit 
{
  user : User = { "mobileNo": 0,"name":"","age" : 0,"password":"","email":"","address":""};

  constructor(private router:Router , public us :UserService ) { }

  ngOnInit() 
  {
    this.showDetails();
  }

  showDetails()
  {
    const data = {"mobileNo" : 9464552572};
    this.us.getUser(data)
            .subscribe((response:Response)=>
                                            {
                                              //console.log(response.json());
                                              this.user = response.json();
                                            }

                      );    
  }


}
