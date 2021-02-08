import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FileServiceService {

  constructor(private http: HttpClient) { }
  uri  = 'http://localhost:4000';
  getProfileImage(filename){
    return this.http.get(`${this.uri}/downloadphotos/`+filename, {responseType: "blob"});
  }

  getProfileImageFromService(filename, callbackSuccess, callBackErr){
    
      this.getProfileImage(filename).subscribe(res=>{
        let fr = new FileReader();
        fr.addEventListener('load', function(){
          callbackSuccess(fr.result);
        }, false)
        if(res)
        fr.readAsDataURL(res);
      }, err=>{
        console.log('greska');
        callBackErr(err);
      })
  }

}
