import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../admin-service.service';
import { UniversityProject } from '../entities/Project';
import { Radnik } from '../entities/radnik';
import { ZaposleniService } from '../zaposleni.service';

@Component({
  selector: 'app-university-project-insert',
  templateUrl: './university-project-insert.component.html',
  styleUrls: ['./university-project-insert.component.css']
})
export class UniversityProjectInsertComponent implements OnInit {

  constructor(private adminService:AdminServiceService, private zaposleniService:ZaposleniService) { }

  ngOnInit(): void {
    this.getAllProjects();
    this.getAllProjfessors();
  }
  allProjects: UniversityProject[];
  project:UniversityProject = new UniversityProject();
  message=null;
  MESSAGE_OK = { style: "success", msg: "Uspesno azurirano" };
  MESSAGE_DANGER = { style: "danger", msg: "Neuspeh" };
  professors: Radnik[]=[];
  types= ['Univerzitetski', 'Diplomski rad', 'Master rad', 'Doktorski rad']
  getAllProjects(){
    this.adminService.getAllUniversityProjects().subscribe((res:UniversityProject[])=>{
          this.allProjects=res;
    })
  }
  getAllProjfessors(){
    this.zaposleniService.getAllZaposleni().subscribe((res:Radnik[])=>{
      this.professors=res
    })

  }
  getId(){
    let max=0;
    this.allProjects.forEach(el=>{
       if(max<el.id) max=el.id
    })
    return max+1;
  }

  insertProject(){
    this.project.id=this.getId();
    this.adminService.insertUniversityProjects(this.project).subscribe((res:any)=>{
      this.message=this.MESSAGE_OK
    })
  }



}
