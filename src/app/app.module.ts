import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from  '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { FooterComponent } from './footer/footer.component';
import { UsercontactComponent } from './userhome/usercontact/usercontact.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { OrdersComponent } from './adminhome/orders/orders.component';
import { ProfileComponent } from './adminhome/profile/profile.component';
import { AddEmployeeComponent } from './adminhome/add-employee/add-employee.component';
import { DeleteUserComponent } from './adminhome/delete-user/delete-user.component';
import { LogoutComponent } from './adminhome/logout/logout.component';
import { NgxBarcodeModule } from 'ngx-barcode';
import { GenCodeComponent } from './adminhome/gen-code/gen-code.component';
import { UserorderComponent } from './userhome/userorder/userorder.component';
import { UserprofileComponent} from './userhome/userprofile/userprofile.component';
import { UserhomepageComponent} from './userhome/userhomepage/userhomepage.component';
import { OrderdetailsComponent } from './userhome/orderdetails/orderdetails.component';


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
    UserhomepageComponent,
    UserprofileComponent,
    OrderdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgxBarcodeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
