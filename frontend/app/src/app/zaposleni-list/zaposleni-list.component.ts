import { Component, OnInit } from '@angular/core';
import { Radnik } from '../entities/radnik';
import { FileServiceService } from '../file-service.service';
import { ZaposleniService } from '../zaposleni.service';

@Component({
  selector: 'app-zaposleni-list',
  templateUrl: './zaposleni-list.component.html',
  styleUrls: ['./zaposleni-list.component.css']
})
export class ZaposleniListComponent implements OnInit {

  constructor(private zaposleniService: ZaposleniService, private imgService: FileServiceService) {
    this.getAllZaposleni();
   }

  ngOnInit(): void {
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

}
