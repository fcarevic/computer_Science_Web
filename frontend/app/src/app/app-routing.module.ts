import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { NotificationsListComponent } from './notifications-list/notifications-list.component';
import { RegisterStudentComponent } from './register-student/register-student.component';
import { ZaposleniDetailsComponent } from './zaposleni-details/zaposleni-details.component';
import { ZaposleniListComponent } from './zaposleni-list/zaposleni-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'home', component:HomepageComponent},
  {path: 'registerstudent', component: RegisterStudentComponent},
  {path: 'employees', component: ZaposleniListComponent},
  {path: 'employees/:id', component: ZaposleniDetailsComponent},
  {path: 'notifications', component: NotificationsListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
