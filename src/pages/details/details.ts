import { Component, OnInit } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';
import { Calendar } from '@ionic-native/calendar';

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
        private eventService: EventService,
        private calendar: Calendar
    ) { }

    ngOnInit(): void {
        let eventId: number = this.params.get('eventId');
        this.eventService.getEvent(eventId).then(event => this.event = event);
    }

    remind(): void {
        this.calendar.createEventInteractively(this.event.name, null, null, this.event.startDate, this.event.endDate)
            .then(() => {
                
            }).catch(() => {
                console.log("Google Calendar is not available on your device!");
            });
    }

    dismiss() {
        this.viewCtrl.dismiss();
    }
}