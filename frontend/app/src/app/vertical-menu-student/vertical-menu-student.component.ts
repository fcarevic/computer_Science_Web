import { Component, OnInit } from '@angular/core';
import { SubjectInfo } from '../entities/Subject';
import { SubjectServiceService } from '../subject-service.service';

@Component({
  selector: 'vertical-menu-student',
  templateUrl: './vertical-menu-student.component.html',
  styleUrls: ['./vertical-menu-student.component.css']
})
export class VerticalMenuStudentComponent implements OnInit {

  constructor(private subjectService: SubjectServiceService) { }

  ngOnInit(): void {
    this.username = localStorage.getItem('user')
    this.getAllSubjects(this.username);
  }
  username='';
  subjects: SubjectInfo[] =[];
  getAllSubjects(username:string){
    this.subjectService.getSubjectInfoForApplicant(username).subscribe((res:SubjectInfo[])=>{
        this.subjects=res;
    })
  }

}
