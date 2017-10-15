import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'guide',
  template: `
    <router-outlet></router-outlet>
  `,
})
export class GuideComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
