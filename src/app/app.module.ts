import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlacesComponent } from './places/places.component';
import { FormsModule } from '@angular/forms';
import { PlaceDetailComponent } from './place-detail/place-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';
import { PlaceSearchComponent } from './place-search/place-search.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PlaceFromComponent } from './place-from/place-from.component';



@NgModule({
  declarations: [
    AppComponent,
    PlacesComponent,
    PlaceDetailComponent,
    MessagesComponent,
    DashboardComponent,
    PlaceSearchComponent,
    PageNotFoundComponent,
    PlaceFromComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
