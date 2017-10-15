import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThemeModule } from './../../@theme/theme.module';
import { GuideRoutingModule } from './guide-routing.module';

import { GuideComponent } from './guide.component';
import { GuideFormComponent } from './guide-form/guide-form.component';
import { GuideListComponent } from './guide-list/guide-list.component';

@NgModule({
  imports: [
    CommonModule,
    GuideRoutingModule,
    ThemeModule,
  ],
  declarations: [
    GuideComponent,
    GuideFormComponent,
    GuideListComponent,
  ]
})
export class GuideModule { }
