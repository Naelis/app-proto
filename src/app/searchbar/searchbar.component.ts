import {Component, OnInit} from '@angular/core';
import {LookupService} from '../services/lookup.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-searchbar',
    templateUrl: './searchbar.component.html',
    styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent implements OnInit {

    search = '';
    results: any;

    constructor(private router: Router, private lookupService: LookupService) {
    }

    clicked(event) {
        this.results = this.lookupService.eventLookup(this.search);

        this.lookupService.search = this.results;
        this.router.navigate(['results']);
    }

    ngOnInit() {
    }

}
