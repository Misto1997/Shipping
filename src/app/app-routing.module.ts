import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component'
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { UsercontactComponent } from './usercontact/usercontact.component';
import { AddEmployeeComponent } from './adminhome/add-employee/add-employee.component'
import { DeleteUserComponent } from './adminhome/delete-user/delete-user.component';
import { LogoutComponent } from './adminhome/logout/logout.component';
import { OrdersComponent } from './adminhome/orders/orders.component';
import { ProfileComponent } from './adminhome/profile/profile.component';



const routes: Routes =
 [
    { path : ""  , component : LoginComponent},
    { path : "homepage" , component : AdminhomeComponent ,                   //, canActivate : [AuthenticateGuard] ,
      children : [
                    { path : 'orders' ,  component : OrdersComponent} , 
                    { path : 'logout' ,  component : LogoutComponent} , 
                    { path : 'delUser' , component : DeleteUserComponent},
                    { path : 'profile' ,  component : ProfileComponent },
                 ]
    }
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
