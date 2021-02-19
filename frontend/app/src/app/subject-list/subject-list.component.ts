import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SubjectInfo } from '../entities/Subject';
import { SubjectServiceService } from '../subject-service.service';

@Component({
  selector: 'app-subject-list',
  templateUrl: './subject-list.component.html',
  styleUrls: ['./subject-list.component.css']
})
export class SubjectListComponent implements OnInit {

  constructor(private subjectService:SubjectServiceService, private acitvatedRoue: ActivatedRoute) { }
  years=[1,2,3,4]
  ngOnInit(): void {
    this.acitvatedRoue.url.subscribe(val=>{
      this.getAllSubjects(val[2].path)
      this.department = val[2].path;
      if(this.department == 'master') this.years=[1]
      else this.years=[1,2,3,4]
    })
  }
  department = '';
  subjects:SubjectInfo[] = [];
  getAllSubjects(department:string){
    this.subjectService.getAllInfos().subscribe((res:SubjectInfo[])=> {
          this.subjects=res.filter(el=> el.departments.includes(department));
          
    })

  }
  getSubjectsForYear(year:number){
    if(this.department=='master'){
       return this.subjects;
    }
    return this.subjects.filter(el=> el.years.includes(year))

  }

}
