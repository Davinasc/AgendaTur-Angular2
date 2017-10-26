import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/Rx';

import { Salesman } from './../models/salesman';


const url = 'https://agendatur-api.herokuapp.com';

@Injectable()
export class SalesmanService {

  constructor(private http: Http) { }

  save(salesman: Salesman) {
    return this.http.post(`${url}/auth`, salesman);
  }

  list() {
    return this.http.get(`${url}/salesmen`)
      .map(res => res.json());
  }

}
