import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'userorder',
  templateUrl: './userorder.component.html',
  styleUrls: ['./userorder.component.css']
})
export class UserorderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
 order(phone)
 {
   alert(phone);
 }
}
