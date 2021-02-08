import { Component, OnInit } from '@angular/core';
import { Notification } from '../entities/notification';
import { NotificationType } from '../entities/notification-type';
import { NotificationServiceService } from '../notification-service.service';

@Component({
  selector: 'app-notification-insert',
  templateUrl: './notification-insert.component.html',
  styleUrls: ['./notification-insert.component.css']
})
export class NotificationInsertComponent implements OnInit {

  constructor(private notificationService:NotificationServiceService) { }

  ngOnInit(): void {
      this.notificationService.getAllNotificationTypes().subscribe((types:NotificationType[])=>{
        this.notificationTypes=types;
    })
  }
  notification= new Notification();
  notificationTypes: NotificationType[]
  insertNotification(){
    this.notificationService.insertNotification(this.notification).subscribe((res)=>{
      alert(JSON.stringify(res));
    })
  }
  

}
