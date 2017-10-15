import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-guide',
  template: `
    <router-outlet></router-outlet>
  `,
})
export class GuideComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
