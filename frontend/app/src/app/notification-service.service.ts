import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Notification } from './entities/notification';

@Injectable({
  providedIn: 'root'
})
export class NotificationServiceService {

  constructor(private http : HttpClient) { }
  uri = 'http://localhost:4000';
  getAllNotifications(){
    return this.http.get(`${this.uri}/obavestenja`);
  }

  getAllNotificationTypes(){
    return this.http.get(`${this.uri}/obavestenjatipovi`);
  }

  updateNotification(notification: Notification, oldNotification:Notification){
    return this.http.post(`${this.uri}/obavestenja/update`, {notification, oldNotification});
  }
  insertNotification(notification:Notification){
    return this.http.post(`${this.uri}/obavestenja/insert`, {notification});
  }
  deleteNotification(notification:Notification){
    return this.http.post(`${this.uri}/obavestenja/delete`, {notification});
  }
}
