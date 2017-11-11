import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { ThemeModule } from './../../@theme/theme.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NgDatepickerModule } from 'ng2-datepicker';

import { ToasterModule } from 'angular2-toaster';

import { TourRoutingModule } from './tour-routing.module';
import { TourComponent } from './tour.component';
import { TourFormComponent } from './tour-form/tour-form.component';
import { TourListComponent } from './tour-list/tour-list.component';
import { TourTableComponent } from './tour-table/tour-table.component';

@NgModule({
  imports: [
    CommonModule,
    ThemeModule,
    Ng2SmartTableModule,
    TourRoutingModule,
    NgDatepickerModule,
    ToasterModule,
  ],
  declarations: [
    TourComponent,
    TourFormComponent,
    TourListComponent,
    TourTableComponent,
  ],
  providers: [
    DatePipe,
  ],
})
export class TourModule { }
