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
import { NotificationUpdateComponent } from './notification-update/notification-update.component';
import { NotificationInsertComponent } from './notification-insert/notification-insert.component';
import { ZaposleniInsertComponent } from './zaposleni-insert/zaposleni-insert.component';
import { ZaposleniUpdateComponent } from './zaposleni-update/zaposleni-update.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { FileSelectDirective, FileUploadModule } from 'ng2-file-upload';
import { SubjectNotificationsComponent } from './subject-notifications/subject-notifications.component';
import { SubjectNotificationInsertComponent } from './subject-notification-insert/subject-notification-insert.component';
import { SubjectNotificationUpdateComponent } from './subject-notification-update/subject-notification-update.component';

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
    NotificationUpdateComponent,
    NotificationInsertComponent,
    ZaposleniInsertComponent,
    ZaposleniUpdateComponent,
    ContactDetailsComponent,
    SubjectNotificationsComponent,
    SubjectNotificationInsertComponent,
    SubjectNotificationUpdateComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FileUploadModule
  ],
  exports:[
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
