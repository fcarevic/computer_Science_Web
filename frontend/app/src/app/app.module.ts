import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FormsModule} from '@angular/forms';
import { RegisterStudentComponent } from './register-student/register-student.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { NavbarMainComponent } from './navbar-main/navbar-main.component';
import { ZaposleniListComponent } from './zaposleni-list/zaposleni-list.component'
import {HttpClientModule} from '@angular/common/http';
import { ZaposleniDetailsComponent } from './zaposleni-details/zaposleni-details.component';
import { NotificationsListComponent } from './notifications-list/notifications-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponentComponent,
    NavbarMainComponent,
    HomepageComponent,
    RegisterStudentComponent,
    ZaposleniListComponent,
    ZaposleniDetailsComponent,
    NotificationsListComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  exports:[
    NavbarMainComponent,
    LoginComponentComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
