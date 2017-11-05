import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SchedulingComponent } from './scheduling.component';
import { SchedulingFormComponent } from './scheduling-form/scheduling-form.component';

const routes: Routes = [{
  path: '',
  component: SchedulingComponent,
  children: [{
      path: 'novo',
      component: SchedulingFormComponent,
    }, {
      path: 'todos',
      //component: TourListComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SchedulingRoutingModule { }
