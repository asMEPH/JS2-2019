import {Component, Input, OnInit} from '@angular/core';
import {Klient} from "../model/klient";

@Component({
  selector: 'app-kasa',
  templateUrl: './kasa.component.html',
  styleUrls: ['./kasa.component.less']
})
export class KasaComponent implements OnInit {
  @Input() nr: string;  //nazwa kasy
  @Input() kolejka: Klient[];
  @Input() stanKasy: number = 0;   //ustalamy, że to będzie liczba, i na początku ma być zero

  constructor() { }

  ngOnInit() {
  }

  removeClient() {
    if (this.kolejka.length==0) return;
    this.kolejka.pop();
    this.stanKasy += 10;
  }

  addClient(aa: string) {
    this.kolejka.push(new Klient('aa',0));
  }
}


/**
 * - dodać zmienną clients do hali, ustawić początkowo na = ['aa']
 * - wyświetlić ikonkli klientów pod obrazkiem półki warzywnej
 * - dodać przycisk dodawania klientów
 * - dodać przycisk "klient kończy zakupy"
 *
 *
 */
