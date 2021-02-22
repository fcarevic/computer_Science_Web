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

    this.user = localStorage.getItem('user');
    this.typee = localStorage.getItem('tip')
    this.ativatedRoute.url.subscribe(val => {
      let code = val[2].path;

      this.getSubjectInfo(code);
      this.getAllApplicants(code);
    })
  }

  professors = [];
  subject = new SubjectInfo();
  applicants: String[] = [];
  user = '';
  typee = '';

  getAllProfessors() {
    this.subject.professors.forEach(el => {
      this.zaposleniService.getZaposleniByUsername(el).subscribe((res: Radnik) => {

        this.professors.push(res);

      })
    })
  }

  getAllApplicants(code: string) {
    this.subjectService.getAllApplicants(code).subscribe((res: any) => {

      if (res && res.applicants)
        this.applicants = res.applicants;
      else this.applicants = [];
    })

  }

  displayButton() {
    if (this.typee != 'Student') return false;
    return true;
  }
  isRegistered() {
    return this.applicants.includes(this.user);
  }
  registerStudent() {
    return this.subjectService.insertStudentApplicant(this.subject.code, this.user).subscribe((res: any) => {
      if (res && res.nModified == 1) {
        location.reload();
      }

    })
  }
  unregisterStudent() {
    return this.subjectService.removeStudentApplicant(this.subject.code, this.user).subscribe((res: any) => {
      if (res && res.nModified == 1) {
        location.reload();

      }

    })
  }
  getSubjectInfo(code) {
    this.subjectService.getInfo(code).subscribe((res: SubjectInfo) => {
      this.subject = res;
      this.getAllProfessors();
    })
  }

}
