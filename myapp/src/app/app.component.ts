import { Component, Injectable, OnInit } from '@angular/core';
import { AppService } from './service/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'management-app-development';
  public msbapTitle = 'Audio Title';
  public msbapAudioUrl = 'http://naxi128.streaming.rs:9150/;*.mp3';   
   
  public msbapDisplayTitle = false; 
  public msbapDisplayVolumeControls = true; 
  public sidebar = 'sidebar-collapse';
  public popularRadio: any;

  constructor(private service: AppService) {

  }

  ngOnInit() {
    this.service.getConfigurations('station', 'popular').subscribe(
      data => {
        console.log(data);
        this.popularRadio = data;
      }
    )
  }

  sidebarCollapse() {
    if(this.sidebar === '') {
      this.sidebar = 'sidebar-collapse'
    } else {
      this.sidebar = '';
    }
  }

}
