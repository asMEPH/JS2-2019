import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-kasa',
  templateUrl: './kasa.component.html',
  styleUrls: ['./kasa.component.less']
})
export class KasaComponent implements OnInit {
  @Input() nr: string;
  clients: string[];
  @Input() stanKasy: number = 0;

  constructor() { }

  ngOnInit() {
    this.clients = ['klient1',''];
  }

  removeClient() {
    this.clients = this.clients.slice(0,-1);
    this.stanKasy = this.stanKasy + 10;
  }


}
