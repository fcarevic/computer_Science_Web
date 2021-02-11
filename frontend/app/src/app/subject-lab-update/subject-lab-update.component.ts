import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SubjectLab } from '../entities/Subject';
import { SubjectServiceService } from '../subject-service.service';

@Component({
  selector: 'app-subject-lab-update',
  templateUrl: './subject-lab-update.component.html',
  styleUrls: ['./subject-lab-update.component.css']
})
export class SubjectLabUpdateComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private subjectService: SubjectServiceService) { }

  ngOnInit(): void {
    this.activatedRoute.url.subscribe(val => {
      this.subject = val[3].path;

      this.getLabInfo(this.subject);
    })
  }
  subject: string;
  lab = new SubjectLab();

  URL = 'http://localhost:4000/materials/download';
  MESSAGE_OK = { style: "success", msg: "Uspesno azurirano" };
  MESSAGE_DANGER = { style: "danger", msg: "Neuspeh" };
  message = null;
  getLabInfo(code: string) {
    this.subjectService.getLab(code).subscribe((res: any) => {
      if (res)
        this.lab = res.lab;
      else this.lab = new SubjectLab();
      
    })

  }
  deleteMaterial(filename: string) {
    this.lab.materials = this.lab.materials.filter(el => !(el == filename))
  }
  updateLab() {
    
    this.subjectService.updateLab(this.subject, this.lab).subscribe((res: any) => {
      
      if (res.nModified && res.nModified == 1) {
        this.message = this.MESSAGE_OK;
      } else this.message = this.MESSAGE_DANGER;
    })
  }
}
