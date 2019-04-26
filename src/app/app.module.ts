import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { MenuComponent } from './menu/menu.component';
import { ProgressComponent } from './progress/progress.component';
import { ZegarComponent } from './zegar/zegar.component';
import { TypewriterComponent } from './typewriter/typewriter.component';
import { BiedronkaComponent } from './biedronka/biedronka.component';
import { KasaComponent } from './kasa/kasa.component';
import { HalaComponent } from './hala/hala.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    MenuComponent,
    ProgressComponent,
    ZegarComponent,
    TypewriterComponent,
    BiedronkaComponent,
    KasaComponent,
    HalaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [MenuComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
