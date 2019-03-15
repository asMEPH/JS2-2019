import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-zegar',
  templateUrl: './zegar.component.html',
  styleUrls: ['./zegar.component.less']
})
export class ZegarComponent implements OnInit {
  godzina: Date;

  constructor() { }

  ngOnInit() {
    this.refreshHour();
  }
  refreshHour() {
    this.godzina = new Date();
  }

}
