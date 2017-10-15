import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThemeModule } from './../../@theme/theme.module';
import { SalesmanRoutingModule } from './salesman-routing.module';

import { SalesmanComponent } from './salesman.component';
import { SalesmanFormComponent } from './salesman-form/salesman-form.component';

@NgModule({
  imports: [
    CommonModule,
    SalesmanRoutingModule,
    ThemeModule,
  ],
  declarations: [
    SalesmanComponent,
    SalesmanFormComponent,
  ],
})
export class SalesmanModule { }
