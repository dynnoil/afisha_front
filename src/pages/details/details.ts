import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Platform, NavParams, ViewController } from 'ionic-angular';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  CameraPosition,
  LatLng,
  Marker,
  MarkerOptions
} from '@ionic-native/google-maps';

import { Event } from '../../model/event';

import { EventService } from '../../services/event.service';

@Component({
  selector: 'details-page',
  templateUrl: './details.html'
})
export class DetailsPage implements OnInit, AfterViewInit {
  event: Event;

  constructor(
    private platform: Platform,
    private params: NavParams,
    private viewCtrl: ViewController,
    private eventService: EventService,
    private googleMaps: GoogleMaps
  ) { }

  ngAfterViewInit(): void {
    this.googleMaps.isAvailable().then(() => {
      let map: GoogleMap = this.googleMaps.create("map");
      map.one(GoogleMapsEvent.MAP_READY).then(
        () => {
          console.log('Map is ready!');
          // Now you can add elements to the map like the marker
        }
      );
      let latLng: LatLng = new LatLng(43.0741904, -89.3809802);
      let cameraPosition: CameraPosition = {
        target: latLng,
        zoom: 18,
        tilt: 30
      };
      map.moveCamera(cameraPosition);

      let markerOptions: MarkerOptions = {
        position: latLng,
        title: 'Simple Marker!'
      };

      map.addMarker(markerOptions)
        .then((marker: Marker) => {
          marker.showInfoWindow();
      });
      
    });
  }

  ngOnInit(): void {
    let eventId: number = this.params.get('eventId');
    this.event = this.eventService.getEvent(eventId);
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}