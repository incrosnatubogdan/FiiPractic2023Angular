import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { HeaderSectionComponent } from './header-section/header-section.component';
import { PlusButtonComponent } from './plus-button/plus-button.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    HeaderSectionComponent,
    PlusButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
