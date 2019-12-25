import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/service/app.service';
import { Router } from '@angular/router';

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
  public selectedRadio: any;

  constructor(private service: AppService, private router: Router) {

  }

  ngOnInit() {
    this.service.getConfigurations('station', 'popular').subscribe(
      data => {
        console.log(data);
        this.popularRadio = data;
      }
    )
  }

  clickRadioDetails(selected) {
    this.router.navigate(['radio/popular/' + selected.title.split(' ').join('_') ]);
  }

  back() {
    this.router.navigate(['/']);
  }

  

}
