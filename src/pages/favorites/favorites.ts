import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LocalStorageService } from 'angular-2-local-storage';

import { Event } from '../../model/event';

@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html'
})
export class FavoritesPage implements OnInit {
  events: Event[] = [];

  constructor(private navCtrl: NavController, private localStorageService: LocalStorageService) { }

  ngOnInit(): void {
    if (this.localStorageService.length) {
      let keys: string[] = this.localStorageService.keys();
      keys.forEach(key => {
        this.events.push(this.localStorageService.get<Event>(key));
      });
    }
  }

}
