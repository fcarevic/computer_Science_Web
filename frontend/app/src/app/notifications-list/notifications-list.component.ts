import { Component, OnInit } from '@angular/core';
import { Notification } from '../entities/notification';
import { NotificationType } from '../entities/notification-type';
import { NotificationServiceService } from '../notification-service.service';

@Component({
  selector: 'app-notifications-list',
  templateUrl: './notifications-list.component.html',
  styleUrls: ['./notifications-list.component.css']
})
export class NotificationsListComponent implements OnInit {

  constructor(private notificationService: NotificationServiceService) { }

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

}
