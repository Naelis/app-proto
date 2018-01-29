import { Component, OnInit } from '@angular/core';
import {LookupService} from '../services/lookup.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  results: any;

  constructor(public lookupService: LookupService) { }

  ngOnInit() {

    this.results = this.lookupService.search;
  }

}
