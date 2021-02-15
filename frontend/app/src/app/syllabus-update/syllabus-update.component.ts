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
    this.oldlist= Object.assign(new SubjectSyllabus, tmp.list);
    
    this.list= Object.assign(new SubjectSyllabus, tmp.list);
   
    this.list.date= new Date(tmp.list.date);
    this.list.expireDate= new Date(tmp.list.expireDate)
    this.oldlist.date= new Date(tmp.list.date);
    this.oldlist.expireDate= new Date(tmp.list.expireDate);
    
  
   
  }
  oldlist: SubjectSyllabus;
  list = new SubjectSyllabus();
  subject: string;
  MESSAGE_OK = { style: "success", msg: "Uspesno azurirano" };
  MESSAGE_DANGER = { style: "danger", msg: "Neuspeh" };

  message = null;
 getDateString(date:Date){
   return date;
 }
  updateSyllabus(){
    this.list.date= new Date(this.list.date);
    this.list.expireDate= new Date(this.list.expireDate);
    
    this.subjectService.updateSyllabus(this.subject,this.oldlist ,this.list).subscribe( (res:any)=>{
      alert(JSON.stringify(res))
       if(res.nModified && res.nModified==1){
         this.message=this.MESSAGE_OK
         localStorage.setItem('syllabus', JSON.stringify({subject: this.subject, list : this.list}));
         let tmp = JSON.parse(localStorage.getItem('syllabus'));
         this.oldlist= Object.assign(new SubjectSyllabus, tmp.list);
         this.oldlist.date= new Date(tmp.list.date);
         this.oldlist.expireDate= new Date(tmp.list.expireDate);

         
       } else this.message= this.MESSAGE_DANGER;
    })
    
  }

}
