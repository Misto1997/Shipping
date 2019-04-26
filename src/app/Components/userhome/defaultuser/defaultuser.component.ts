import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'defaultuser',
  templateUrl: './defaultuser.component.html',
  styleUrls: ['./defaultuser.component.css']
})
export class DefaultuserComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
   myDate = new Date();
}
