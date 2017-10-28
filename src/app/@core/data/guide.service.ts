import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/Rx';

import { Guide } from './../models/guide';

const url = 'https://agendatur-api.herokuapp.com';

@Injectable()
export class GuideService {

  constructor(private http: Http) { }

  save(guide: Guide) {
    return this.http.post(`${url}/auth`, guide);
  }

  list() {
    return this.http.get(`${url}/guides`)
      .map(res => res.json());
  }

}
