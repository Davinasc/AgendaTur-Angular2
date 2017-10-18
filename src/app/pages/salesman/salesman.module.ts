import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThemeModule } from './../../@theme/theme.module';
import { SalesmanRoutingModule } from './salesman-routing.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { SalesmanComponent } from './salesman.component';
import { SalesmanFormComponent } from './salesman-form/salesman-form.component';
import { SalesmanTableComponent } from './salesman-table/salesman-table.component';
import { SalesmanListComponent } from './salesman-list/salesman-list.component';

import { SmartTableService } from '../../@core/data/smart-table.service';

@NgModule({
  imports: [
    CommonModule,
    SalesmanRoutingModule,
    ThemeModule,
    Ng2SmartTableModule,
  ],
  declarations: [
    SalesmanComponent,
    SalesmanFormComponent,
    SalesmanTableComponent,
    SalesmanListComponent,
  ],
})
export class SalesmanModule { }
