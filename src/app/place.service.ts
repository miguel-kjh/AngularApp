import { Injectable } from '@angular/core';
import { Place } from "../app/models/place";
import { PLACES } from "../app/models/mock-places";
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})


export class PlaceService {

  private apiUrl = 'api/places'; 
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  getPlaces(): Observable<Place[]>{
    return this.http.get<Place[]>(this.apiUrl).pipe(
      tap(_ => this.log('fetched places')),
      catchError(this.handleError<Place[]>('getPlaces', []))
    );
  }

  getPlace(id: number): Observable<Place>{
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Place>(url).pipe(
      tap(_ => this.log(`fetched place id=${id}`)),
      catchError(this.handleError<Place>(`getPlaces id=${id}`))
    );
  }

  updatePlace(place: Place): Observable<any> {
    return this.http.put(this.apiUrl, place, this.httpOptions).pipe(
      tap(_ => this.log(`updated places id=${place.id}`)),
      catchError(this.handleError<any>('updateHero'))
    );
  }

  addPlace(place: Place): Observable<Place> {
    return this.http.post<Place>(this.apiUrl, place, this.httpOptions).pipe(
      tap((newPlace: Place) => this.log(`added hero w/ id=${newPlace.id}`)),
      catchError(this.handleError<Place>('addHero'))
    );
  }

  deleteHero(place: Place | number): Observable<Place> {
    const id = typeof place === 'number' ? place : place.id;
    const url = `${this.apiUrl}/${id}`;
  
    return this.http.delete<Place>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted hero id=${id}`)),
      catchError(this.handleError<Place>('deleteHero'))
    );
  }

  searchPlaces(term: string): Observable<Place[]> {
    if (!term.trim()) {
      // if not search term, return empty array.
      return of([]);
    }
    return this.http.get<Place[]>(`${this.apiUrl}/?name=${term}`).pipe(
      tap(x => x.length ?
         this.log(`found places matching "${term}"`) :
         this.log(`no places matching "${term}"`)),
      catchError(this.handleError<Place[]>('searchPlaces', []))
    );
  }

  private log(message: string) {
    this.messageService.add(`PlacesService: ${message}`);
  }
}
