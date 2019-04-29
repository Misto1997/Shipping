import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from  '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { UserhomeComponent } from './Components/userhome/userhome.component';
import { FooterComponent } from './Components/footer/footer.component';
import { UsercontactComponent } from './Components/userhome/usercontact/usercontact.component';
import { AdminhomeComponent } from './Components/adminhome/adminhome.component';
import { OrdersComponent } from './Components/adminhome/orders/orders.component';
import { ProfileComponent } from './Components/adminhome/profile/profile.component';
import { AddEmployeeComponent } from './Components/adminhome/add-employee/add-employee.component';
import { DeleteUserComponent } from './Components/adminhome/delete-user/delete-user.component';
import { LogoutComponent } from './Components/adminhome/logout/logout.component';
import { NgxBarcodeModule } from 'ngx-barcode';
import { GenCodeComponent } from './Components/adminhome/gen-code/gen-code.component';
import { UserorderComponent } from './Components/userhome/userorder/userorder.component';
import { UserprofileComponent} from './Components/userhome/userprofile/userprofile.component';
import { OrderdetailsComponent } from './Components/userhome/orderdetails/orderdetails.component';
import { DefaultuserComponent } from './Components/userhome/defaultuser/defaultuser.component';
import {LoginService} from './Services/login.service';
import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserhomeComponent,
    FooterComponent,
    UsercontactComponent,
    AdminhomeComponent,
    OrdersComponent,
    ProfileComponent,
    AddEmployeeComponent,
    DeleteUserComponent,
    LogoutComponent,
    GenCodeComponent,
    UserorderComponent,
    UserprofileComponent,
    OrderdetailsComponent,
    DefaultuserComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgxBarcodeModule,
    HttpModule ,
    ReactiveFormsModule
    
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
