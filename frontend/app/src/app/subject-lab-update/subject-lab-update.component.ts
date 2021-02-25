import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Radnik } from '../entities/radnik';
import { File, SubjectInfo, SubjectLab } from '../entities/Subject';
import { SubjectServiceService } from '../subject-service.service';
import { ZaposleniService } from '../zaposleni.service';

@Component({
  selector: 'app-subject-lab-update',
  templateUrl: './subject-lab-update.component.html',
  styleUrls: ['./subject-lab-update.component.css']
})
export class SubjectLabUpdateComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private subjectService: SubjectServiceService,
    private zaposleniService: ZaposleniService) { }

  ngOnInit(): void {
    this.activatedRoute.url.subscribe(val => {
      this.subject = val[3].path;

      this.getLabInfo(this.subject);
      this.getSubjectInfo(this.subject);
    })
    this.getAllProfessors();
    this.user=localStorage.getItem('user');
  }
  subject: string;
  lab = new SubjectLab();

  URL = 'http://localhost:4000/materials/download';
  MESSAGE_OK = { style: "success", msg: "Uspesno azurirano" };
  MESSAGE_DANGER = { style: "danger", msg: "Neuspeh" };
  message = null;
  professors:Radnik[];
  user='';
  getLabInfo(code: string) {
    this.subjectService.getLab(code).subscribe((res: any) => {
      if (res)
        this.lab = res.lab;
      else this.lab = new SubjectLab();
      
    })

  }
  deleteMaterial(file: File) {
    this.lab.materials = this.lab.materials.filter(el => !(el == file))
  }
  updateLab() {
    
    this.subjectService.updateLab(this.subject, this.lab).subscribe((res: any) => {
      
      if (res.nModified && res.nModified == 1) {
        this.message = this.MESSAGE_OK;
      } else this.message = this.MESSAGE_DANGER;
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
  
  change(val:any){
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
