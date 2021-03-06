import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { ThemeModule } from './../../@theme/theme.module';

import { ToasterModule } from 'angular2-toaster';

import { SchedulingComponent } from './scheduling.component';
import { SchedulingFormComponent } from './scheduling-form/scheduling-form.component';
import { SchedulingRoutingModule } from './scheduling-routing.module';
import { ClientModule } from './../client/client.module';

@NgModule({
  imports: [
    CommonModule,
    ThemeModule,
    SchedulingRoutingModule,
    ClientModule,
    ToasterModule,
  ],
  declarations: [
    SchedulingComponent,
    SchedulingFormComponent,
  ],
  providers: [
    DatePipe,
  ],
})
export class SchedulingModule { }
