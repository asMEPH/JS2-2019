import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-typewriter',
  templateUrl: './typewriter.component.html',
  styleUrls: ['./typewriter.component.less']
})
export class TypewriterComponent implements OnInit {
  napisany: string;
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
    this.napisany += napis;
  }
  utnijOstatnia(){
    this.napisany = this.napisany.slice(0,-1);
  }
}
