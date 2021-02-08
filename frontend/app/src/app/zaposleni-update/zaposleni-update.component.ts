import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Radnik } from '../entities/radnik';
import { ZaposleniService } from '../zaposleni.service';

@Component({
  selector: 'app-zaposleni-update',
  templateUrl: './zaposleni-update.component.html',
  styleUrls: ['./zaposleni-update.component.css']
})
export class ZaposleniUpdateComponent implements OnInit {
  MESSAGE_OK = { style: "success", msg: "Uspesno azurirano" };
  MESSAGE_DANGER_PASSWORD = { style: "danger", msg: "Sifra nije ponovljena" };
  MESSAGE_DANGER = { style: "danger", msg: "Neuspeh" };


  constructor(private zaposleniService: ZaposleniService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.url.subscribe((value: any) => {
      this.getZaposleniByUsername(value[2].path);

    });
  }
  zaposleni = new Radnik();
  passwordConfirm = '';
  message = null;
  zvanja = [
    'Redovni profesor',
    'Asistent',
    'Saradnik u nastavi',
    'Vanredni profesor'
  ]
  updateZaposleni() {
    if (this.zaposleni.password != this.passwordConfirm) {
      this.message = this.MESSAGE_DANGER_PASSWORD;
      return;
    }

    this.zaposleniService.updateZaposleni(this.zaposleni).subscribe(res => {
      if (res['nModified'] == 1) {
        this.message = this.MESSAGE_OK;
      } else {
        this.message = this.MESSAGE_DANGER;

      }
    });
  }

  getZaposleniByUsername(username) {
    this.zaposleniService.getZaposleniByUsername(username).subscribe((zaposeni: Radnik) => {
      this.zaposleni = zaposeni;

    });
  }
}
