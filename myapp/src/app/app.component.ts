import { Component, Injectable, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public sidebar = 'sidebar-collapse';
  public checked: boolean = false;
  public theme: string;

  constructor() {

  }

  ngOnInit() {

    if(localStorage.getItem('theme') === 'dark') {
      this.theme = 'theme-dark';
      this.checked = false;
    } else {
      this.theme = '';
      this.checked = true;
    }
    
  }

  sidebarCollapse() {
    if(this.sidebar === '') {
      this.sidebar = 'sidebar-collapse'
    } else {
      this.sidebar = '';
    }
  }

  switchBackground() {
    console.log(this.checked);
    if(!this.checked) {
      localStorage.setItem('theme', 'dark');
      this.theme = 'theme-dark';
    } else {
      localStorage.setItem('theme', 'light');
      this.theme = ''
    }
  }

}
