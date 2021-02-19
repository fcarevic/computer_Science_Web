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
}
