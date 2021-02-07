import { Component, OnInit } from '@angular/core';
import { Radnik } from '../entities/radnik';
import { ZaposleniService } from '../zaposleni.service';

@Component({
  selector: 'app-zaposleni-list',
  templateUrl: './zaposleni-list.component.html',
  styleUrls: ['./zaposleni-list.component.css']
})
export class ZaposleniListComponent implements OnInit {

  constructor(private zaposleniService: ZaposleniService) {
    this.getAllZaposleni();
   }

  ngOnInit(): void {
  }


  zaposleni : Radnik[];

  getAllZaposleni(){
    this.zaposleniService.getAllZaposleni().subscribe( (radnici: Radnik[]) => {
      this.zaposleni=radnici;
    })
  }

}
