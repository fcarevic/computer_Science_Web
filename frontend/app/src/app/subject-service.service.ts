import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SubjectInfo, SubjectNotification } from './entities/Subject';

@Injectable({
  providedIn: 'root'
})
export class SubjectServiceService {

  constructor(private http: HttpClient) { }
  uri = 'http://localhost:4000';

  getAllSubjectNotifications(code) {
    return this.http.get(`${this.uri}/subject/notifications/` + code);
  }

  insertNotification(notification: SubjectNotification, code: string) {
    return this.http.post(`${this.uri}/subject/notifications/insert`, { code, notification });
  }

  deleteNotification(notification: SubjectNotification, code: string) {
    return this.http.post(`${this.uri}/subject/notifications/delete`, { notification, code });
  }

  updateNotification(oldNotification: SubjectNotification, notification: SubjectNotification, code: string) {
    return this.http.post(`${this.uri}/subject/notifications/update`, { oldNotification, notification, code });
  }

  /******INFO */

  insertInfo(info: SubjectInfo) {
    return this.http.post(`${this.uri}/subject/info/insert`, { info });
  }

  getInfo(code: string) {
    return this.http.get(`${this.uri}/subject/info/` + code);
  }

  updateInfo(code:string, info:SubjectInfo){
    return this.http.post(`${this.uri}/subject/info/update`, {code, info});
  }


}
