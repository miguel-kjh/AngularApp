import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Place } from "../models/place";
import { PlaceService } from "../services/place.service";

@Component({
  selector: 'app-place-from',
  templateUrl: './place-from.component.html',
  styleUrls: ['./place-from.component.css']
})
export class PlaceFromComponent implements OnInit {

  message = '';

  constructor(
    private location: Location,
    private placeService: PlaceService
    ) { }

  goBack(): void{
    this.location.back();
  }

  add(name: string, lat: number, log: number): void {
    name = name.trim();
    if (!name) { return; }
    console.log({ name, lat, log });
    this.placeService.addPlace({ name, lat, log } as Place).subscribe(
      place => place ? this.message = name + " added" : this.message = name + " did not added"
    );
  }

  ngOnInit(): void {
  }

}
