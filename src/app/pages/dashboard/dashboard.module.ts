import { NgModule } from '@angular/core';
import { AngularEchartsModule } from 'ngx-echarts';

import { ThemeModule } from '../../@theme/theme.module';
import { DashboardComponent } from './dashboard.component';

import { AnalyticsModule } from './../analytics/analytics.module';


@NgModule({
  imports: [
    ThemeModule,
    AngularEchartsModule,
    AnalyticsModule,
  ],
  declarations: [
    DashboardComponent,
  ],
})
export class DashboardModule { }
