import { Component } from '@angular/core';

import { NavbarMainComponent } from './navbar-main/navbar-main.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'app';

   typee=localStorage.getItem('user')
}
