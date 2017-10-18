import { Component, OnInit } from '@angular/core';
import { NbThemeService, NbMediaBreakpoint, NbMediaBreakpointsService } from '@nebular/theme';

import { UserService } from '../../../@core/data/users.service';

@Component({
  selector: 'ngx-salesman-list',
  templateUrl: './salesman-list.component.html',
  styleUrls: ['./salesman-list.component.scss'],
})
export class SalesmanListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
