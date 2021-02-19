import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Radnik } from '../entities/radnik';
import { SubjectInfo } from '../entities/Subject';
import { SubjectServiceService } from '../subject-service.service';
import { ZaposleniService } from '../zaposleni.service';

@Component({
  selector: 'app-subject-info-update',
  templateUrl: './subject-info-update.component.html',
  styleUrls: ['./subject-info-update.component.css']
})
export class SubjectInfoUpdateComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private subjectService: SubjectServiceService, private zaposlenoService: ZaposleniService) { }

  ngOnInit(): void {
    this.getAllZaposleni();
    this.activatedRoute.url.subscribe(val=>{
       let code = val[3].path;  
       this.getSubjectInfo(code);
    })
  }
  subject = new SubjectInfo();
  professors=[];
  MESSAGE_OK = { style: "success", msg: "Uspesno azurirano" };
  MESSAGE_DANGER = { style: "danger", msg: "Neuspeh" };
  message= null;
  getSubjectInfo(code: string) {
    this.subjectService.getInfo(code).subscribe((res: SubjectInfo) => {
      this.subject = res;
    })
  }

  getAllZaposleni() {
    this.zaposlenoService.getAllZaposleni().subscribe((res: Radnik[]) => {
          this.professors=res;
    })
  }
  updateSubject(){
    this.subjectService.updateInfo(this.subject.code, this.subject).subscribe((res:any)=>{
      if(res.nModified && res.nModified!=0){
        this.message=this.MESSAGE_OK;
      } else this.message=this.MESSAGE_DANGER;
    });
  }

}
