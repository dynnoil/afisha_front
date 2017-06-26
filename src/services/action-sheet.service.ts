import { Injectable } from '@angular/core';
import { TitleCasePipe } from '@angular/common';
import { ActionSheetController } from 'ionic-angular';

import { SharingService } from './sharing.service';

@Injectable()
export class ActionSheetService {
    constructor(
        private actionSheetCtrl: ActionSheetController,
        private sharingService: SharingService
    ) { }

    createShareActionSheet(link: string): void {
        let availableSocialNetworks: string[] = this.sharingService.availableSocialNetworks;
        let buttons: any[] = [];
        let titleCasePipe = new TitleCasePipe();
        availableSocialNetworks.forEach(network => {
            buttons.push({
                text: titleCasePipe.transform(network),
                handler: () => {
                    this.sharingService.share(network, link);
                    //this.presentToast("Shared!");
                    console.log('Shared via ', network);
                }
            });
        });
        buttons.push({
            text: 'Cancel',
            role: 'cancel',
            handler: () => { }
        });
        let actionSheetOptions: any = {
            title: 'Социальные сети',
            buttons: buttons
        };
        let actionSheet = this.actionSheetCtrl.create(actionSheetOptions);
        actionSheet.present();
    }
}