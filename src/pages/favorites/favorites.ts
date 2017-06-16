import { Component, OnInit } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { LocalStorageService } from 'angular-2-local-storage';

import { Event } from '../../model/event';
import { DetailsPage } from '../../pages/details/details';

@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html'
})
export class FavoritesPage implements OnInit {
  events: Event[] = [];

  constructor(
    private navCtrl: NavController,
    private modalCtrl: ModalController,
    private localStorageService: LocalStorageService
  ) { }

  ngOnInit(): void {
    if (this.localStorageService.length) {
      let keys: string[] = this.localStorageService.keys();
      keys.forEach(key => {
        this.events.push(this.localStorageService.get<Event>(key));
      });
    }
  }

  onEventClicked(eventId: number): void {
    let modal = this.modalCtrl.create(DetailsPage, { eventId: eventId });
    modal.present();
  }

}
