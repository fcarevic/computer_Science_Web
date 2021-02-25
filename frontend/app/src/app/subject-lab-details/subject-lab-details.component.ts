import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Radnik } from '../entities/radnik';
import { SubjectInfo, SubjectLab } from '../entities/Subject';
import { SubjectServiceService } from '../subject-service.service';
import { ZaposleniService } from '../zaposleni.service';

@Component({
  selector: 'app-subject-lab-details',
  templateUrl: './subject-lab-details.component.html',
  styleUrls: ['./subject-lab-details.component.css']
})
export class SubjectLabDetailsComponent implements OnInit {

  constructor(private  activatedRoute: ActivatedRoute, private subjectService: SubjectServiceService,
    private zaposleniService: ZaposleniService
    ) {
    this.activatedRoute.url.subscribe(val=>{
        this.getLabInfo(val[3].path)
        this.getSubjectInfo(val[3].path)
    })
   }

  ngOnInit(): void {
    this.getAllProfessors();
  }
  lab  = new SubjectLab();
  URL = 'http://localhost:4000/materials/download';
  professors:Radnik[]=[];
  getLabInfo(code:string){
    this.subjectService.getLab(code).subscribe( (res:any)=>{
      this.lab=res.lab;
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

  subjectInfo: SubjectInfo;
  getSubjectInfo(code: string) {
    this.subjectService.getInfo(code).subscribe((res: SubjectInfo) => {
      this.subjectInfo=res;
    })
  }


}
