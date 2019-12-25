import { AppService } from './../../../service/app.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public radioStation: any;
  public selectedRadio: any;
  public loading = true;
  constructor(private route: ActivatedRoute, private service: AppService, private router: Router) { }

  ngOnInit() {
    console.log(this.route.snapshot.routeConfig.path);
    const param = this.route.snapshot.routeConfig.path;
    this.service.getConfigurations('station', param).subscribe(
      data => {
        console.log(data);
        this.radioStation = data;
        this.loading = false;
      }
    );
  }

  clickRadioDetails(selected) {
    // this.selectedRadio = selected;
    this.router.navigate(['/radio/' + this.route.snapshot.routeConfig.path + '/' + selected.title.split(' ').join('_') ])
  }

  back() {
    this.selectedRadio = undefined;
  }

}
