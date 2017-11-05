import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThemeModule } from './../../@theme/theme.module';

import { ClientFormComponent } from './client-form/client-form.component';

@NgModule({
  imports: [
    CommonModule,
    ThemeModule,
  ],
  declarations: [ClientFormComponent],
  exports: [ClientFormComponent],
})
export class ClientModule { }
