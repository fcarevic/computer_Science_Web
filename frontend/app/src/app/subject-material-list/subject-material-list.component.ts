import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Radnik } from '../entities/radnik';
import { SubjectServiceService } from '../subject-service.service';
import { ZaposleniService } from '../zaposleni.service';

@Component({
  selector: 'app-subject-material-list',
  templateUrl: './subject-material-list.component.html',
  styleUrls: ['./subject-material-list.component.css']
})
export class SubjectMaterialListComponent implements OnInit {
  URL = 'http://localhost:4000/materials/download';
  constructor(private subjectService: SubjectServiceService, private activatedRoute: ActivatedRoute, private zaposleniService:ZaposleniService) { }

  ngOnInit(): void {
    this.activatedRoute.url.subscribe(val => {
      this.subject = val[2].path;
      this.getAllMaterials();
    })
    this.getAllProfessors();
    this.typee= localStorage.getItem('tip');
    this.user=localStorage.getItem('user');
  }
  user='';
  lectureMaterials = [];
  exerciseMaterials = [];
  subject: string;
  typee='';
  professors: Radnik[];
  getAllMaterials() {
    this.subjectService.getAllMaterials(this.subject).subscribe((res: any) => {
      this.lectureMaterials = res.lectureMaterials;
      this.exerciseMaterials = res.exerciseMaterials;
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
  deleteMaterial(file, type) {
    this.subjectService.deleteMaterial(this.subject, type, file).subscribe((res: any) => {
      location.reload();
    })
  }

}
