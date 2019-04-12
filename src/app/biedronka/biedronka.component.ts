import { Component, OnInit } from '@angular/core';
import {Klient} from "../model/klient";

@Component({
  selector: 'app-biedronka',
  templateUrl: './biedronka.component.html',
  styleUrls: ['./biedronka.component.less']
})
export class BiedronkaComponent implements OnInit {
  kolejki: Klient[][];  //tu mają być klienci czekający w każdej z kas;
  // kolejki[0] to tablica (Klient[]) klientów czekających w kasie nr 0
  liczbaKas = 4;

  constructor() {
    this.kolejki = [];
    for (let i = 0; i < this.liczbaKas; i++) {
      this.kolejki.push([]);
    }
  }

  ngOnInit() {
  }

  generateRandomCheckout() {
    return Math.floor(Math.random() * this.liczbaKas);
  }

  moveClientToCheckout($event: Klient) {
    const wybranaKolejka = this.generateRandomCheckout();
    console.log(`Klient ${$event.name} kończy zakupy; przechodzi do kolejki ${wybranaKolejka}`);
    this.kolejki[wybranaKolejka].push($event);
  }


}
