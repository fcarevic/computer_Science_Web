import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ZaposleniService {
   uri = 'http://localhost:4000';
  constructor(private http: HttpClient) { }


  getAllZaposleni(){
      return this.http.get(`${this.uri}/zaposleni`);
  }

  getZaposleniByUsername(username){
    return this.http.get(`${this.uri}/zaposleni/`+username);
  }
}
