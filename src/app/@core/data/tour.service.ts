import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/Rx';

import { Tour } from './../models/tour';

const url = 'https://agendatur-api.herokuapp.com';

@Injectable()
export class TourService {

  constructor(private http: Http) { }

  save(tour: Tour) {
    return this.http.post(`${url}/tours`, tour);
  }

  list() {
    return this.http.get(`${url}/tours`)
      .map(res => res.json());
  }

  show() {

  }

}
