import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.less']
})
export class ContactComponent implements OnInit {
  adres = "Avenida de la Victioria 1, Lima, Peru";
  houseNumber = 2;
  private x = 0;
  userzy = ['Wu Xiaoli','Nash Gordon','Aleksii Burow'];
  constructor() { }

  ngOnInit() {
    console.log('klasa kontaktowa zostala zbudowana')
  }

  mojaAkcja() {
    this.x = this.x + 1;
    console.log('akcja wykonana! ' + this.x + ' razy');
  }

}
