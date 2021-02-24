import { Component, OnInit } from '@angular/core';
import { Radnik } from '../entities/radnik';
import { SubjectInfo, SubjectPlan } from '../entities/Subject';
import { SubjectServiceService } from '../subject-service.service';
import { ZaposleniService } from '../zaposleni.service';

@Component({
  selector: 'app-subject-groups-create',
  templateUrl: './subject-groups-create.component.html',
  styleUrls: ['./subject-groups-create.component.css']
})
export class SubjectGroupsCreateComponent implements OnInit {

  constructor(private subjectService: SubjectServiceService, private zaposleniService:ZaposleniService) { }

  code='';
  map: Map<string, SubjectPlan> = new Map<string, SubjectPlan>()
  groups: SubjectPlan[]=[];
  allInfo:any[]=[];
  subjects: SubjectInfo[]=[];

  ngOnInit(): void {
    this.getAllSubjectsAndGroups();
    this.getAllProfessors()
  }

  change(code:string){
    
    let subject = this.allInfo.filter(el=> el.info.code==code)[0]
    let subInfo: SubjectInfo = subject.info;
    let subGroups :SubjectPlan[] = subject.plan;
      subInfo.professors.forEach(el=>{
          let arr = subGroups.filter(el2=> el2.professor==el)
          let newGroup = new SubjectPlan();
          newGroup.professor =el;
          if(arr.length!=0){
            newGroup=arr[0];
          }
          this.groups.push(newGroup);
          this.map.set(el, newGroup);
      })
  }

  getProfessorName(username:string){
    let radnik:Radnik = this.allProfessors.filter(el=> el.username==username)[0];
    return radnik.ime + ' ' + radnik.prezime;
  }
  allProfessors:Radnik[]=[];
  getAllProfessors(){
    this.zaposleniService.getAllZaposleni().subscribe((res:Radnik[])=>{
      this.allProfessors=res;
    
    })

  }
  MESSAGE_OK = { style: "success", msg: "Uspesno azurirano" };
  MESSAGE_DANGER = { style: "danger", msg: "Neuspeh" };
  message= null;
  getAllSubjectsAndGroups(){
    this.subjectService.getAllGroupsForAllSubjects().subscribe((res:any)=>{
      this.allInfo=res;
      res.forEach(element => {
        this.subjects.push(element.info);  
      });
       
    })
  }
  insertSubjectPlan(){
    this.subjectService.insertGroup(this.code, this.groups).subscribe((res:any)=>{
      if(res && res.nModified==1){
        this.message=this.MESSAGE_OK;
      } else this.message=this.MESSAGE_DANGER;
    })
    
  }

}
