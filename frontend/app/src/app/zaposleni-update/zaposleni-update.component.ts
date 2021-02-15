import { Component, ElementRef, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FileUploader } from 'ng2-file-upload';
import { Radnik } from '../entities/radnik';
import { ZaposleniService } from '../zaposleni.service';

@Component({
  selector: 'app-zaposleni-update',
  templateUrl: './zaposleni-update.component.html',
  styleUrls: ['./zaposleni-update.component.css']
})
export class ZaposleniUpdateComponent implements OnInit {
  MESSAGE_OK = { style: "success", msg: "Uspesno azurirano" };
  MESSAGE_DANGER_EXIST_USER = { style: "danger", msg: "Korisnicko ime zauzeto" };
  MESSAGE_DANGER = { style: "danger", msg: "Neuspeh" };
  MESSAGE_DANGER_PHOTO_NAME = { style: "danger", msg: "Pre izbora slike, izabrati username, slika nije upload-ovana" };
  MESSAGE_DANGER_PASSWORD= { style: "danger", msg: "Sifra nije potvrdjena" };
  



  constructor(private zaposleniService: ZaposleniService, private activatedRoute: ActivatedRoute, private el: ElementRef) { }

  ngOnInit(): void {
    this.activatedRoute.url.subscribe((value: any) => {
      this.getZaposleniByUsername(value[2].path);

    });


    this.uploader.onAfterAddingFile = (file)=> { 
      if(!this.zaposleni.username){
        this.message=this.MESSAGE_DANGER_PHOTO_NAME;
        return;
      }
      file.file.name = this.zaposleni.username  + '-'+file.file.name;
      this.zaposleni.slika=file.file.name;
      this.lastUsername=this.zaposleni.username;
      file.withCredentials = false; };
    this.uploader.onCompleteItem = (item:any, response:any, status:any, headers:any) => {
      console.log("ImageUpload:uploaded:", item, status, response);
  };

  }
  URL = 'http://localhost:4000/uploadphotos';
  uploader:FileUploader = new FileUploader({url: this.URL, itemAlias: 'file'});
  lastUsername='';
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
        let inputElFIles = this.el.nativeElement.querySelector("#file");
        let count = inputElFIles.files.length;
        if(count>0 && count==1 && this.lastUsername && this.lastUsername==this.zaposleni.username ){
          this.uploader.uploadAll();
        } else if(count>0 && count==1){
              this.message=this.MESSAGE_DANGER_PHOTO_NAME;
        }
      } else {
        this.message = this.MESSAGE_DANGER;

      }
    });
  }
  checkFields(){
    if(!this.zaposleni.username || this.zaposleni.username==''){
      this.message = { style: "danger", msg: "Nije uneto korisnicko ime" };
      return false;
     }
     if(!this.zaposleni.password || this.zaposleni.password==''){
      this.message = { style: "danger", msg: "Nije uneta lozinka" };
      return false;
     }
     if(!this.zaposleni.ime || this.zaposleni.ime==''){
      this.message = { style: "danger", msg: "Nije uneto ime" };
      return false;
     }
     if(!this.zaposleni.prezime || this.zaposleni.prezime==''){
      this.message = { style: "danger", msg: "Nije uneto prezime" };
      return false;
     }
     if(!this.zaposleni.adresa || this.zaposleni.adresa==''){
      this.message = { style: "danger", msg: "Nije uneta adresa" };
      return false;
     }
  }
  getZaposleniByUsername(username) {
    if(!this.checkFields()) return;
    this.zaposleniService.getZaposleniByUsername(username).subscribe((zaposeni: Radnik) => {
      this.zaposleni = zaposeni;
      this.lastUsername=this.zaposleni.username;
     
    });
  }
}
