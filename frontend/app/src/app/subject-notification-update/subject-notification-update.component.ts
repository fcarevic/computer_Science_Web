import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SubjectNotification } from '../entities/Subject';
import { SubjectServiceService } from '../subject-service.service';

@Component({
  selector: 'app-subject-notification-update',
  templateUrl: './subject-notification-update.component.html',
  styleUrls: ['./subject-notification-update.component.css']
})
export class SubjectNotificationUpdateComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private subjectService: SubjectServiceService) { }

  ngOnInit(): void {
    this.activatedRoute.url.subscribe(val=>{
       this.subject = val[3].path;
    })

    this.oldNotification = JSON.parse(localStorage.getItem('subjectNotification'));
    this.notification = JSON.parse(localStorage.getItem('subjectNotification'));
  }
  subject: string;
  oldNotification: SubjectNotification;
  notification: SubjectNotification;


  MESSAGE_OK = { style: "success", msg: "Uspesno azurirano" };
  MESSAGE_DANGER = { style: "danger", msg: "Neuspeh" };
  message= null;

  updateNotification(){
    this.subjectService.updateNotification(this.oldNotification, this.notification, this.subject).subscribe((res:any)=>{
      
      if(res){
          localStorage.setItem('subjectNotification', JSON.stringify(this.notification));
              this.message=this.MESSAGE_OK;
          }else this.message=this.MESSAGE_DANGER;
    })
  }

}
