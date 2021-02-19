import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminServiceService } from '../admin-service.service';
import { StudentServiceService } from '../student-service.service';
import { ZaposleniService } from '../zaposleni.service';

@Component({
  selector: 'login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {

  constructor(private studentService : StudentServiceService, private zaposleniService: ZaposleniService, 
    private adminService: AdminServiceService, private router:Router
    ) { }
    MESSAGE_WRONG_USERNAME = { style: "danger", msg: "Username nije pronadjen" };
    MESSAGE_WRONG_PASSWORD = { style: "danger", msg: "Sifra nije pronadjena" };

  username : string;
  password : string;
  typee: string;
  user:any=null;
  message=null;

  ngOnInit(): void {
    if(localStorage.getItem('tip')){
      this.typee=localStorage.getItem('tip');
      this.username = localStorage.getItem('user');
      this.init2();
    }
  }

  callback(res:any){
    
    if(res && res.password){
        if(res.password== this.password ){
         
          localStorage.setItem('user', this.username);
          localStorage.setItem('tip', this.typee)
          this.user=res; 
          location.reload();


        } else this.message=this.MESSAGE_WRONG_PASSWORD
    } else this.message=this.MESSAGE_WRONG_USERNAME
  }
 logout(){ 
   this.user=null;
   localStorage.removeItem('user');
   localStorage.removeItem('tip');
 }

 init2(){
  if(this.typee=='Admin'){
    this.adminService.getAdminByUsername(this.username).subscribe((res:any)=>this.user=res)
  } else if(this.typee=='Professor'){
      this.zaposleniService.getZaposleniByUsername(this.username).subscribe((res:any)=>this.user=res)
  } else this.studentService.getStudentByUsername(this.username).subscribe((res:any)=>this.user=res);
  
 }
  login(){
     
    if(this.typee=='Admin'){
      this.adminService.getAdminByUsername(this.username).subscribe(res=> this.callback(res))
    } else if(this.typee=='Professor'){
        this.zaposleniService.getZaposleniByUsername(this.username).subscribe(res=> this.callback(res))
    } else this.studentService.getStudentByUsername(this.username).subscribe(res=> this.callback(res));
    
  }
}
