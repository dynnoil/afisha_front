import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Event } from '../../model/event';

@Component({
    selector: 'event-card',
    templateUrl: './event-card.component.html'
})
export class EventCardComponent {
    @Input() event: Event;
    @Output() onEventClicked = new EventEmitter<number>();
    @Output() onShareClicked = new EventEmitter<number>();

    constructor( ) { }

    share(): void {
      this.onShareClicked.emit(this.event.id);
    }

    gotoDetail(): void {
      this.onEventClicked.emit(this.event.id);
    }
}