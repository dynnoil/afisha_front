import { Component, OnInit } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { Calendar } from '@ionic-native/calendar';

import { Event } from '../../model/event';
import { DetailsPage } from '../../pages/details/details';
import { EventService } from '../../services/event.service';
import { EventStorageService } from '../../services/event-storage.service';
import { ActionSheetService } from '../../services/action-sheet.service';
import { ToastService } from '../../services/toast.service';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage implements OnInit {
    events: Event[];

    constructor(
        private navCtrl: NavController,
        private modalCtrl: ModalController,
        private actionSheetService: ActionSheetService,
        private toastService: ToastService,
        private eventService: EventService,
        private eventStorageService: EventStorageService,
        private calendar: Calendar
    ) { }

    ngOnInit(): void {
        this.eventService.getEvents().then(events => this.events = events);
    }

    onEventClicked(eventId: number): void {
        let modal = this.modalCtrl.create(DetailsPage, { eventId: eventId });
        modal.present();
    }

    onFavoritesClicked(eventId: number): void {
        let event = this.events.find(event => event.id == eventId);
        if (event) {
            this.eventStorageService.set(eventId.toString(), event);
            console.log("Added event to Local Storage!");
        }
        this.toastService.createToast("Added to Favorites!");
    }

    onRemindClicked(eventId: number): void {
        let event = this.events.find(event => event.id == eventId);
        this.calendar.createEventInteractively(event.name, null, null, event.startDate, event.endDate)
            .then((added) => {
                if (added) {
                    this.toastService.createToast("Added to Google Calendar!");
                }
            }).catch(() => {
                console.log("Google Calendar is not available on your device!");
            });
    }

    onShareClicked(eventId: number): void {
        this.presentActionSheet(eventId);
    }

    presentActionSheet(eventId: number) {
        let link = this.events.find(event => event.id == eventId).link;
        this.actionSheetService.createShareActionSheet(link);
    }
}
