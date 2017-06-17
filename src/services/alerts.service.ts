import { Injectable } from '@angular/core';
import { AlertController } from 'ionic-angular';

@Injectable()
export class AlertsService {
    constructor(private alertCtrl: AlertController) { }

    createConfirmAlert(titile: string, msg: string, yesCallback: () => void, noCallback?: () => void) {
        let confirm = this.alertCtrl.create({
            title: titile,
            message: msg,
            buttons: [
                {
                    text: 'No',
                    handler: () => { 
                        if (noCallback) {
                            noCallback();
                        }
                    }
                },
                {
                    text: 'Yes',
                    handler: () => {
                        yesCallback();
                    }
                }
            ]
        });
        confirm.present();
    }
}