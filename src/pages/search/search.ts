import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';


import { EventSearchService } from '../../services/event-search.service';

@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
  providers: [EventSearchService]
})
export class SearchPage implements OnInit {
  private searchTerms = new Subject<string>();
  events: Observable<Event[]>;

  constructor(
    private navCtrl: NavController,
    private eventSearchService: EventSearchService
  ) { }

  search(term: string): void {
    console.log(term);
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.events = this.searchTerms
      .debounceTime(300)        // wait 300ms after each keystroke before considering the term
      .distinctUntilChanged()   // ignore if next search term is same as previous
      .switchMap(term => term   // switch to new observable each time the term changes
        // return the http search observable
        ? this.eventSearchService.search(term)
        // or the observable of empty heroes if there was no search term
        : Observable.of<Event[]>([]))
      .catch(error => {
        // TODO: add real error handling
        console.log(error);
        return Observable.of<Event[]>([]);
      });
  }

}
