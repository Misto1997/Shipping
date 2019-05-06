import { Component, OnInit } from '@angular/core';
import { SessionService } from 'src/app/Services/session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit 
{
  constructor(private ss: SessionService, private router: Router) { }

  ngOnInit() 
  {
    this.ss.setUserLoggedOut();
    this.router.navigateByUrl('');
  }

}
