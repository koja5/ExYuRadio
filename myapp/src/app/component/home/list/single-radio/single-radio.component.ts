import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { MessageService } from './../../../../service/message.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from 'src/app/service/app.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: "app-single-radio",
  templateUrl: "./single-radio.component.html",
  styleUrls: ["./single-radio.component.scss"]
})
export class SingleRadioComponent implements OnInit {
  public data: any;
  public allRadioStation: any;
  @Output() backEvent = new EventEmitter();
  public favoriteInd = '';
  public favorite = [];
  public href: any;

  constructor(private message: MessageService, private route: ActivatedRoute, private service: AppService, private router: Router, private toastr: ToastrService) { }

  ngOnInit() {
    console.log(window.innerHeight);
    this.checkFavoriteList();
    console.log(this.route);
    this.href = window.location.href;

    this.message.getRemoveFavoriteItem().subscribe(
      mess => {
        this.favoriteInd = '';
        this.checkFavoriteList();
      }
    );

    this.service.getConfigurations('station', this.route.snapshot.params.country).subscribe(
      data => {
        this.allRadioStation = data['stations'];
        this.data = this.getStationData(data);
      }
    );
  }

  getStationData(data) {
    for(let i = 0; i < data.stations.length; i++) {
      if(data.stations[i].title.split(' ').join('_') === this.route.snapshot.params.name) {
        return data.stations[i];
      }
    }

    return null;
  }

  backToPreviousPage() {
    this.router.navigate(['/' + this.route.snapshot.params.country]);
  }

  selectedRadioStation(selected) {
    this.router.navigate(['/radio/' + this.route.snapshot.params.country + '/' + selected.title.split(' ').join('_') ])
    this.ngOnInit();
  }

  goToLink() {
    window.open(this.data.website, "_blank");
  }

  copyLink() {
    const inputElement = window.location.href.split(' ').join('_');
    let selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = inputElement;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
    this.toastr.info('Link radio stanice je uspešno kopiran!', '', {
      timeOut: 3000
    });
  }

  addFavorite() {
    if (this.favoriteInd === '') {
      if (localStorage.getItem('favorite') !== null && localStorage.getItem('favorite') !== undefined) {
        this.favorite = JSON.parse(localStorage.getItem('favorite'));
        this.favorite.push(this.data);
        localStorage.setItem('favorite', JSON.stringify(this.favorite));
      } else {
        this.favorite.push(this.data);
        localStorage.setItem('favorite', JSON.stringify(this.favorite));
      }
      this.favoriteInd = 'favoriteItem';
    } else {
      if (localStorage.getItem('favorite') !== null && localStorage.getItem('favorite') !== undefined) {
        this.favorite = JSON.parse(localStorage.getItem('favorite'));
        for(let i = 0; i < this.favorite.length; i++) {
          if(this.favorite[i].url === this.data.url) {
            this.favorite.splice(i, 1);
            break;
          }
        }
        localStorage.setItem('favorite', JSON.stringify(this.favorite));
        this.favoriteInd = '';
      }
    }
    
    this.message.sendFavoriteItem();
  }

  checkFavoriteList() {
    if (localStorage.getItem('favorite') !== null && localStorage.getItem('favorite') !== undefined) {
      this.favorite = JSON.parse(localStorage.getItem('favorite'));
      for (let i = 0; i < this.favorite.length; i++) {
        if (this.favorite[i].url === this.data.url) {
          this.favoriteInd = 'favoriteItem';
          break;
        }
      }
    }
  }
}
