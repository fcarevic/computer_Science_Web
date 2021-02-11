import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SubjectLab } from '../entities/Subject';
import { SubjectServiceService } from '../subject-service.service';

@Component({
  selector: 'app-subject-lab-details',
  templateUrl: './subject-lab-details.component.html',
  styleUrls: ['./subject-lab-details.component.css']
})
export class SubjectLabDetailsComponent implements OnInit {

  constructor(private  activatedRoute: ActivatedRoute, private subjectService: SubjectServiceService) {
    this.activatedRoute.url.subscribe(val=>{
        this.getLabInfo(val[3].path)
    })
   }

  ngOnInit(): void {
  }
  lab  = new SubjectLab();
  URL = 'http://localhost:4000/materials/download';
  getLabInfo(code:string){
    this.subjectService.getLab(code).subscribe( (res:any)=>{
      this.lab=res.lab;
    })
  }



}
