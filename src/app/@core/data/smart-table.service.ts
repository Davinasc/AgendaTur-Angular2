import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/Rx';

import { Guide } from './../models/guide';

const url = 'https://agendatur-api.herokuapp.com';
@Injectable()
export class SmartTableService {

  constructor(private http: Http) { }

  getData() {
    return this.http.get(`${url}/guides`)
      .map(
        (response: Response) => {
          const data = response.json();
          return data;
        },
      )
  }
}
