import { formatDate } from '@angular/common';
import { Component, ElementRef, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
import { SubjectSyllabus } from '../entities/Subject';
import { FileServiceService } from '../file-service.service';
import { SubjectServiceService } from '../subject-service.service';

@Component({
  selector: 'app-syllabus-details',
  templateUrl: './syllabus-details.component.html',
  styleUrls: ['./syllabus-details.component.css']
})
export class SyllabusDetailsComponent implements OnInit {

  constructor(private subjectService: SubjectServiceService, private fileService: FileServiceService, private el: ElementRef) {


  }

  ngOnInit(): void {
    let tmp = JSON.parse(localStorage.getItem('syllabus'));

    this.subject = tmp.subject;
    this.list = Object.assign(new SubjectSyllabus, tmp.list);

    this.list.date = new Date(tmp.list.date);
    this.list.expireDate = new Date(tmp.list.expireDate)


    this.uploader.onAfterAddingFile = (file) => {
      file.file.name = this.username + '-' + this.subject + '-' + this.list.name + '-' + file.file.name;
      file.withCredentials = false;

    };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      console.log("materialUpload:uploaded:", item, status, response);
      this.message = this.MESSAGE_OK;
    };
  }
  MESSAGE_OK = { style: "success", msg: "Uspesno azurirano" };
  MESSAGE_DANGER = { style: "danger", msg: "Neuspeh" };
  subject: string;
  username = 'cf170065d';
  message = null;
  list = new SubjectSyllabus();
  getDateString(date: Date) {
    return formatDate(date, 'dd/MM/yyyy HH:mm', 'en-US');
  }
  URL = 'http://localhost:4000/syllabus/upload';
  uploader: FileUploader = new FileUploader({ url: this.URL, itemAlias: 'file' });

  registerStudent() {

    this.subjectService.addStudentSyllabus(this.subject, this.list, this.username).subscribe((res: any) => {
      if (res.nModified && res.nModified == 1) {
        let inputElFIles = this.el.nativeElement.querySelector("#file");
        let count = inputElFIles.files.length;
        if (count == 1) {
          this.uploader.uploadAll();
        }
      } else this.message = this.MESSAGE_DANGER;

    })


  }

}
