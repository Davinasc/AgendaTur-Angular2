import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SalesmanComponent } from './salesman.component';
import { SalesmanFormComponent } from './salesman-form/salesman-form.component';

const routes: Routes = [{
  path: '',
  component: SalesmanComponent,
  children: [{
    path: 'novo',
    component: SalesmanFormComponent,
  }, {
    path: 'todos',
    // component: ,
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SalesmanRoutingModule { }
