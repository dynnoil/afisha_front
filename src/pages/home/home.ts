import { Component, OnInit } from '@angular/core';
import { NavController, ModalController, ActionSheetController } from 'ionic-angular';

import { Event } from '../../model/event';
import { DetailsPage } from '../../pages/details/details';
import { EventService } from '../../services/event.service';
import { SharingService } from '../../services/sharing.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
  events: Event[];

  constructor(
    private navCtrl: NavController,
    private modalCtrl: ModalController,
    private actionSheetCtrl: ActionSheetController,
    private eventService: EventService,
    private sharingService: SharingService
  ) { }

  ngOnInit(): void {
    this.events = this.eventService.getEvents();
  }

  onEventClicked(eventId: number): void {
    let modal = this.modalCtrl.create(DetailsPage, { eventId: eventId });
    modal.present();
  }

  onShareClicked(eventId: number): void {
    this.presentActionSheet();
  }

  presentActionSheet() {
    let availableSocialNetworks: string[] = this.sharingService.getAvailableSocialNetworks();
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Social Networks',
      buttons: [
        {
          text: 'Destructive',
          role: 'destructive',
          handler: () => {
            console.log('Destructive clicked');
          }
        },
        {
          text: 'Telegram',
          handler: () => {
            console.log('Archive clicked');
            this.sharingService.share('telegram', 'WTF!');
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }
}
