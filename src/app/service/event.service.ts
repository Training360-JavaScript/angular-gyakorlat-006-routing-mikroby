import { Injectable } from '@angular/core';
import { Event } from '../model/event';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor() { }

  getAll(): Event[] {

    const events: Event[] = [
      {
        // name: 'Crocodile Dundee',
        name: 'login',
        date: '2021.01.06',
        time: '15:12:10',
        location: {
          address: '21st Baker street',
          city: 'Brisbane',
          country: 'Australia'
        },
      },
      {
        // name: 'Indiana Jones',
        name: 'remove entry',
        date: '2021.01.16',
        time: '10:13:12',
        location: {
          address: '3rd London street',
          city: 'Princeton',
          country: 'New Jersey, USA'
        },
      },
      {
        // name: 'Hercule Poirot',
        name: 'logout',
        date: '2021.01.20',
        time: '19:15:02',
        location: {
          address: '25th Creep street',
          city: 'London',
          country: 'England, UK'
        }
      }
    ]

    return events;

  }
}
