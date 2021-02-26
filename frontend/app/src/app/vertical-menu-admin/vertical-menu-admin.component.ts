import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Radnik } from '../entities/radnik';
import { Student } from '../entities/Student';
import { SubjectInfo } from '../entities/Subject';
import { StudentServiceService } from '../student-service.service';
import { SubjectServiceService } from '../subject-service.service';
import { ZaposleniService } from '../zaposleni.service';

@Component({
  selector: 'vertical-menu-admin',
  templateUrl: './vertical-menu-admin.component.html',
  styleUrls: ['./vertical-menu-admin.component.css']
})
export class VerticalMenuAdminComponent implements OnInit {

  constructor(private subjectService:SubjectServiceService, private router: Router, private professorService:ZaposleniService, private studentService: StudentServiceService) { }
 
  ngOnInit(): void {
    this.getAllSubjects();
    this.getAllProfessors();
  }
  subjects: SubjectInfo[] =[];
  professors: Radnik[]= [];
  student ='';
  /** dohvata sve predmete */
  getAllSubjects(){
    this.subjectService.getAllInfos().subscribe((res:SubjectInfo[])=>{
      this.subjects=res;
    })
  }
  /*************dohvata sve profesore */
  /**********TODO: napraviti da izmena profesora bude preko forme za username */
  getAllProfessors(){
    this.professorService.getAllZaposleni().subscribe((res:Radnik[])=>{
      this.professors=res;
    }) 
  }
  getStudent(){
    
    this.studentService.getStudentByUsername(this.student).subscribe((res:any)=>{
      
       if(res && res.username){
         let route = '/student/info/update/'+this.student;
         this.router.navigate([route])
       } else 
       this.router.navigate(['/notfound']);
    })
  }

}
