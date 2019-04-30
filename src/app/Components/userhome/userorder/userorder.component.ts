import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'userorder',
  templateUrl: './userorder.component.html',
  styleUrls: ['./userorder.component.css']
})
export class UserorderComponent implements OnInit {
  status:boolean=true;

  constructor(public ob:UserService) { 

  }
  

  ngOnInit() {
    this.myOrder(); 
  }
  myOrder()
  {
    
  }


 


}
