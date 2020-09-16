import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Place } from '../models/place';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const places: Place[] = [
      { id: 1, name: 'Madrid', lat: 40.439784, log: -3.693193 },
      { id: 2, name: 'Barcelona', lat: 41.364357, log: 2.139997 },
      { id: 3, name: 'Vecindario', lat: 27.849983, log: -15.440632 },
      { id: 4, name: 'Brugos', lat: 42.344518, log: -3.703110 },
      { id: 5, name: 'Palencia', lat: 42.003713, log: -4.519916 }
    ]
    return {places};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(places: Place[]): number {
    return places.length > 0 ? Math.max(...places.map(place => place.id)) + 1 : 11;
  }
}
