import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  godzina: Date;
  name: string;
  constructor() { }

  ngOnInit() {
    this.godzina = new Date();
  }

  refreshHour() {
    this.godzina = new Date();
  }

}
