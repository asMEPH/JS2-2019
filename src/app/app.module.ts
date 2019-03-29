import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { MenuComponent } from './menu/menu.component';
import { ZegarComponent } from './zegar/zegar.component';
import { TypewriterComponent } from './typewriter/typewriter.component';
import { BiedronkaComponent } from './biedronka/biedronka.component';
import { KasaComponent } from './kasa/kasa.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    MenuComponent,
    ZegarComponent,
    TypewriterComponent,
    BiedronkaComponent,
    KasaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [MenuComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
