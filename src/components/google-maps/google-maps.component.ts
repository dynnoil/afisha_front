import { Component, AfterViewInit, OnDestroy, Input } from '@angular/core';
import { Platform } from 'ionic-angular';
import {
    GoogleMaps,
    GoogleMap,
    GoogleMapsEvent,
    CameraPosition,
    LatLng,
    Marker,
    MarkerOptions
} from '@ionic-native/google-maps';

@Component({
    selector: 'google-maps',
    template: '<div #map id="map"></div>',
    providers: [GoogleMaps]
})
export class GoogleMapsComponent implements AfterViewInit, OnDestroy {
    private map: GoogleMap;

    @Input() position: LatLng;
    @Input() markers: MarkerOptions[];
    @Input() zoom: number;
    @Input() tilt: number;

    constructor(private platform: Platform, private googleMaps: GoogleMaps) {
        this.position = new LatLng(43.0741904, -89.3809802);
        this.markers = [];
        this.zoom = 18;
        this.tilt = 30;
    }

    ngAfterViewInit(): void {
        this.googleMaps.isAvailable().then(() => {
            this.map = this.googleMaps.create("map");
            this.map.one(GoogleMapsEvent.MAP_READY).then(
                () => {
                    console.log('Map is ready!');
                    // Now you can add elements to the map like the marker
                }
            );
            let cameraPosition: CameraPosition = {
                target: this.position,
                zoom: this.zoom,
                tilt: this.tilt
            };
            this.map.moveCamera(cameraPosition);

            this.markers.forEach(marker => {
                this.map.addMarker(marker)
                    .then((marker: Marker) => {
                        marker.showInfoWindow();
                    })
            });

        });
    }

    ngOnDestroy(): void {
        this.map.clear();
    }
}
