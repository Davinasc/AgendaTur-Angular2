import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TourListComponent } from './tour-list/tour-list.component';
import { TourFormComponent } from './tour-form/tour-form.component';
import { TourComponent } from './tour.component';

const routes: Routes = [{
  path: '',
  component: TourComponent,
  children: [{
      path: 'novo',
      component: TourFormComponent,
    }, {
      path: 'todos',
      component: TourListComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TourRoutingModule { }
