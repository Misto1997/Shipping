import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/Services/admin.service';
import {FormControl,FormGroup,Validators} from '@angular/forms';

@Component({
  selector: 'delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit 
{

  delete;
  constructor(public ob:AdminService) { }

  ngOnInit() 
  {
    this.delete=new FormGroup({
      cId:new FormControl('',[Validators.required])    
  })
  }

  deleteUser(deleteId)
  {
    if(this.delete.invalid)   
        {
          alert("Enter User Id..");
          return; 
        }
      else
      {
        if(this.ob.DeleteUser(deleteId.cId)==true)
         {
           alert("User deleted Successfully");
         }
         else
         {
          alert("User Not Found");
         }
      }
  }
}
