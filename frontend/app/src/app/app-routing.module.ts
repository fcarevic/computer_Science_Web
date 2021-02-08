import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NotificationInsertComponent } from './notification-insert/notification-insert.component';
import { NotificationUpdateComponent } from './notification-update/notification-update.component';
import { NotificationsListComponent } from './notifications-list/notifications-list.component';
import { RegisterStudentComponent } from './register-student/register-student.component';
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
  {path: 'contact', component: ContactDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
