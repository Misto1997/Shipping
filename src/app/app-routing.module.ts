import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component'
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { UsercontactComponent } from './userhome/usercontact/usercontact.component';
import { AddEmployeeComponent } from './adminhome/add-employee/add-employee.component'
import { DeleteUserComponent } from './adminhome/delete-user/delete-user.component';
import { LogoutComponent } from './adminhome/logout/logout.component';
import { OrdersComponent } from './adminhome/orders/orders.component';
import { ProfileComponent } from './adminhome/profile/profile.component';
import { GenCodeComponent } from './adminhome/gen-code/gen-code.component';
import { UserorderComponent } from './userhome/userorder/userorder.component';
import { UserprofileComponent} from './userhome/userprofile/userprofile.component';
import { UserhomepageComponent} from './userhome/userhomepage/userhomepage.component';

const routes: Routes =
 [
    { path : ""  , component : LoginComponent},
    { path : "adminHome" , component : AdminhomeComponent ,                   //, canActivate : [AuthenticateGuard] ,
      children : [
                    { path : "orders" ,  component : OrdersComponent} , 
                    { path : "logout" ,  component : LogoutComponent} , 
                    { path : "delUser" , component : DeleteUserComponent},
                    { path : "profile" ,  component : ProfileComponent },
                    { path : "addEmp" ,  component : AddEmployeeComponent } ,
                    { path : "genCode" ,  component : GenCodeComponent } 
                 ]
    },
    { path : "userHome" , component : UserhomeComponent ,                   //, canActivate : [AuthenticateGuard] ,
      children : [
                    { path : "userContact" ,  component :  UsercontactComponent } , 
                    { path : "logout" ,  component : LogoutComponent} ,
                    { path : "userOrder" ,  component : UserorderComponent},
                    { path : "userProfile" ,  component : UserprofileComponent},
                    { path : "userHomepage" , component : UserhomepageComponent}
                 ]
    }
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
