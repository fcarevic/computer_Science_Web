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
      this.activatedRoute.url.subscribe(value=>{
        this.subject= value[2].path;
        this.getAllSubjectNotifications(this.subject);       
      })
   
  }
  subject:String;

  notifications=[]

  getAllSubjectNotifications(subject){
      this.subjectService.getAllSubjectNotifications(subject).subscribe((notif:any)=>{
              this.notifications= notif.notifications;
      })

  }
  
  updateNotification(notification){

  }

  deleteNotification(notification){

  }
}
