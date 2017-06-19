import { Component, Input } from '@angular/core';
import { Platform } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

@Component({
    selector: 'google-maps',
    templateUrl: 'google-maps.component.html',
    providers: [Geolocation]
})
export class GoogleMapsComponent {
    private lat: number = 0.0;
    private lng: number = 0.0;

    @Input() place: any;
    @Input() zoom: number = 16;

    constructor(private platform: Platform, private geolocation: Geolocation) {
        this.platform.ready().then(() => {
            this.geolocation.getCurrentPosition().then((resp) => {
                this.lat = resp.coords.latitude;
                this.lng = resp.coords.longitude;
            }).catch((error) => {
                console.log('Error getting location', error);
            });
        });
    }

}
