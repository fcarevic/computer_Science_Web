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
      alert(this.code);
    })
  }
  notification = new SubjectNotification();
  code:String;
  insertNotification(){
    this.subjectService.insertNotification(this.notification, this.code).subscribe(res=>{
      alert(JSON.stringify(res));
    })
  }

}
