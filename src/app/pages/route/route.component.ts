import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-route',
  template: `
    <router-outlet></router-outlet>
  `,
})
export class RouteComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
