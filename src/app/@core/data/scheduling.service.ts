import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/Rx';

import { Scheduling } from './../models/scheduling';

const url = 'https://agendatur-api.herokuapp.com';

@Injectable()
export class SchedulingService {

  constructor(private http: Http) { }

    save(scheduling: Scheduling) {
      return this.http.post(`${url}/sales`, scheduling);
    }

    list() {
      return this.http.get(`${url}/sales`)
        .map(res => res.json());
    }

    show() {

    }

}
