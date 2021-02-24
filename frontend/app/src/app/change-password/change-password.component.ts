import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentServiceService } from '../student-service.service';
import { ZaposleniService } from '../zaposleni.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  constructor(private router: Router,private zaposleniService: ZaposleniService, private studentService: StudentServiceService) { }
  MESSAGE_DANGER_CONFIRM_PASSWORD = { style: "danger", msg: "Neispravna ponovljena lozinka" };
  MESSAGE_DANGER_CONFIRM_OLD_PASSWORD = { style: "danger", msg: "Neispravna ponovljena stara lozinka" };
 
  ngOnInit(): void {
    this.typee = localStorage.getItem('tipFirst');
    
    let username= localStorage.getItem('userFirst');
    if(this.typee=='Student'){
      this.getStudent(username)
    } else if(this.typee=='Professor'){
      this.getProfessor(username);
    }
  }
  getStudent(username){
    this.studentService.getStudentByUsername(username).subscribe((res:any)=>{
      this.user=res;
    })
  }
  getProfessor(username){
    this.zaposleniService.getZaposleniByUsername(username).subscribe((res:any)=>{
      this.user=res;
    })
  }
  typee='';
  message=null;
  user:any;
  newPassword='';
  oldPassword='';
  confirmPassword='';
   confirm(){
      if(this.confirmPassword!= this.newPassword){
        this.message=this.MESSAGE_DANGER_CONFIRM_PASSWORD;
        return;
      }
      if(this.oldPassword!= this.user.password){
        this.message= this.MESSAGE_DANGER_CONFIRM_OLD_PASSWORD
        return;
      }
      this.user.firstLogin=false;
      this.user.password= this.newPassword;

      if(this.typee=='Student'){
        this.updateStudent();


      }else if(this.typee=='Professor'){
        this.updateProfessor();

      }

   }

   updateProfessor(){
     this.zaposleniService.updateZaposleni(this.user).subscribe(res=>{
       this.router.navigate(['/home'])
        
     })
   }
   updateStudent(){
    this.studentService.updateStudent(this.user).subscribe(res=>{
     
      this.router.navigate(['/home'])
       
    })
  }
}
