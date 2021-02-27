import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SubjectNotification } from '../entities/Subject';
import { SubjectServiceService } from '../subject-service.service';


@Component({
  selector: 'app-subject-notifications',
  templateUrl: './subject-notifications.component.html',
  styleUrls: ['./subject-notifications.component.css']
})
export class SubjectNotificationsComponent implements OnInit {

  constructor(private router:Router, private activatedRoute: ActivatedRoute, private subjectService: SubjectServiceService) { }

  ngOnInit(): void {
    this.typee= localStorage.getItem('tip') 
    this.dateCompare = new Date( Date.now()- 7*24*60*60*1000);
    
      this.activatedRoute.url.subscribe(value=>{
        this.subject= value[2].path;
        this.getAllSubjectNotifications(this.subject);       
      }) 
   
  }
  subject:string;
  typee='';

  notifications=[]
  dateCompare:Date;

  getAllSubjectNotifications(subject){
      this.subjectService.getAllSubjectNotifications(subject).subscribe((notif:any)=>{
              this.notifications= notif.notifications;
              this.notifications.forEach(el=>{
                el.date = new Date(el.date)
              })
              this.notifications.sort((el1,el2)=>{
                if (el1.date> el2.date) return -1;
                else  if (el1.date< el2.date) return 1;
                else return 0;
              })
      })

  }
  
  updateNotification(notification){
     localStorage.setItem('subjectNotification', JSON.stringify(notification));
      this.router.navigate(['/subject/notification/update/'+this.subject]);
  }

  deleteNotification(notification){
    this.subjectService.deleteNotification(notification, this.subject).subscribe(res=>{ 
          location.reload();
    })
    

  }
}
