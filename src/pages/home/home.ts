import { Component, OnInit } from '@angular/core';
import { TitleCasePipe } from '@angular/common';
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
    this.presentActionSheet(eventId);
  }

  presentActionSheet(eventId: number) {
    let availableSocialNetworks: string[] = this.sharingService.availableSocialNetworks;
    let cancelButton: any = {
      text: 'Cancel',
      role: 'cancel',
      handler: () => {
        console.log('Cancel clicked');
      }
    };
    let buttons: any[] = [];
    let titleCasePipe = new TitleCasePipe();
    availableSocialNetworks.forEach(network => {
      buttons.push({
        text: titleCasePipe.transform(network),
        handler: () => {
          this.sharingService.share(network, this.events.find(event => event.id == eventId).link);
          console.log('Shared via ', network);
        }
      });
    });
    buttons.push(cancelButton);
    let actionSheetOptions: any = {
      title: 'Social Networks',
      buttons: buttons
    };
    let actionSheet = this.actionSheetCtrl.create(actionSheetOptions);
    actionSheet.present();
  }
}
