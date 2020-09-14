import { Injectable } from '@angular/core';
import { Place } from "../app/models/place";
import { PLACES } from "../app/models/mock-places";
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';


@Injectable({
  providedIn: 'root'
})
export class PlaceService {

  constructor(private messageService: MessageService) { }

  getPlaces(): Observable<Place[]>{
    this.messageService.add('PlaceService: fetched palces');
    return of(PLACES);
  }
}
