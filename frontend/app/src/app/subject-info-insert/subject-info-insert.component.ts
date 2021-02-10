import { Component, OnInit } from '@angular/core';
import { Radnik } from '../entities/radnik';
import { SubjectInfo } from '../entities/Subject';
import { SubjectServiceService } from '../subject-service.service';
import { ZaposleniService } from '../zaposleni.service';

@Component({
  selector: 'app-subject-info-insert',
  templateUrl: './subject-info-insert.component.html',
  styleUrls: ['./subject-info-insert.component.css']
})
export class SubjectInfoInsertComponent implements OnInit {

  constructor(private subjectServie: SubjectServiceService, private zaposleniService: ZaposleniService) { }

  ngOnInit(): void {
    this.getAllZaposleni();
    
  }
  professors : Radnik[];
  subject = new SubjectInfo();
  
  MESSAGE_OK = { style: "success", msg: "Uspesno azurirano" };
  MESSAGE_DANGER = { style: "danger", msg: "Neuspeh" };
  message= null;
  getAllZaposleni(){
    this.zaposleniService.getAllZaposleni().subscribe((res:Radnik[])=>{
      this.professors=res;
    })
  }
  insertSubject(){
     
    this.subjectServie.insertInfo(this.subject).subscribe((res:any)=>{
      if(res.status && res.status=='not_ok'){
        this.message=this.MESSAGE_DANGER
      } else this.message= this.MESSAGE_OK;
    })
  }
}
