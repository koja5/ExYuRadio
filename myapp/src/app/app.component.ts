import { Component, Injectable, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public sidebar = 'sidebar-collapse';
  constructor() {

  }

  ngOnInit() {
    
  }

  sidebarCollapse() {
    if(this.sidebar === '') {
      this.sidebar = 'sidebar-collapse'
    } else {
      this.sidebar = '';
    }
  }

}
