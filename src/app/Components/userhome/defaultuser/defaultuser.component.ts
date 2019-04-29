import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from 'src/app/Services/user.service';
import { AddItem } from 'src/app/Classes/usertab';

@Component({
  selector: 'defaultuser',
  templateUrl: './defaultuser.component.html',
  styleUrls: ['./defaultuser.component.css']
})
export class DefaultuserComponent implements OnInit {
  additem: AddItem={"date":"","name":"","quantity":0,"from":"","to":""};
  response : Response ;
  
  constructor( public ob:UserService) { }

  ngOnInit() {

    
  }
  addItem(date,name,quantity,from,to){
   this.additem = new AddItem(date,name,quantity,from,to);
      
  //  this.ob.getUser(this.additem)
  //  .subscribe((response:Response)=>console.log("working"),
  //             (error)=>console.log("Record with this id doesnt exitst")
  //             )   
   
    console.log(this.ob.getAddItem(this.additem));
  }
  



}
