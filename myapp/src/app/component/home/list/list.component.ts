import { AppService } from './../../../service/app.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public radioStation: any;

  constructor(private route: ActivatedRoute, private service: AppService) { }

  ngOnInit() {
    console.log(this.route.snapshot.routeConfig.path);
    const param = this.route.snapshot.routeConfig.path;
    this.service.getConfigurations('station', param).subscribe(
      data => {
        this.radioStation = data;
      }
    );
  }

}
