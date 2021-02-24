import { Component, OnInit } from '@angular/core';
import { Radnik } from '../entities/radnik';
import { FileServiceService } from '../file-service.service';
import { SubjectServiceService } from '../subject-service.service';
import { ZaposleniService } from '../zaposleni.service';

@Component({
  selector: 'app-zaposleni-list',
  templateUrl: './zaposleni-list.component.html',
  styleUrls: ['./zaposleni-list.component.css']
})
export class ZaposleniListComponent implements OnInit {

  constructor(private zaposleniService: ZaposleniService, private imgService: FileServiceService,
    private subjectService:SubjectServiceService
    ) {
    this.getAllZaposleni();
   }

  ngOnInit(): void {
    this.getAllSubjectsAndGroups();
  }


  zaposleni : Radnik[];
  images=[]

  getAllZaposleni(){
    this.zaposleniService.getAllZaposleni().subscribe( (radnici: Radnik[]) => {
      this.zaposleni=radnici;
      this.zaposleni.forEach(el=> this.getImage(el));

    })
  }
  getImage(zaposleni:Radnik){
     this.imgService.getProfileImageFromService(zaposleni.slika, (res)=> {
       this.images[zaposleni.username]=res;
    }, (err)=>{
       console.log(err);
     });
  }
  allInfo=[];

  getPlan(username:string){
      let arr=[];
      
      this.allInfo.forEach(el=> {
         el.plan.forEach(element => {
           if(element.professor == username)
           arr.push(el.info.name +' : ' + element.typee + ' : ' + element.number) 
           
         });
      })
       
      return arr;
  }

  getAllSubjectsAndGroups(){
    this.subjectService.getAllGroupsForAllSubjects().subscribe((res:any)=>{
      this.allInfo=res;
     
       
    })
  }

}
