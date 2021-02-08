import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Notification } from '../entities/notification';
import { NotificationType } from '../entities/notification-type';
import { NotificationServiceService } from '../notification-service.service';

@Component({
  selector: 'app-notifications-list',
  templateUrl: './notifications-list.component.html',
  styleUrls: ['./notifications-list.component.css']
})
export class NotificationsListComponent implements OnInit {

  constructor(private notificationService: NotificationServiceService, private router:Router) { }

  ngOnInit(): void {
    this.getAllNotificationTypes();
    this.getAllNotifications();
  }

  notificationTypes: NotificationType[]
  notifications: Notification[]
  allNotifications: Notification[]
  getAllNotificationTypes() {
    this.notificationService.getAllNotificationTypes().subscribe((notifTypes: NotificationType[]) => {
      this.notificationTypes = notifTypes;

    })
  }

  getAllNotifications() {
    this.notificationService.getAllNotifications().subscribe((notif: Notification[]) => {
      notif.sort((el1, el2)=>{
        if(el1.date>el2.date) return -1;
        else if(el1.date<el2.date) return 1;
        else return 0;
      })
      this.notifications = notif;
      this.allNotifications = notif;
    });
  }

  filter(name) {
    if ("All".includes(name)) {
      this.notifications = this.allNotifications;
      return;
    }
    this.notifications = [];
    this.allNotifications.forEach(el => {
      if (el.type.includes(name)) this.notifications.push(el);
    })
  }

  updateNotification(notification){
    localStorage.setItem('notificationPIA',JSON.stringify(notification));
    this.router.navigate(['notifications/update']);
  }

  deleteNotification(notification){
    
    this.notificationService.deleteNotification(notification).subscribe(res=>{
     location.reload();
    })
  }

}
