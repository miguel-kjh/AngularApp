import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Place } from './models/place';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const places: Place[] = [
      { id: 1, name: 'Madrid' },
      { id: 2, name: 'Barcelona' },
      { id: 3, name: 'Vecindario' },
      { id: 4, name: 'Brugos' },
      { id: 5, name: 'Palencia' }
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
