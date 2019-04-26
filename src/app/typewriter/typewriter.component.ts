import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-typewriter',
  templateUrl: './typewriter.component.html',
  styleUrls: ['./typewriter.component.less']
})
export class TypewriterComponent implements OnInit {
  //to są zmienne...
  napisany: string;
  capital: number = 0;  //0: małe, 1: duża, potem małe, 2: ciągle duże


  constructor() { }

  ngOnInit() {
    this.napisany = '';
  }

  dodajA() {
    this.napisany += 'a';
  }

  dodajB() {
    this.napisany += 'b';
  }

  dodajNapis(napis: string) {
    if (this.capital>0) {
      napis = napis.toUpperCase();
      //trzeba dodać if .... jeśli jest 1, to ma zamienić na 0
      if (this.capital==1) {
        this.capital = 0;
      }
    } else {
      napis = napis.toLowerCase();
    }
    this.napisany += napis;
  }

  utnijOstatnia() {
    this.napisany = this.napisany.slice(0,-1);
  }

  naDuze() {
    // 0 -> 1 -> 2 -> 0
    this.capital += 1;  //dodajemy 1 do zmiennej capital
    if (this.capital == 3) {
      this.capital = 0;
    }
  }

}
