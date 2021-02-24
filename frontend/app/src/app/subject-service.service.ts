import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { File, SubjectInfo, SubjectLab, SubjectNotification, SubjectProject, SubjectSyllabus } from './entities/Subject';

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
  getAllInfos(){
    return this.http.get(`${this.uri}/subject/info` );
  }

  insertInfo(info: SubjectInfo) {
    return this.http.post(`${this.uri}/subject/info/insert`, { info });
  }

  getInfo(code: string) {
    return this.http.get(`${this.uri}/subject/info/` + code);
  }
  getSubjectInfoForProfessor(username: string){
    return this.http.get(`${this.uri}/subject/professor/info/` +username);
  }
  getSubjectInfoForApplicant(username: string){
    return this.http.get(`${this.uri}/subject/applicant/info/` +username);
  }

  updateInfo(code:string, info:SubjectInfo){
    return this.http.post(`${this.uri}/subject/info/update`, {code, info});
  }

/**************** MATERIALS */
  uploadMaterial(code: string, type:string, file:File){
    return this.http.post(`${this.uri}/subject/`  +  type + '/materials/insert', {code, file});
  }
  deleteMaterial(code:string, type:string, file:File){
    return this.http.post(`${this.uri}/subject/`+ type + '/materials/delete', {code, file});
  }

  getAllMaterials(code:string){
      return this.http.get(`${this.uri}/subject/materials/`+code);
  }

  /***********LAB */

  updateLab(code:string, lab: SubjectLab){
    return this.http.post(`${this.uri}/subject/lab/update`, {code, lab});
  }

  getLab(code:string){
    return this.http.get(`${this.uri}/subject/lab/`+code);
  }
  /*************PROJECT */

  getProjectInfo(code:string){
    return this.http.get(`${this.uri}/subject/project/`+code);
  }

  updateProjectInfo(code:string, project:SubjectProject){
    return this.http.post(`${this.uri}/subject/project/update`, {code, project});
  }

  /*****************SYLLABUS */

  insertSyllabus(code:string, list:SubjectSyllabus){
    return this.http.post(`${this.uri}/subject/syllabus/insert`, {code, list});
  }
  updateSyllabus(code:string, list:SubjectSyllabus, newlist:SubjectSyllabus){
    return this.http.post(`${this.uri}/subject/syllabus/update`, {code, list, newlist});
  }
  addStudentSyllabus(code:string, list: SubjectSyllabus, username: string){
    return this.http.post(`${this.uri}/subject/syllabus/addstudent`, {code, username, list});
  }
  removeStudentSyllabus(code:string, list: SubjectSyllabus, username: string){
    return this.http.post(`${this.uri}/subject/syllabus/removestudent`, {code, username, list});
  }


  getAllSyllabus(code: string){
    return this.http.get( `${this.uri}/subject/syllabus/` +code);
  }

  /**************APPLICANTS */
  insertStudentApplicant(code: string, username:string){
    return this.http.post(`${this.uri}/subject/applicant/insert`, {code, username})
  }
  removeStudentApplicant(code: string, username:string){
    return this.http.post(`${this.uri}/subject/applicant/remove`, {code, username})
  }
  getAllApplicants(code:string){
    return this.http.get(`${this.uri}/subject/applicant/` + code);
  }

  /*************EXAMS AND SOLUTIONS */

  getAllQuestions(code:string){
    return this.http.get(`${this.uri}/subject/questions/`+code);
  }
  
  getAllSolutions(code:string){
    return this.http.get(`${this.uri}/subject/solutions/`+code);
  }
}
