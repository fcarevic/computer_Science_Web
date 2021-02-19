import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'vertical-menu',
  templateUrl: './vertical-menu.component.html',
  styleUrls: ['./vertical-menu.component.css']
})
export class VerticalMenuComponent implements OnInit {

  constructor() { }
 typee='';
  ngOnInit(): void {
    if(localStorage.getItem('tip')){}
    this.typee=localStorage.getItem('tip')
  

  }

}
