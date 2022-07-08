import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor() { }

  getPeople(): Observable<any>{
    let peopleArray = [
      {
        firstName: 'Alexandre',
        lastName: 'Melo',
        age: 35
      },
      {
        firstName: 'Sabrina',
        lastName: 'Melo',
        age: 35
      },
      {
        firstName: 'Gustavo',
        lastName: 'Melo',
        age: 35
      },
      {
        firstName: 'Nicholas',
        lastName: 'Melo',
        age: 35
      },
      {
        firstName: 'Alicia',
        lastName: 'Melo',
        age: 35
      },
    ]

    return of (peopleArray);
  }
}
