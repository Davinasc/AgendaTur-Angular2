import { Component, OnDestroy, OnInit } from '@angular/core';
import { NbThemeService, NbMediaBreakpoint, NbMediaBreakpointsService } from '@nebular/theme';

import { UserService } from '../../../@core/data/users.service';

@Component({
  selector: 'ngx-guide-list',
  templateUrl: './guide-list.component.html',
  styleUrls: ['./guide-list.component.scss'],
})
export class GuideListComponent implements OnInit {

  constructor() { }

    ngOnInit() {
    }

}
