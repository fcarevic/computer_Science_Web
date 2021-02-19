import { Component, ElementRef, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
import { SubjectInfo } from '../entities/Subject';
import { SubjectServiceService } from '../subject-service.service';

@Component({
  selector: 'app-subject-material-insert',
  templateUrl: './subject-material-insert.component.html',
  styleUrls: ['./subject-material-insert.component.css']
})
export class SubjectMaterialInsertComponent implements OnInit {
  MESSAGE_OK = { style: "success", msg: "Uspesno azurirano" };
  MESSAGE_DANGER_NO_FILE = { style: "danger", msg: "Fajl nije izabran" };
  MESSAGE_DANGER = { style: "danger", msg: "Neuspeh" };
  MESSAGE_DANGER_FILE_NAME = { style: "danger", msg: "Pre izbora fajla, izabrati predmet i tip" };


  constructor(private subjectService:SubjectServiceService, private el :ElementRef) { }

  ngOnInit(): void {
    this.uploader.onAfterAddingFile = (file) => {
      if(!this.subject || !this.type){
        this.message=this.MESSAGE_DANGER_FILE_NAME;
        return;
      }
      this.lastCode = this.subject;
      this.lastType= this.type
      file.file.name = this.lastCode+'-'+ this.lastType+'-'+ file.file.name;
      this.filename = file.file.name;
      file.withCredentials = false;
      
    };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      console.log("materialUpload:uploaded:", item, status, response);
      this.message=this.MESSAGE_OK;
    };


    let username = localStorage.getItem('user');
    
    this.getAllSubjects(username);

  }
  URL = 'http://localhost:4000/syllabus/upload';
  uploader: FileUploader = new FileUploader({ url: this.URL, itemAlias: 'file' });
  subject: string;
  type: string;
  lastCode:string;
  lastType:string;
  filename: string;
  message = null;

  subjects: SubjectInfo[]=[];
  
  uploadMaterial(){
    if(! this.filename.includes(this.subject) || !this.filename.includes(this.type)) {
      this.message= this.MESSAGE_DANGER_FILE_NAME;
      return;
    }

    let inputElFIles = this.el.nativeElement.querySelector("#file");
        let count = inputElFIles.files.length;
       if(count==0){
         this.message= this.MESSAGE_DANGER_NO_FILE;
         
       }
  this.subjectService.uploadMaterial(this.subject, this.type, this.filename).subscribe((res:any)=>{
  
    if(res.nModified && res.nModified==1){
      this.uploader.uploadAll();
    } else this.message= this.MESSAGE_DANGER;
  })
  }

  getAllSubjects(username){
    this.subjectService.getSubjectInfoForProfessor(username).subscribe((res:SubjectInfo[])=>{
        this.subjects=res;
    })
  }



}
