import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from './entities/Student';

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {

  constructor(private http: HttpClient) { }
  uri = 'http://localhost:4000';
  insetStudent(student: Student){
    return this.http.post(`${this.uri}/student/insert`, {student});
  }

  updateStudent(student:Student){
    return this.http.post(`${this.uri}/student/info/update`, {student});
  }

  getStudentByUsername(username:string){
    return this.http.get(`${this.uri}/student/info/`+username);
  }
  
}
