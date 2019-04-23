import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit 
{

  display : boolean  ;
  constructor() { }

  ngOnInit() 
  {
    this.display = false ;
  }

  deleteId(id)
  {
     if(id>0)
     {
      console.log(id);
      if(confirm("Are you sure ?"))
        this.display = true;
      else
      {
        id = null ;
        return ; 
      }  
     }
     else
      this.display =  false ;
  }
}
