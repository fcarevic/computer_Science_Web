import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {
  uri = 'http://localhost:4000'
  constructor(private http:HttpClient) { }

  getAllAdmins(){
    return this.http.get(`${this.uri}/admins`)
  }

  getAdminByUsername(username:string){
    return this.http.get(`${this.uri}/admins/`+username)
  }

  /*************UNIVERSITY PROJECT ROUTES */

  getAllUniversityProjects(){
    return this.http.get(`${this.uri}/projects`)
  }
  getUniversityProjectsById(id){
    return this.http.get(`${this.uri}/projects/` +id)
  }

  insertUniversityProjects(project){
    return this.http.post(`${this.uri}/projects/insert`, {project} )
  }
  
  updateUniversityProjects(project){
    return this.http.post(`${this.uri}/projects/update`, {project} )
  }
  deleteUniversityProjects(project){
    return this.http.post(`${this.uri}/projects/delete`, {project} )
  }

}
