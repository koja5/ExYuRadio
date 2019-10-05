import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-single-radio',
  templateUrl: './single-radio.component.html',
  styleUrls: ['./single-radio.component.scss']
})
export class SingleRadioComponent implements OnInit {

  @Input() data: any;
  @Output() backEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
    console.log(this.data);
  }

  backToPreviousPage() {
    this.backEvent.emit();
  }

}
