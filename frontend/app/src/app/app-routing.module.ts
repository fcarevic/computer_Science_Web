import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NotificationInsertComponent } from './notification-insert/notification-insert.component';
import { NotificationUpdateComponent } from './notification-update/notification-update.component';
import { NotificationsListComponent } from './notifications-list/notifications-list.component';
import { RegisterStudentComponent } from './register-student/register-student.component';
import { SubjectInfoDetailsComponent } from './subject-info-details/subject-info-details.component';
import { SubjectInfoInsertComponent } from './subject-info-insert/subject-info-insert.component';
import { SubjectInfoUpdateComponent } from './subject-info-update/subject-info-update.component';
import { SubjectLabUpdateComponent } from './subject-lab-update/subject-lab-update.component';
import { SubjectMaterialInsertComponent } from './subject-material-insert/subject-material-insert.component';
import { SubjectMaterialListComponent } from './subject-material-list/subject-material-list.component';
import { SubjectNotificationInsertComponent } from './subject-notification-insert/subject-notification-insert.component';
import { SubjectNotificationUpdateComponent } from './subject-notification-update/subject-notification-update.component';
import { SubjectNotificationsComponent } from './subject-notifications/subject-notifications.component';
import { ZaposleniDetailsComponent } from './zaposleni-details/zaposleni-details.component';
import { ZaposleniInsertComponent } from './zaposleni-insert/zaposleni-insert.component';
import { ZaposleniListComponent } from './zaposleni-list/zaposleni-list.component';
import { ZaposleniUpdateComponent } from './zaposleni-update/zaposleni-update.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'home', component:HomepageComponent},
  {path: 'registerstudent', component: RegisterStudentComponent},
  {path: 'employees', component: ZaposleniListComponent},
  {path: 'employees/:id', component: ZaposleniDetailsComponent},
  {path: 'employee/insert', component: ZaposleniInsertComponent},
  {path: 'employee/update/:id', component: ZaposleniUpdateComponent},
  {path: 'notifications', component: NotificationsListComponent},
  {path:'notifications/update', component: NotificationUpdateComponent},
  {path:'notifications/insert', component: NotificationInsertComponent},
  {path: 'contact', component: ContactDetailsComponent},
  {path:'subject/notification/insert/:code', component: SubjectNotificationInsertComponent},
  {path:'subject/notification/update/:code', component: SubjectNotificationUpdateComponent},
  {path: 'subject/notifications/:code', component: SubjectNotificationsComponent},
  {path: 'subject/info/insert', component: SubjectInfoInsertComponent},
  {path: 'subject/infos/:id', component: SubjectInfoDetailsComponent},
  {path: 'subject/info/update/:id', component:SubjectInfoUpdateComponent},
  {path: 'subject/material/insert', component: SubjectMaterialInsertComponent},
  {path: 'subject/materials/:code', component: SubjectMaterialListComponent},
  {path: 'subject/lab/update/:code', component: SubjectLabUpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
