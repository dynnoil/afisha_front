import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Event } from '../model/event';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class EventService {
    private eventsUrl = 'api/events';

    constructor(private http: Http) { }

    getEvents(): Promise<Event[]> {
        return this.http.get(this.eventsUrl)
            .toPromise()
            .then(response => response.json().data as Event[])
            .catch(this.handleError);
    }

    getEvent(id: number): Promise<Event> {
        const url = `${this.eventsUrl}/${id}`;
        return this.http.get(url)
            .toPromise()
            .then(response => response.json().data as Event)
            .catch(this.handleError);
    }


    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }

}