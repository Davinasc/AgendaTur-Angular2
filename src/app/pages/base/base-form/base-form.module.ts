import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToasterModule } from 'angular2-toaster';

import { BaseFormComponent } from './base-form.component';

const BASE_MODULES = [CommonModule, FormsModule, ReactiveFormsModule, HttpModule, ToasterModule];

const COMPONENTS = [
  BaseFormComponent,
];


@NgModule({
  imports: [...BASE_MODULES],
  declarations: [...COMPONENTS],
  exports: [...BASE_MODULES, ...COMPONENTS],
})
export class BaseFormModule { }
