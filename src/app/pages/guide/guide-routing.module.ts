import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GuideComponent } from './guide.component';
import { GuideFormComponent } from './../guide/guide-form/guide-form.component';
import { GuideListComponent } from './guide-list/guide-list.component';


const routes: Routes = [{
  path: '',
  component: GuideComponent,
  children: [{
    path: 'novo',
    component: GuideFormComponent,
  }, {
    path: 'todos',
    component: GuideListComponent,
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GuideRoutingModule { }
