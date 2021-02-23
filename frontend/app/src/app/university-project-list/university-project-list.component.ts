import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminServiceService } from '../admin-service.service';
import { UniversityProject } from '../entities/Project';
import { Radnik } from '../entities/radnik';
import { ZaposleniService } from '../zaposleni.service';

@Component({
  selector: 'app-university-project-list',
  templateUrl: './university-project-list.component.html',
  styleUrls: ['./university-project-list.component.css']
})
export class UniversityProjectListComponent implements OnInit {

  constructor(private adminService: AdminServiceService, private router:Router, private acitvatedRoute:ActivatedRoute, private zaposleniService:ZaposleniService) { }
  projects:UniversityProject[]=[];
  typee='';
  allProfessors: Radnik[]= []

  ngOnInit(): void {
    this.typee= localStorage.getItem('tip');
    this.acitvatedRoute.url.subscribe(val=>{
      let code = 'university';
      if(!val[1]) code = 'dummy';
      this.getAllProjects(code);
   
    })
    this.getAllProfessors();
  }
  getAllProjects(type:string){
    this.adminService.getAllUniversityProjects().subscribe((res:UniversityProject[])=>{
         this.projects=res;
          if(type=='university')
          this.projects= this.projects.filter(el=> el.typee=='Univerzitetski')
          else 
          this.projects= this.projects.filter(el=> el.typee!='Univerzitetski')
    })
  }
  getAllProfessors(){
    this.zaposleniService.getAllZaposleni().subscribe((res:Radnik[])=>{
      this.allProfessors=res;
    })
  }
  updateProject(project: UniversityProject){
    this.router.navigate(['/projects/update/'+project.id]);

  }
  getName(username){
    let radnik = this.allProfessors.filter(el=> el.username==username)[0];
    return radnik.ime+' '+radnik.prezime;
  }
  deleteProject(project: UniversityProject){
    this.adminService.deleteUniversityProjects(project).subscribe((res:any)=>{
      location.reload();
    })
    
  }
}
