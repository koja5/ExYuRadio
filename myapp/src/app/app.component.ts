import { Component, Injectable, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'management-app-development';
  public msbapTitle = 'Audio Title';
  public msbapAudioUrl = 'http://naxi128.streaming.rs:9150/;*.mp3';   
   
  public msbapDisplayTitle = false; 
  public msbapDisplayVolumeControls = true; 
  public sidebar = 'sidebar-collapse';

  sidebarCollapse() {
    if(this.sidebar === '') {
      this.sidebar = 'sidebar-collapse'
    } else {
      this.sidebar = '';
    }
  }

}
