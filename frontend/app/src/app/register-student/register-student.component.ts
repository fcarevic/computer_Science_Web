import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-student',
  templateUrl: './register-student.component.html',
  styleUrls: ['./register-student.component.css']
})
export class RegisterStudentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  username: String;
  password: String;
  indeks: String;
  tipStudija: String;
  ime: String;
  prezime: String;
  status :String;

  register(){
    alert(this.status);
  }

}
