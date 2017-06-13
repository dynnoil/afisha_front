import { Component, Input } from '@angular/core';
import { ModalController } from 'ionic-angular';

import { Event } from '../../model/event';
import { DetailsPage } from '../../pages/details/details';

@Component({
  selector: 'event-card',
  templateUrl: './event-card.component.html'
})
export class EventCardComponent {
  @Input() event: Event;

  constructor(
    private modalCtrl: ModalController
  ) { }

  gotoDetail(eventId) {
    let modal = this.modalCtrl.create(DetailsPage, eventId);
    modal.present();
  }
}