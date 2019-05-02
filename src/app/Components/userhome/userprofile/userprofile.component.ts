import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {

  constructor(public ob:UserService) { }

  ngOnInit() {
  }

  emp=[
    {name:"Rahul",mobileNo:8699330119,age:22,email:"rahulrana1997.rr@gmail.com",address:"ajfdsnsjdf nvs.,sdfjlksmdf"}
  ]
  profile()
  {
    //code here
  }


}
