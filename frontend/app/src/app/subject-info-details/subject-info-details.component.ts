import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Radnik } from '../entities/radnik';
import { SubjectInfo } from '../entities/Subject';
import { SubjectServiceService } from '../subject-service.service';
import { ZaposleniService } from '../zaposleni.service';

@Component({
  selector: 'app-subject-info-details',
  templateUrl: './subject-info-details.component.html',
  styleUrls: ['./subject-info-details.component.css']
})
export class SubjectInfoDetailsComponent implements OnInit {

  constructor(private subjectService: SubjectServiceService, private zaposleniService: ZaposleniService, private ativatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    
   this.ativatedRoute.url.subscribe(val=>{
     let code = val[2].path;
    
     this.getSubjectInfo(code); 
   })
  }

  professors=[];
  subject = new SubjectInfo();
  
  getAllProfessors(){
      this.subject.professors.forEach(el=>{
        this.zaposleniService.getZaposleniByUsername(el).subscribe((res:Radnik)=>{
          
          this.professors.push(res);
        
        })
      })
  }
  getSubjectInfo(code){
    this.subjectService.getInfo(code).subscribe((res:SubjectInfo)=>{
     
      this.subject=res;
      this.getAllProfessors();
    })
  }

}
