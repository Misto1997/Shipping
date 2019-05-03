import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './Components/login/login.component'
import { AdminhomeComponent } from './Components/adminhome/adminhome.component';
import { UserhomeComponent } from './Components/userhome/userhome.component';
import { UsercontactComponent } from './Components/userhome/usercontact/usercontact.component';
import { AddEmployeeComponent } from './Components/adminhome/add-employee/add-employee.component'
import { DeleteUserComponent } from './Components/adminhome/delete-user/delete-user.component';
import { LogoutComponent } from './Components/adminhome/logout/logout.component';
import { OrdersComponent } from './Components/adminhome/orders/orders.component';
import { ProfileComponent } from './Components/adminhome/profile/profile.component';
import { GenCodeComponent } from './Components/adminhome/gen-code/gen-code.component';
import { UserorderComponent } from './Components/userhome/userorder/userorder.component';
import { UserprofileComponent} from './Components/userhome/userprofile/userprofile.component';
import { DefaultuserComponent} from './Components/userhome/defaultuser/defaultuser.component';
import { OrderdetailsComponent} from './Components/userhome/orderdetails/orderdetails.component';
import { AuthenticateGuard } from './Authenticator/authenticate.guard';

const routes: Routes =
 [
    { path : ""  , component : LoginComponent},
    { path : "adminHome" , component : AdminhomeComponent , canActivate : [ AuthenticateGuard ] ,
      children : [
                    { path : "orders" ,  component : OrdersComponent} , 
                    { path : "logout" ,  component : LogoutComponent} , 
                    { path : "delUser" , component : DeleteUserComponent},
                    { path : "" ,  component : ProfileComponent },  
                    { path : "addEmp" ,  component : AddEmployeeComponent } ,
                    { path : "genCode" ,  component : GenCodeComponent } ,
                    { path : "orderDetail" , component : OrderdetailsComponent}
                 ]
    },
    { path : "userHome" , component : UserhomeComponent , canActivate : [ AuthenticateGuard ] ,
      children : [
                    { path : "userContact" ,  component :  UsercontactComponent } , 
                    { path : "logout" ,  component : LogoutComponent} ,
                    { path : "userOrder" ,  component : UserorderComponent},                  
                    { path : "userProfile" ,  component : UserprofileComponent},
                    { path : "" , component : DefaultuserComponent},
                    { path : "orderDetail" , component : OrderdetailsComponent}
                 ]
    }
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
