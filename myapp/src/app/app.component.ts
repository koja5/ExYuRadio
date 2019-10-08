import { MessageService } from './service/message.service';
import { Component, Injectable, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public sidebar = '';
  public rightSidebar = '';
  public checked: boolean = false;
  public theme: string;
  public favoriteRadionStation: any;

  constructor(private message: MessageService) {

  }

  ngOnInit() {

    if (localStorage.getItem('theme') === 'dark' || localStorage.getItem('theme') === null) {
      this.theme = 'theme-dark';
      this.checked = false;
    } else {
      this.theme = '';
      this.checked = true;
    }

    if(window.innerWidth >= 1024) {
      this.sidebar = 'sidebar-collapse';
    } else {
      this.sidebar = '';
    }



    this.message.getFavoriteItem().subscribe(
      mess => {
        this.getFavoriteMessage();
      }
    )

  }

  getFavoriteMessage() {
    if (localStorage.getItem('favorite') !== null) {
      this.favoriteRadionStation = JSON.parse(localStorage.getItem('favorite'));
    } else {
      this.favoriteRadionStation = [];
    }
  }

  sidebarCollapse() {
    console.log(window.innerWidth);
    if (this.sidebar === '') {
      if (window.innerWidth >= 1024) {
        this.sidebar = 'sidebar-collapse';
      } else {
        this.sidebar = 'sidebar-open';
      }
    } else {
      this.sidebar = '';
    }
  }

  switchBackground() {
    console.log(this.checked);
    if (!this.checked) {
      localStorage.setItem('theme', 'dark');
      this.theme = 'theme-dark';
    } else {
      localStorage.setItem('theme', 'light');
      this.theme = ''
    }
  }

  openFavoriteSidebar() {
    if (this.rightSidebar === '') {
      this.rightSidebar = 'control-sidebar-open';
    } else {
      this.rightSidebar = '';
    }
  }

  removeFromFavorite(index) {
    console.log(index);
    this.favoriteRadionStation.splice(index, 1);
    localStorage.setItem('favorite', JSON.stringify(this.favoriteRadionStation));
    this.message.sendRemoveFavoriteItem();
  }

}
