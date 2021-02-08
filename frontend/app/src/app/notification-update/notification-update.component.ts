import { Component, OnInit } from '@angular/core';
import { Notification } from '../entities/notification';
import { NotificationType } from '../entities/notification-type';
import { NotificationServiceService } from '../notification-service.service';

@Component({
  selector: 'app-notification-update',
  templateUrl: './notification-update.component.html',
  styleUrls: ['./notification-update.component.css']
})
export class NotificationUpdateComponent implements OnInit {

  constructor(private notificationService: NotificationServiceService) { }

  ngOnInit(): void {
    this.notification=  JSON.parse(localStorage.getItem('notificationPIA'));
    this.oldNotification= JSON.parse(localStorage.getItem('notificationPIA'));
    this.notificationService.getAllNotificationTypes().subscribe((types: NotificationType[])=>{
      this.notificationTypes=types;
    })
  }

  notification: Notification;
  notificationTypes: NotificationType[];
  oldNotification:Notification;

  updateNotification(){
    localStorage.setItem('notificationPIA', JSON.stringify(this.notification));
    this.notificationService.updateNotification(this.notification, this.oldNotification).subscribe((res)=>{
      alert(JSON.stringify(res));
    })
    this.oldNotification=this.notification;
  }

}
