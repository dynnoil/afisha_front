import { Injectable } from '@angular/core';
import { LocalStorageService } from 'angular-2-local-storage';

import { Event } from '../model/event';

@Injectable()
export class EventStorageService {
    private lastChanged: Date;

    constructor(private localStorageService: LocalStorageService) { }

    clearAll(): boolean {
        this.lastChanged = new Date();
        return this.localStorageService.clearAll();
    }

    remove(key: string): boolean {
        this.lastChanged = new Date();
        return this.localStorageService.remove(key);
    };

    set(key: string, value: Event): boolean {
        this.lastChanged = new Date();
        return this.localStorageService.set(key, value);
    }

    get(key: string): Event {
        return this.localStorageService.get<Event>(key)
    }

    getAll(): Array<Event> {
        let events = new Array<Event>();
        this.localStorageService.keys().forEach(key => {
            events.push(this.get(key));
        });
        return events;
    }

    isEmpty(): boolean {
        return this.localStorageService.length() === 0;
    }

    getLastChanged(): Date {
        return this.lastChanged;
    }

}