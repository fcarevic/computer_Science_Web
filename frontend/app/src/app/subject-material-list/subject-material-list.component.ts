import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SubjectServiceService } from '../subject-service.service';

@Component({
  selector: 'app-subject-material-list',
  templateUrl: './subject-material-list.component.html',
  styleUrls: ['./subject-material-list.component.css']
})
export class SubjectMaterialListComponent implements OnInit {
  URL = 'http://localhost:4000/materials/download';
  constructor(private subjectService: SubjectServiceService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.url.subscribe(val => {
      this.subject = val[2].path;
      this.getAllMaterials();
    })
  }
  lectureMaterials = [];
  exerciseMaterials = [];
  subject: string;
  getAllMaterials() {
    this.subjectService.getAllMaterials(this.subject).subscribe((res: any) => {
      this.lectureMaterials = res.lectureMaterials;
      this.exerciseMaterials = res.exerciseMaterials;
    })
  }
  deleteMaterial(filename, type) {
    this.subjectService.deleteMaterial(this.subject, type, filename).subscribe((res: any) => {
      location.reload();
    })
  }

}
