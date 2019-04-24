import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'userorder',
  templateUrl: './userorder.component.html',
  styleUrls: ['./userorder.component.css']
})
export class UserorderComponent implements OnInit {
flag=false
  constructor() { }

  ngOnInit() {
  }
 order(phone)
 {
   
   let a=12345
   if(a==phone)
   {
     this.flag=true
   }
   else
    this.flag=false
 }
}
