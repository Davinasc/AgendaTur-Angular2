import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThemeModule } from './../../@theme/theme.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ToasterModule } from 'angular2-toaster';

import { RouteRoutingModule } from './route-routing.module';
import { RouteComponent } from './route.component';
import { RouteFormComponent } from './route-form/route-form.component';
import { RouteListComponent } from './route-list/route-list.component';
import { RouteTableComponent } from './route-table/route-table.component';

@NgModule({
  imports: [
    CommonModule,
    ThemeModule,
    Ng2SmartTableModule,
    RouteRoutingModule,
    ToasterModule,
  ],
  declarations: [
    RouteComponent,
    RouteFormComponent,
    RouteListComponent,
    RouteTableComponent,
  ],
})
export class RouteModule { }
