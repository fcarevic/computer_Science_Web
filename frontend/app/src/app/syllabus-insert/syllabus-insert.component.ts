import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SubjectSyllabus } from '../entities/Subject';
import { SubjectServiceService } from '../subject-service.service';

@Component({
  selector: 'app-syllabus-insert',
  templateUrl: './syllabus-insert.component.html',
  styleUrls: ['./syllabus-insert.component.css']
})
export class SyllabusInsertComponent implements OnInit {

  constructor(private subjectService: SubjectServiceService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.url.subscribe(val=>{
      this.subject= val[3].path; 
    })
  }
  list = new SubjectSyllabus();
  subject: string;
  message = null;
  MESSAGE_OK = { style: "success", msg: "Uspesno azurirano" };
  MESSAGE_DANGER = { style: "danger", msg: "Neuspeh" };
  insertSyllabus() {
    this.subjectService.insertSyllabus(this.subject, this.list).subscribe((res: any) => {
      if (res.nModified && res.nModified == 1)
        this.message = this.MESSAGE_OK;
      else this.message = this.MESSAGE_DANGER;
    })
  }
}
