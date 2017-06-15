import { Component, Input } from '@angular/core';
import { ModalController } from 'ionic-angular';

import { Event } from '../../model/event';
import { DetailsPage } from '../../pages/details/details';
import { SharingService } from '../../services/sharing.service';

@Component({
    selector: 'event-card',
    templateUrl: './event-card.component.html'
})
export class EventCardComponent {
    @Input() event: Event;

    constructor(
        private modalCtrl: ModalController,
        private sharingService: SharingService
    ) { }

    share(): void {
        //let networks: string[] = this.sharingService.getAvailableSocialNetworks();
        this.sharingService.share('telegram', "Hello, world!");
    }

    gotoDetail(eventId): void {
        let modal = this.modalCtrl.create(DetailsPage, eventId);
        modal.present();
    }
}