import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/Rx';

import { Route } from './../models/route';

const url = 'https://agendatur-api.herokuapp.com';

@Injectable()
export class RouteService {

  constructor(private http: Http) { }

    save(route: Route) {
      return this.http.post(`${url}/routes`, route);
    }

    list() {
      return this.http.get(`${url}/routes`)
        .map(res => res.json());
    }

    show() {

    }

}
