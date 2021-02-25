import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Radnik } from '../entities/radnik';
import { SubjectInfo, SubjectProject } from '../entities/Subject';
import { SubjectServiceService } from '../subject-service.service';
import { ZaposleniService } from '../zaposleni.service';

@Component({
  selector: 'app-subject-project-update',
  templateUrl: './subject-project-update.component.html',
  styleUrls: ['./subject-project-update.component.css']
})
export class SubjectProjectUpdateComponent implements OnInit {
  URL = 'http://localhost:4000/materials/download';
  MESSAGE_OK = { style: "success", msg: "Uspesno azurirano" };
  MESSAGE_DANGER = { style: "danger", msg: "Neuspeh" };
  message = null;
  constructor(private subjectService: SubjectServiceService, private activatedRoute: ActivatedRoute,
    private zaposleniService: ZaposleniService) { }

  ngOnInit(): void {
    this.activatedRoute.url.subscribe(val=>{
       this.subject= val[3].path;
       this.getProjectInfo(this.subject);
       this.getSubjectInfo(this.subject);
    })
    this.getAllProfessors();
    this.user=localStorage.getItem('user');
  }
  project = new SubjectProject();
  subject:string;
  user='';
  professors:Radnik[];
  getProjectInfo(code: string) {
    this.subjectService.getProjectInfo(code).subscribe((res: any) => {
      if (res && res.project)
        this.project = res.project;
      else this.project = new SubjectProject();

    })
  }

  deleteMaterial(material){
    this.project.materials = this.project.materials.filter(el=> !(el==material));
  }
 
  updateProject(){
    this.subjectService.updateProjectInfo(this.subject, this.project).subscribe((res:any)=>{
      if(res && res.nModified && res.nModified==1){
          this.message= this.MESSAGE_OK;
      } else this.message=this.MESSAGE_DANGER;
    })
  }

  getProfessorName(username:string){
    let pr= this.professors.filter(el=>el.username==username)[0];
    return pr.ime + ' ' + pr.prezime;
  }
  getAllProfessors(){
    this.zaposleniService.getAllZaposleni().subscribe((res:Radnik[])=>{
      this.professors=res;
    })
  }

  change(){
    this.subjectService.updateInfo(this.subjectInfo.code, this.subjectInfo).subscribe(res=>{
      location.reload();
    });
  }

  subjectInfo: SubjectInfo;
  getSubjectInfo(code: string) {
    this.subjectService.getInfo(code).subscribe((res: SubjectInfo) => {
      this.subjectInfo=res;
    })
  }


}
