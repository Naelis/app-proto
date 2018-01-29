import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class LookupService {
    events: any;
    search: any;
    apiUrl = 'http://api.hel.fi/linkedevents/v1/event/';

    include = '?include=location%2ckeywords/';

    apiJson = '/?format=json';

    urlTest = '';
    apiInput = '/?text=';


    constructor(private http: HttpClient) {
    }

    eventLookup(input) {

        this.urlTest = this.apiUrl + this.apiInput + input + this.apiJson;

        interface DataInterface {
            data: object;

        }

        return this.http.get<DataInterface>(this.urlTest).subscribe(data => {
            console.log(data);
            this.events = data.data;
        });


    }
}
