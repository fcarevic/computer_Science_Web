import { Component, OnInit } from '@angular/core';
import { SubjectSyllabus } from '../entities/Subject';
import { SubjectServiceService } from '../subject-service.service';

@Component({
  selector: 'app-syllabus-update',
  templateUrl: './syllabus-update.component.html',
  styleUrls: ['./syllabus-update.component.css']
})
export class SyllabusUpdateComponent implements OnInit {

  constructor( private subjectService: SubjectServiceService) { }

  ngOnInit(): void {
    let tmp = JSON.parse(localStorage.getItem('syllabus'));

    this.subject= tmp.subject;
    this.oldlist= tmp.list;
    
    this.list= tmp.list;
  
   
  }
  oldlist: SubjectSyllabus;
  list = new SubjectSyllabus();
  subject: string;
  MESSAGE_OK = { style: "success", msg: "Uspesno azurirano" };
  MESSAGE_DANGER = { style: "danger", msg: "Neuspeh" };

  message = null;
 getDateString(date){
   return date.toString().substring(0, date.toString().length-1); 

 }
  updateSyllabus(){
    this.subjectService.updateSyllabus(this.subject,this.oldlist ,this.list).subscribe( (res:any)=>{
       if(res.nModified && res.nModified==1){
         this.message=this.MESSAGE_OK
         localStorage.setItem('syllabus', JSON.stringify({subject: this.subject, list : this.list}));
         
       } else this.message= this.MESSAGE_DANGER;
    })
    
  }

}
