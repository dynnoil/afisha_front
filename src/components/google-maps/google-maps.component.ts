import { Component, Input } from '@angular/core';
import { Platform } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

@Component({
    selector: 'google-maps',
    templateUrl: 'google-maps.component.html',
    providers: [Geolocation]
})
export class GoogleMapsComponent {
    @Input() lat: number;
    @Input() lng: number;
    @Input() title: string;

    constructor(private platform: Platform, private geolocation: Geolocation) {
        this.title = 'Vologda';
        this.platform.ready().then(() => {
            this.geolocation.getCurrentPosition().then((resp) => {
                this.lat = resp.coords.latitude;
                this.lng = resp.coords.longitude;
            }).catch((error) => {
                console.log('Error getting location', error);
                this.lat = 0;
                this.lng = 0;
            });
        });
    }

}
