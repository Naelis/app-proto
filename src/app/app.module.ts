import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { EventsComponent } from './events/events.component';
import { LocationComponent } from './location/location.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CalendarComponent } from './calendar/calendar.component';
import {HttpClientModule} from '@angular/common/http';
import {LookupService} from './services/lookup.service';
import {ServicemapService} from './services/servicemap.service';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { MenuComponent } from './menu/menu.component';
import { ResultsComponent } from './results/results.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
    LocationComponent,
    NavbarComponent,
    CalendarComponent,
    SearchbarComponent,
    MenuComponent,
    ResultsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
      HttpClientModule,
      FormsModule
  ],
  providers: [LookupService, ServicemapService],
  bootstrap: [AppComponent]
})
export class AppModule { }
