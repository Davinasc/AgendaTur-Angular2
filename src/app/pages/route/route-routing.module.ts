import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RouteComponent } from './route.component';
import { RouteListComponent } from './route-list/route-list.component';
import { RouteFormComponent } from './route-form/route-form.component';

const routes: Routes = [{
  path: '',
  component: RouteComponent,
  children: [{
      path: 'novo',
      component: RouteFormComponent,
    }, {
      path: 'todos',
      component: RouteListComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RouteRoutingModule { }
