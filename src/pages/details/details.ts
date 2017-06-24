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

    constructor(
        private params: NavParams,
        private viewCtrl: ViewController,
        private eventService: EventService
    ) { }

    ngOnInit(): void {
        let eventId: number = this.params.get('eventId');
        console.log(eventId);
        this.eventService.getEvent(eventId).then(event => this.event = event);
        console.log(JSON.stringify(this.event));
    }

    dismiss() {
        this.viewCtrl.dismiss();
    }
}