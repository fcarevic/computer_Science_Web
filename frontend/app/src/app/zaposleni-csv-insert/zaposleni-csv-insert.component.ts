import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Radnik } from '../entities/radnik';
import { ZaposleniService } from '../zaposleni.service';

@Component({
  selector: 'app-zaposleni-csv-insert',
  templateUrl: './zaposleni-csv-insert.component.html',
  styleUrls: ['./zaposleni-csv-insert.component.css']
})
export class ZaposleniCsvInsertComponent implements OnInit {

  constructor(private router: Router, private zaposleniService: ZaposleniService) { }

  ngOnInit(): void {
  }
  radnici: Radnik[]=[];

  change($event:any){
    let reader = new FileReader();
    reader.readAsText($event.target.files[0])
    reader.onload = ()=>{
      let data = reader.result;
      this.parseData(<string>data);
    }
  } 

  parseData(res:string){
    let lines = res.split('\n')
    lines.forEach(line=>{
       let radnik= new Radnik();
       let data = line.split(',');
       if(data.length==8){ 
       radnik.username = data[0].trim();
       radnik.password = data[1].trim();
       radnik.ime = data[2].trim();
       radnik.prezime = data[3].trim();
       radnik.zvanje = data[4].trim();
       radnik.adresa = data[5].trim();
       radnik.kabinet =data[6].trim();
       radnik.firstLogin=true;
       radnik.status = data[7].trim();
       this.radnici.push(radnik);
       }

    })

  }
  cnt=0;
  addAll(){
    this.radnici.forEach(el=>{
      this.zaposleniService.insertZaposleni(el).subscribe(res=>{
        this.cnt++;
        if(this.cnt==this.radnici.length)
          this.router.navigate(['/employees'])
      })
    })
    
  

  }
}
