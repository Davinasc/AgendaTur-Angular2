import { Observable } from 'rxjs/Observable';
import { Response } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import 'rxjs/Rx';

import { ToasterService } from 'angular2-toaster';

import { BaseFormComponent } from './../../base/base-form/base-form.component';
import { TourService } from './../../../@core/data/tour.service';
import { RouteService } from './../../../@core/data/route.service';
import { GuideService } from './../../../@core/data/guide.service';

import { Tour } from './../../../@core/models/tour';
import { Guide } from './../../../@core/models/guide';
import { Route } from './../../../@core/models/route';

@Component({
  selector: 'ngx-tour-form',
  templateUrl: './tour-form.component.html',
  styleUrls: ['./tour-form.component.scss'],
})
export class TourFormComponent extends BaseFormComponent implements OnInit {

  title: string = 'Passeio';
  tourForm: FormGroup;
  tour: Tour = new Tour();
  routes = [];
  guides = [];

  constructor(
    protected fb: FormBuilder,
    protected ts: ToasterService,
    private tourService: TourService,
    private routeService: RouteService,
    private guideService: GuideService,
    ) {
      super(fb,ts);

      this.tour.route = new Route()
      this.tour.guide = new Guide();

      this.routeService.list()
      .subscribe(res => this.routes = res.routes);

      this.guideService.list()
      .subscribe( res => this.guides = res.guides);
  }

  ngOnInit() {
    this.criarTourForm();
    this.iniciarForm();
  }

  criarTourForm() {
    this.tourForm = this.fb.group({
      date: [null, Validators.required],
      vacancies: [null, Validators.required],
      arrival_time: [null, Validators.required],
      departure_time: [null, Validators.required],
      user_id: [null, Validators.required],
      route_id: [null, Validators.required],
    });
  }

  iniciarForm() {
    this.tourForm.patchValue({
      date: this.tour.date,
      vacancies: this.tour.vacancies,
      arrival_time: this.tour.arrival_time,
      departure_time: this.tour.departure_time,
      guide: this.tour.guide.id,
      route: this.tour.route.id,
    });
  }

  prepareSave() {
    this.tour = this.tourForm.value;
  }

  saveTour() {
    if (this.tourForm.valid) {
      this.prepareSave();
      this.tourService.save(this.tour).subscribe();
      this.notify('success', '', `${this.title} ${super.successMessage()}`);
      super.resetarForm(this.tourForm);
    } else {
      super.verificaValidacoesForm(this.tourForm);
    }
    super.resetarForm(this.tourForm);
    this.notify('error', '', `${super.errorMessage()} ${this.title}`);
  }

  notify(type: string, title: string, body: string) {
    this.ts.popAsync(super.notifyUser(type, title, body));
  }

}
