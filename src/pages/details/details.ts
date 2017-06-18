import { Component, OnInit } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';

import { Event } from '../../model/event';

import { EventService } from '../../services/event.service';

@Component({
    selector: 'details-page',
    templateUrl: './details.html'
})
export class DetailsPage implements OnInit {
    event: Event;

    lat: number = 51.678418;
    lng: number = 7.809007;

    constructor(
        private params: NavParams,
        private viewCtrl: ViewController,
        private eventService: EventService
    ) { }

    ngOnInit(): void {
        let eventId: number = this.params.get('eventId');
        this.event = this.eventService.getEvent(eventId);
    }

    dismiss() {
        this.viewCtrl.dismiss();
    }
}