import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Radnik } from '../entities/radnik';
import { FileServiceService } from '../file-service.service';
import { ZaposleniService } from '../zaposleni.service';

@Component({
  selector: 'app-zaposleni-details',
  templateUrl: './zaposleni-details.component.html',
  styleUrls: ['./zaposleni-details.component.css']
})
export class ZaposleniDetailsComponent implements OnInit {

  constructor(private router:Router , private imgService: FileServiceService, private activatedRoute:ActivatedRoute, private zaposleniService:ZaposleniService) { }

  ngOnInit(): void {
     this.activatedRoute.url.subscribe((value:any)=>{
      this.getZaposleniByUsername(value[1].path);

     });
    
  }
  getZaposleniByUsername(username){
    this.zaposleniService.getZaposleniByUsername(username).subscribe((zaposeni:Radnik)=> {
      this.radnik=zaposeni;
      this.getImage(this.radnik);
      
    });
  }

  getImage(zaposleni:Radnik){
    
    this.imgService.getProfileImageFromService(zaposleni.slika, (res)=> {
     
     this.imgUrl=res;
   }, (err)=>{
      console.log(err);
      alert(JSON.stringify(err));
    });
 }
  radnik: Radnik;
  imgUrl='';

}
