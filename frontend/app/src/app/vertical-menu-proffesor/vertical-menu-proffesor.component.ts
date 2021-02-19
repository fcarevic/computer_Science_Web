import { Component, OnInit } from '@angular/core';
import { SubjectInfo } from '../entities/Subject';
import { SubjectServiceService } from '../subject-service.service';

@Component({
  selector: 'vertical-menu-proffesor',
  templateUrl: './vertical-menu-proffesor.component.html',
  styleUrls: ['./vertical-menu-proffesor.component.css']
})
export class VerticalMenuProffesorComponent implements OnInit {

  constructor(private subjectService :SubjectServiceService) { }
  username='';
  subjects: SubjectInfo[];
  ngOnInit(): void {
    this.username= localStorage.getItem('user');
    this.getAllSubjects();
  } 
 
  getAllSubjects(){
    this.subjectService.getSubjectInfoForProfessor(this.username).subscribe((res:SubjectInfo[])=>{
        this.subjects=res;
    })
  }

}
