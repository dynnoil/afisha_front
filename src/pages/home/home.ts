import { Component, OnInit } from '@angular/core';
import { TitleCasePipe } from '@angular/common';
import { NavController, ModalController, ActionSheetController, ToastController } from 'ionic-angular';
import { LocalStorageService } from 'angular-2-local-storage';

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
    private toastCtrl: ToastController,
    private eventService: EventService,
    private sharingService: SharingService,
    private localStorageService: LocalStorageService
  ) { }

  ngOnInit(): void {
    this.events = this.eventService.getEvents();
  }

  onEventClicked(eventId: number): void {
    let modal = this.modalCtrl.create(DetailsPage, { eventId: eventId });
    modal.present();
  }

  onFavoritesClicked(eventId: number): void {
    let event = this.events.find(event => event.id == eventId);
    if (event) {
      this.localStorageService.set(eventId.toString(), event);
      console.log("Added event to Local Storage!");
    }
    this.presentToast("Added to Favorites!");
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
        this.presentToast("Cancelled!");
      }
    };
    let buttons: any[] = [];
    let titleCasePipe = new TitleCasePipe();
    availableSocialNetworks.forEach(network => {
      buttons.push({
        text: titleCasePipe.transform(network),
        handler: () => {
          this.sharingService.share(network, this.events.find(event => event.id == eventId).link);
          this.presentToast("Shared!");
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

  presentToast(message: string) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 2000,
      position: "middle"
    });
    toast.present(toast);
  }

}
