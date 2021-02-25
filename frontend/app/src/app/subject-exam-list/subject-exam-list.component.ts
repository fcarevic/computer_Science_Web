import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Radnik } from '../entities/radnik';
import { File, SubjectInfo } from '../entities/Subject';
import { SubjectServiceService } from '../subject-service.service';
import { ZaposleniService } from '../zaposleni.service';

@Component({
  selector: 'app-subject-exam-list',
  templateUrl: './subject-exam-list.component.html',
  styleUrls: ['./subject-exam-list.component.css']
})
export class SubjectExamListComponent implements OnInit {

  constructor(private subjectService:SubjectServiceService, private activatedRoute:ActivatedRoute, private zaposleniService: ZaposleniService) { }
  URL = 'http://localhost:4000/materials/download';
  typee='';
  subject:string;
  questions: File[]=[];
  solutions: File[]=[];
  allProfessors:Radnik[]=[];
  user=''
  ngOnInit(): void {
    this.user= localStorage.getItem('user');
    this.typee=localStorage.getItem('tip');
    this.getAllProfessors();
    this.activatedRoute.url.subscribe(val=>{
      this.subject=val[1].path;
      this.getAllQuestions(this.subject);
      this.getAllSolutions(this.subject);
      this.getSubjectInfo(this.subject)

    })
  }
  getAllProfessors(){
    this.zaposleniService.getAllZaposleni().subscribe((res:Radnik[])=>{
      this.allProfessors=res;
    })
  }
  getProfessorName(username){
    let prof = this.allProfessors.filter(el=> el.username==username)[0];
    return prof.ime +  ' ' + prof.prezime;
  }
  getAllQuestions(subject:string){
    this.subjectService.getAllQuestions(subject).subscribe((res:File[])=>{
        this.questions=res;
    })
  }

  getAllSolutions(subject:string){
    this.subjectService.getAllSolutions(subject).subscribe((res:File[])=>{
      
        this.solutions=res;
    })
  }
  deleteMaterial(file:File, type: string){
    this.subjectService.deleteMaterial(this.subject, type, file).subscribe(res=>{
      location.reload();
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
