import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { ThemeModule } from '../@theme/theme.module';
import { DashboardModule } from './dashboard/dashboard.module';

import { BaseFormModule } from './base/base-form/base-form.module';
import { TourComponent } from './tour/tour.component';

const PAGES_COMPONENTS = [
  PagesComponent,
];

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    DashboardModule,
    BaseFormModule,
  ],
  declarations: [
    ...PAGES_COMPONENTS,
    TourComponent,
  ],
})
export class PagesModule {
}
