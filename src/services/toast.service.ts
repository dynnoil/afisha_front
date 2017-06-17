import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';

@Injectable()
export class ToastService {
    constructor(private toastCtrl: ToastController) { }

    createToast(message: string) {
        let toast = this.toastCtrl.create({
            message: message,
            duration: 2000,
            position: "middle"
        });
        toast.present(toast);
    }
}