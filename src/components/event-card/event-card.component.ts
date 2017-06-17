import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Event } from '../../model/event';

@Component({
    selector: 'event-card',
    templateUrl: './event-card.component.html'
})
export class EventCardComponent {
    @Input() event: Event;
    @Output() onEventClicked = new EventEmitter();
    @Output() onShareClicked = new EventEmitter();
    @Output() onFavoritesClicked = new EventEmitter();
    @Output() onRemindClicked = new EventEmitter();

    constructor( ) { }

    addToFavorites(): void {
      this.onFavoritesClicked.emit();
    }

    remind(): void {
      this.onRemindClicked.emit();
    }

    share(): void {
      this.onShareClicked.emit();
    }

    gotoDetail(): void {
      this.onEventClicked.emit();
    }
}