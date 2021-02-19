import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Radnik } from '../entities/radnik';
import { SubjectProject } from '../entities/Subject';
import { SubjectServiceService } from '../subject-service.service';
import { ZaposleniService } from '../zaposleni.service';

@Component({
  selector: 'app-subject-project-details',
  templateUrl: './subject-project-details.component.html',
  styleUrls: ['./subject-project-details.component.css']
})
export class SubjectProjectDetailsComponent implements OnInit {

  constructor(private subjectService: SubjectServiceService, private activatedRoute: ActivatedRoute,
    private zaposleniService:ZaposleniService) { }
  URL = 'http://localhost:4000/materials/download';
  ngOnInit(): void {
    this.activatedRoute.url.subscribe(val=>{
      this.getProjectInfo(val[3].path)
    })
    this.getAllProfessors();
  }
  project = new SubjectProject();
  getProjectInfo(code: string) {
    this.subjectService.getProjectInfo(code).subscribe((res: any) => {
      if (res && res.project)
        this.project = res.project;
      else this.project = new SubjectProject();

    })
  }

  professors: Radnik[];
  getProfessorName(username:string){
    let pr= this.professors.filter(el=>el.username==username)[0];
    return pr.ime + ' ' + pr.prezime;
  }
  getAllProfessors(){
    this.zaposleniService.getAllZaposleni().subscribe((res:Radnik[])=>{
      this.professors=res;
    })
  }
}
