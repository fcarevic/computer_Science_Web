import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SubjectNotification } from '../entities/Subject';
import { SubjectServiceService } from '../subject-service.service';

@Component({
  selector: 'app-subject-notification-insert',
  templateUrl: './subject-notification-insert.component.html',
  styleUrls: ['./subject-notification-insert.component.css']
})
export class SubjectNotificationInsertComponent implements OnInit {

  constructor(private subjectService: SubjectServiceService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.url.subscribe(val=>{
      this.code=val[3].path;
    })
  }
  notification = new SubjectNotification();
  code:string;


  MESSAGE_OK = { style: "success", msg: "Uspesno azurirano" };
  MESSAGE_DANGER = { style: "danger", msg: "Neuspeh" };
  message= null;

  insertNotification(){
    this.subjectService.insertNotification(this.notification, this.code).subscribe(res=>{
     if(res){
        this.message=this.MESSAGE_OK;
     } else this.message=this.MESSAGE_DANGER;
     
    });
    
  }

}
