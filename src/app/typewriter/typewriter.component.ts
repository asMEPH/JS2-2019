import { Component, OnInit } from '@angular/core';
import {until} from "selenium-webdriver";
import elementIsSelected = until.elementIsSelected;

@Component({
  selector: 'app-typewriter',
  templateUrl: './typewriter.component.html',
  styleUrls: ['./typewriter.component.less']
})
export class TypewriterComponent implements OnInit {
  napisany: string;
  capital: number = 0; //0male, 1duze, 2ciagle duze,





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
      if(this.capital==1){ this.capital=0;}
    } else {
        napis = napis.toLowerCase();
      }

    this.napisany += napis;
  }
  utnijOstatnia(){
    this.napisany = this.napisany.slice(0,-1);
  }
  naDuze() {
   this.capital += 1;
   if (this.capital == 3) {
     this.capital = 0;
   }
  }


}
