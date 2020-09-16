import { Component, OnInit } from '@angular/core';
import { PlaceService } from "../services/place.service";
import { Place } from '../models/place';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  places: Place[] = [];

  constructor(private placeService: PlaceService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.placeService.getPlaces()
      .subscribe(places => this.places = places.slice(1, 5));
  }

}
