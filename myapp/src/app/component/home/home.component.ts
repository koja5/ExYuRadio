import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/service/app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title = 'management-app-development';
  public msbapTitle = 'Audio Title';  
   
  public msbapDisplayTitle = false; 
  public msbapDisplayVolumeControls = true; 
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

  

}
