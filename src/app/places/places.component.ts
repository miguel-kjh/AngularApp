import { Component, OnInit } from '@angular/core';
import { PlaceService } from "../place.service";
import { Place } from '../models/place';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.css']
})
export class PlacesComponent implements OnInit {

  places: Place[];

  constructor(
    private placeService: PlaceService,
    private messageService: MessageService
    ) { }

  ngOnInit(): void {
    this.getPlaces();
  }

  selectPlace: Place;
  onSelect(place: Place): void {
    this.selectPlace = place;
    this.messageService.add(`Places Component: slected place id id=${place.id}`);
  }

  getPlaces(): void {
    this.placeService.getPlaces().subscribe(
      places => this.places = places
    );
  }

}
