import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/Services/admin.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Response } from '@angular/http';


@Component({
  selector: 'delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit 
{

  delete;
  constructor(private as: AdminService, private router: Router) { }

  ngOnInit() 
  {
    this.delete = new FormGroup({
      deleteId: new FormControl('', [Validators.required])
    })
  }


  deleteUser(deletef ) 
  {
    if (this.delete.invalid) 
    {
      alert("Enter User Id..");
      return;
    }
    else 
    {
      const data = { "deleteId": deletef.deleteId };
      this.as.removeUser(data).subscribe((response: Response)=>alert(response["Status"]));
    }
  }
  
}
