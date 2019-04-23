import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from  '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { FooterComponent } from './footer/footer.component';
import { UsercontactComponent } from './usercontact/usercontact.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserhomeComponent,
    FooterComponent,
    UsercontactComponent,
    AdminhomeComponent,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
