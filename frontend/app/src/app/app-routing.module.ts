import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NotificationInsertComponent } from './notification-insert/notification-insert.component';
import { NotificationUpdateComponent } from './notification-update/notification-update.component';
import { NotificationsListComponent } from './notifications-list/notifications-list.component';
import { RegisterStudentComponent } from './register-student/register-student.component';
import { ScienceRComponent } from './science-r/science-r.component';
import { StudentInsertComponent } from './student-insert/student-insert.component';
import { StudentUpdateComponent } from './student-update/student-update.component';
import { SubjectInfoDetailsComponent } from './subject-info-details/subject-info-details.component';
import { SubjectInfoInsertComponent } from './subject-info-insert/subject-info-insert.component';
import { SubjectInfoUpdateComponent } from './subject-info-update/subject-info-update.component';
import { SubjectLabDetailsComponent } from './subject-lab-details/subject-lab-details.component';
import { SubjectLabUpdateComponent } from './subject-lab-update/subject-lab-update.component';
import { SubjectListComponent } from './subject-list/subject-list.component';
import { SubjectMaterialInsertComponent } from './subject-material-insert/subject-material-insert.component';
import { SubjectMaterialListComponent } from './subject-material-list/subject-material-list.component';
import { SubjectNotificationInsertComponent } from './subject-notification-insert/subject-notification-insert.component';
import { SubjectNotificationUpdateComponent } from './subject-notification-update/subject-notification-update.component';
import { SubjectNotificationsComponent } from './subject-notifications/subject-notifications.component';
import { SubjectProjectDetailsComponent } from './subject-project-details/subject-project-details.component';
import { SubjectProjectUpdateComponent } from './subject-project-update/subject-project-update.component';
import { SyllabusDetailsComponent } from './syllabus-details/syllabus-details.component';
import { SyllabusInsertComponent } from './syllabus-insert/syllabus-insert.component';
import { SyllabusListComponent } from './syllabus-list/syllabus-list.component';
import { SyllabusUpdateComponent } from './syllabus-update/syllabus-update.component';
import { UniversityProjectInsertComponent } from './university-project-insert/university-project-insert.component';
import { UniversityProjectListComponent } from './university-project-list/university-project-list.component';
import { UniversityProjectUpdateComponent } from './university-project-update/university-project-update.component';
import { ZaposleniDetailsComponent } from './zaposleni-details/zaposleni-details.component';
import { ZaposleniInsertComponent } from './zaposleni-insert/zaposleni-insert.component';
import { ZaposleniListComponent } from './zaposleni-list/zaposleni-list.component';
import { ZaposleniUpdateComponent } from './zaposleni-update/zaposleni-update.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'home', component:HomepageComponent},
  {path: 'registerstudent', component: StudentInsertComponent},
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
  {path: 'subject/lab/update/:code', component: SubjectLabUpdateComponent},
  {path: 'subject/lab/info/:code', component:SubjectLabDetailsComponent},
  {path: 'subject/project/info/:code', component:SubjectProjectDetailsComponent},
  {path: 'subject/project/update/:code', component:SubjectProjectUpdateComponent},
  {path: 'student/insert', component: StudentInsertComponent},
  {path: 'student/info/update/:username', component: StudentUpdateComponent},
  {path: 'subject/syllabus/insert/:code', component: SyllabusInsertComponent },
  {path: 'subject/syllabus/update', component: SyllabusUpdateComponent },
  {path: 'subject/syllabus/list/:code', component: SyllabusListComponent},
  {path: 'subject/syllabus/details', component: SyllabusDetailsComponent},
  {path: 'subject/department/:code', component: SubjectListComponent},
  {path: 'projects/insert', component: UniversityProjectInsertComponent },
  {path: 'projects', component: UniversityProjectListComponent },
  {path: 'projects/update/:id', component: UniversityProjectUpdateComponent },
  {path: 'science/researches', component: ScienceRComponent},
  {path: 'science/projects', component: UniversityProjectListComponent},
  {path: 'password/change', component: ChangePasswordComponent}
  
    

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
