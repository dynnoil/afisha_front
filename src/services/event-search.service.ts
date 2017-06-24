import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Event } from '../model/event';

@Injectable()
export class EventSearchService {

    constructor(private http: Http) { }

    search(term: string): Observable<Event[]> {
        return this.http
            .get(`api/heroes/?name=${term}`)
            .map(response => response.json().data as Event[]);
    }
}