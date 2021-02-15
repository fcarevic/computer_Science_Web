import { Component, OnInit } from '@angular/core';
import { Student } from '../entities/Student';
import { StudentServiceService } from '../student-service.service';

@Component({
  selector: 'app-student-insert',
  templateUrl: './student-insert.component.html',
  styleUrls: ['./student-insert.component.css']
})
export class StudentInsertComponent implements OnInit {
  MESSAGE_OK = { style: "success", msg: "Uspesno azurirano" };
  MESSAGE_DANGER_EXIST_USER = { style: "danger", msg: "Korisnicko ime zauzeto" };
  MESSAGE_DANGER = { style: "danger", msg: "Neuspeh" };
  constructor(private studentService: StudentServiceService) { }
  student = new Student();
  types= ['d', 'm', 'p'];
  statuses = ['Aktivan', 'Neaktivan'];
  ngOnInit(): void {
  }
 message=null;

 checkUsername(){
   if(this.student.username.length!=9){
     this.message = { style: "danger", msg: "Korisnicko ime nesipravan format1 " };
     return false;
   }
   if( this.student.username.charAt(1) != this.student.ime.charAt(0).toLowerCase()){
    this.message = { style: "danger", msg: "Korisnicko ime nesipravan format2" };
    return false;
   }
   if( this.student.username.charAt(0) != this.student.prezime.charAt(0).toLowerCase()){
    this.message = { style: "danger", msg: "Korisnicko ime nesipravan format3" };
    return false;
   }
   if( this.student.username.substring(2,6) != this.student.indeks.substring(0,4)){
    this.message = { style: "danger", msg: "Korisnicko ime nesipravan format4" };
    return false;
   }
   if( this.student.username.substring(6,8) != this.student.indeks.substring(7)){
    this.message = { style: "danger", msg: "Korisnicko ime nesipravan format5" };
    return false;
   }
   if(this.student.username.substring(8) != this.student.tip){
    this.message = { style: "danger", msg: "Korisnicko ime nesipravan format6" };
    return false;
   }
   return true;
 }

 checkRestFields(){
   if(!this.student.password || this.student.password==''){
    this.message = { style: "danger", msg: "Nije uneta lozinka" };
    return false;
   }

   if(!this.student.ime || this.student.ime==''){
    this.message = { style: "danger", msg: "Nije uneto ime" };
    return false;
   }
   if(!this.student.prezime || this.student.prezime==''){
    this.message = { style: "danger", msg: "Nije uneto prezime" };
    return false;
   }
   if(!this.student.password || this.student.password==''){
    this.message = { style: "danger", msg: "Nije uneta lozinka" };
    return false;
   }
   if(!this.student.tip || this.student.tip==''){
    this.message = { style: "danger", msg: "Nije unet tip studija" };
    return false;
   }
   if(!this.student.status || this.student.status==''){
    this.message = { style: "danger", msg: "Nije unet status" };
    return false;
   }
   if(!this.student.indeks || this.student.indeks=='' || this.student.indeks.length!=9){
    this.message = { style: "danger", msg: "Indeks pogresan format" };
    return false;
   }

   return true;
 }

 
  insertStudent(){
    if(!this.checkUsername() || !this.checkRestFields()) return;
      this.studentService.insetStudent(this.student).subscribe((res:any)=>{
          if(res.status && res.status=='not_ok'){
            this.message=this.MESSAGE_DANGER_EXIST_USER;
          } else this.message=this.MESSAGE_OK;
      })
  }
}
