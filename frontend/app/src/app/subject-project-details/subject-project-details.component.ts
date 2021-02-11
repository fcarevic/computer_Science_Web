import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SubjectProject } from '../entities/Subject';
import { SubjectServiceService } from '../subject-service.service';

@Component({
  selector: 'app-subject-project-details',
  templateUrl: './subject-project-details.component.html',
  styleUrls: ['./subject-project-details.component.css']
})
export class SubjectProjectDetailsComponent implements OnInit {

  constructor(private subjectService: SubjectServiceService, private activatedRoute: ActivatedRoute) { }
  URL = 'http://localhost:4000/materials/download';
  ngOnInit(): void {
    this.activatedRoute.url.subscribe(val=>{
      this.getProjectInfo(val[3].path)
    })
  }
  project = new SubjectProject();
  getProjectInfo(code: string) {
    this.subjectService.getProjectInfo(code).subscribe((res: any) => {
      if (res && res.project)
        this.project = res.project;
      else this.project = new SubjectProject();

    })
  }
}
