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
import { SubjectInfoDetailsComponent } from './subject-info-details/subject-info-details.component';
import { SubjectInfoInsertComponent } from './subject-info-insert/subject-info-insert.component';
import { SubjectInfoUpdateComponent } from './subject-info-update/subject-info-update.component';
import { SubjectMaterialInsertComponent } from './subject-material-insert/subject-material-insert.component';
import { SubjectMaterialListComponent } from './subject-material-list/subject-material-list.component';
import { SubjectLabUpdateComponent } from './subject-lab-update/subject-lab-update.component';
import { SubjectLabDetailsComponent } from './subject-lab-details/subject-lab-details.component';
import { SubjectProjectDetailsComponent } from './subject-project-details/subject-project-details.component';
import { SubjectProjectUpdateComponent } from './subject-project-update/subject-project-update.component';
import { StudentInsertComponent } from './student-insert/student-insert.component';
import { StudentUpdateComponent } from './student-update/student-update.component';
import { SyllabusInsertComponent } from './syllabus-insert/syllabus-insert.component';
import { SyllabusDetailsComponent } from './syllabus-details/syllabus-details.component';
import { SyllabusUpdateComponent } from './syllabus-update/syllabus-update.component';
import { SyllabusListComponent } from './syllabus-list/syllabus-list.component';
import { VerticalMenuComponent } from './vertical-menu/vertical-menu.component';
import { VerticalMenuProffesorComponent } from './vertical-menu-proffesor/vertical-menu-proffesor.component';
import { VerticalMenuAdminComponent } from './vertical-menu-admin/vertical-menu-admin.component';
import { SubjectListComponent } from './subject-list/subject-list.component';
import { VerticalMenuStudentComponent } from './vertical-menu-student/vertical-menu-student.component';
import { UniversityProjectListComponent } from './university-project-list/university-project-list.component';
import { UniversityProjectInsertComponent } from './university-project-insert/university-project-insert.component';
import { UniversityProjectUpdateComponent } from './university-project-update/university-project-update.component';
import { ScienceRComponent } from './science-r/science-r.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { SubjectExamListComponent } from './subject-exam-list/subject-exam-list.component';

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
    SubjectInfoDetailsComponent,
    SubjectInfoInsertComponent,
    SubjectInfoUpdateComponent,
    SubjectMaterialInsertComponent,
    SubjectMaterialListComponent,
    SubjectLabUpdateComponent,
    SubjectLabDetailsComponent,
    SubjectProjectDetailsComponent,
    SubjectProjectUpdateComponent,
    StudentInsertComponent,
    StudentUpdateComponent,
    SyllabusInsertComponent,
    SyllabusDetailsComponent,
    SyllabusUpdateComponent,
    SyllabusListComponent,
    VerticalMenuComponent,
    VerticalMenuProffesorComponent,
    VerticalMenuAdminComponent,
    SubjectListComponent,
    VerticalMenuStudentComponent,
    UniversityProjectListComponent,
    UniversityProjectInsertComponent,
    UniversityProjectUpdateComponent,
    ScienceRComponent,
    ChangePasswordComponent,
    SubjectExamListComponent,
    
    
    
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
