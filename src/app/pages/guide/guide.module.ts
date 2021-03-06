import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThemeModule } from './../../@theme/theme.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ToasterModule } from 'angular2-toaster';

import { GuideRoutingModule } from './guide-routing.module';
import { GuideComponent } from './guide.component';
import { GuideFormComponent } from './guide-form/guide-form.component';
import { GuideListComponent } from './guide-list/guide-list.component';
import { GuideTableComponent } from './guide-table/guide-table.component';

import { SmartTableService } from '../../@core/data/smart-table.service';


@NgModule({
  imports: [
    CommonModule,
    GuideRoutingModule,
    ThemeModule,
    Ng2SmartTableModule,
    ToasterModule,
  ],
  declarations: [
    GuideComponent,
    GuideFormComponent,
    GuideListComponent,
    GuideTableComponent,
  ],
})
export class GuideModule { }
