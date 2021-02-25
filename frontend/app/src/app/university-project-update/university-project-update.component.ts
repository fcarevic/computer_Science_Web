import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminServiceService } from '../admin-service.service';
import { UniversityProject } from '../entities/Project';
import { Radnik } from '../entities/radnik';
import { ZaposleniService } from '../zaposleni.service';

@Component({
  selector: 'app-university-project-update',
  templateUrl: './university-project-update.component.html',
  styleUrls: ['./university-project-update.component.css']
})
export class UniversityProjectUpdateComponent implements OnInit {

  constructor(private adminService: AdminServiceService, private activatedRoute: ActivatedRoute, private zaposleniService: ZaposleniService) { }
  project:UniversityProject = new UniversityProject();
  message=null;
  MESSAGE_OK = { style: "success", msg: "Uspesno azurirano" };
  MESSAGE_DANGER = { style: "danger", msg: "Neuspeh" };
  professors: Radnik[]=[];
  ngOnInit(): void {
    this.getAllProjfessors();
    this.activatedRoute.url.subscribe(val=>{
      this.getProject(val[2].path);
    })
  }

  getAllProjfessors(){
    this.zaposleniService.getAllZaposleni().subscribe((res:Radnik[])=>{
      this.professors=res
    })

  }
  getProject(id){
    this.adminService.getUniversityProjectsById(id).subscribe((res:UniversityProject)=>{
       
      this.project=res;
    })
  }
  
  updateProject(){
    
    this.adminService.updateUniversityProjects(this.project).subscribe((res:any)=>{
      if(res && res.nModified==1)
      this.message=this.MESSAGE_OK
      else this.message=this.MESSAGE_DANGER
    })
  }

}
