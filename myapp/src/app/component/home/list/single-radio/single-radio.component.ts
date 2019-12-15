import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { MessageService } from './../../../../service/message.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: "app-single-radio",
  templateUrl: "./single-radio.component.html",
  styleUrls: ["./single-radio.component.scss"]
})
export class SingleRadioComponent implements OnInit {
  @Input() data: any;
  @Input() allRadioStation: any;
  @Output() backEvent = new EventEmitter();
  public favoriteInd = '';
  public favorite = [];

  constructor(private message: MessageService, private route: ActivatedRoute,) { }

  ngOnInit() {
    console.log(window.innerHeight);
    this.checkFavoriteList();
    console.log(this.route.snapshot.params);

    this.message.getRemoveFavoriteItem().subscribe(
      mess => {
        this.favoriteInd = '';
        this.checkFavoriteList();
      }
    );
  }

  backToPreviousPage() {
    this.backEvent.emit();
  }

  selectedRadioStation(selected) {
    this.data = selected;
  }

  goToLink() {
    window.open(this.data.website, "_blank");
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
