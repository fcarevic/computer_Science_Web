import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../entities/Student';
import { SubjectSyllabus } from '../entities/Subject';
import { SubjectServiceService } from '../subject-service.service';


@Component({
  selector: 'app-syllabus-list',
  templateUrl: './syllabus-list.component.html',
  styleUrls: ['./syllabus-list.component.css']
})
export class SyllabusListComponent implements OnInit {

  constructor(private activatedRouteL: ActivatedRoute, private router:Router, private subjectService: SubjectServiceService) { }

  ngOnInit(): void {
    this.typee= localStorage.getItem('tip'); 
    this.activatedRouteL.url.subscribe(val=>{
      this.subject =val[3].path;
      this.getAllSyllabus(this.subject);
      
    })
  }
  lists = [];
  subject:string; 
  typee= '';

   myFormatDate(date:Date){
     return formatDate(date, 'dd/MM/yyy hh:mm', 'en-US');
   }
  getAllSyllabus(code:string){
    this.subjectService.getAllSyllabus(this.subject).subscribe((res:any)=>{
     this.lists=res.syllabus;
     if(this.typee=="Student" )
     this.lists=this.lists.filter(el=> el.active && ! (new Date(el.expireDate)< new Date()))
    })
  }

  updateSyllabus(syllabus){
     localStorage.setItem('syllabus', JSON.stringify({subject: this.subject, list : syllabus}));
     this.router.navigate(['/subject/syllabus/update']);
  }
  details(syllabus){
    localStorage.setItem('syllabus', JSON.stringify({subject: this.subject, list : syllabus}));
    this.router.navigate(['/subject/syllabus/details']);
  }
}
