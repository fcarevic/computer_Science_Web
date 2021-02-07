import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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
}
