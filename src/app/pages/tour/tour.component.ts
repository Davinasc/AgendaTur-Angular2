import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-tour',
  template: `
    <router-outlet></router-outlet>
  `,
})
export class TourComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
