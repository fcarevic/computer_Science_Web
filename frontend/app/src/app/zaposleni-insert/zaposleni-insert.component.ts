import { Component, OnInit } from '@angular/core';
import { Radnik } from '../entities/radnik';
import { ZaposleniService } from '../zaposleni.service';

@Component({
  selector: 'app-zaposleni-insert',
  templateUrl: './zaposleni-insert.component.html',
  styleUrls: ['./zaposleni-insert.component.css']
})
export class ZaposleniInsertComponent implements OnInit {
  MESSAGE_OK = { style: "success", msg: "Uspesno azurirano" };
  MESSAGE_DANGER_EXIST_USER = { style: "danger", msg: "Korisnicko ime zauzeto" };
  MESSAGE_DANGER = { style: "danger", msg: "Neuspeh" };



  constructor(private zaposleniService: ZaposleniService) { }

  ngOnInit(): void {
  }
  zaposleni = new Radnik();
  message = null;
  zvanja = [
    'Redovni profesor',
    'Asistent',
    'Saradnik u nastavi',
    'Vanredni profesor'
  ]
  insertZaposleni() {
    this.zaposleniService.insertZaposleni(this.zaposleni).subscribe(res => {
      alert(JSON.stringify(res));

      if (res['status'] && res['status'] != 'not_ok') {
        this.message = this.MESSAGE_OK;
      } else if (res['status'] && res['status'] == 'not_ok') {
        this.message = this.MESSAGE_DANGER_EXIST_USER;

      } else this.message = this.MESSAGE_DANGER;
    })
  }

}
