import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {

  constructor() { }

  username : String;
  password : String;
  

  ngOnInit(): void {
  }

  login(){
    alert(this.username);
    
  }
}
