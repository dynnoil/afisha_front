import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Event } from '../../model/event';

import { EventService } from '../../services/event.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
  events: Event[];

  constructor(
    private navCtrl: NavController,
    private eventService: EventService
  ) { }

  ngOnInit(): void {
    this.events = this.eventService.getEvents();
  }
}
