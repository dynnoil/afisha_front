import { Component, OnInit, DoCheck } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

import { Event } from '../../model/event';
import { DetailsPage } from '../../pages/details/details';
import { EventStorageService } from '../../services/event-storage.service';
import { AlertsService } from '../../services/alerts.service';

@Component({
    selector: 'page-favorites',
    templateUrl: 'favorites.html'
})
export class FavoritesPage implements OnInit, DoCheck {
    private lastChanged: Date;
    events: Event[] = [];

    constructor(
        private navCtrl: NavController,
        private modalCtrl: ModalController,
        private alertsService: AlertsService,
        private eventStorageService: EventStorageService
    ) { }

    ngOnInit(): void {
        if (!this.eventStorageService.isEmpty()) {
            this.events = this.eventStorageService.getAll();
            this.lastChanged = this.eventStorageService.getLastChanged();
        }
    }

    ngDoCheck(): void {
        if (!this.eventStorageService.isEmpty() && this.isStorageChanged()) {
            console.log("Something's canged!");
            this.events = this.eventStorageService.getAll();
            this.lastChanged = this.eventStorageService.getLastChanged();
        } else {
            console.log("Nothing's canged!");
        }
    }

    private isStorageChanged(): boolean {
        return this.lastChanged !== this.eventStorageService.getLastChanged();
    }

    onEventClicked(eventId: number): void {
        let modal = this.modalCtrl.create(DetailsPage, { eventId: eventId });
        modal.present();
    }

    onRemoveClicked(eventId: number) {
        this.eventStorageService.remove(eventId.toString());
        this.events = this.events.filter(event => event.id !== eventId);
    }

    showConfirm() {
        let title = 'Удалить сохраненные события?';
        let message = 'Удаленные события нельзя будет восстановить.';
        this.alertsService.createConfirmAlert(title, message, () => {
            this.eventStorageService.clearAll();
            this.events = [];
        });
    }

}
