import { Component, OnInit } from '@angular/core';
import { SubjectInfo } from '../entities/Subject';
import { SubjectServiceService } from '../subject-service.service';

@Component({
  selector: 'vertical-menu-admin',
  templateUrl: './vertical-menu-admin.component.html',
  styleUrls: ['./vertical-menu-admin.component.css']
})
export class VerticalMenuAdminComponent implements OnInit {

  constructor(private subjectService:SubjectServiceService) { }
 
  ngOnInit(): void {
    this.getAllSubjects();
  }
  subjects: SubjectInfo[] =[];
  getAllSubjects(){
    this.subjectService.getAllInfos().subscribe((res:SubjectInfo[])=>{
      this.subjects=res;
    })
  }

}
