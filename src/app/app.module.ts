import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemsComponent } from './items/items.component';
import {HttpClientModule} from '@angular/common/http';
import { LandingComponent } from './landing/landing.component';
import { ItemSearchComponent } from './item-search/item-search.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    LandingComponent,
    ItemSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
