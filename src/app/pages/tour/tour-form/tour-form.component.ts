import { Response } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import 'rxjs/Rx';

import { BaseFormComponent } from './../../base/base-form/base-form.component';
import { TourService } from './../../../@core/data/tour.service';
import { Tour } from './../../../@core/models/tour';

@Component({
  selector: 'ngx-tour-form',
  templateUrl: './tour-form.component.html',
  styleUrls: ['./tour-form.component.scss'],
})
export class TourFormComponent extends BaseFormComponent implements OnInit {

  tourForm: FormGroup;
  tour: Tour = new Tour();

  constructor(protected fb: FormBuilder, private tourService: TourService) {
    super(fb);
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
      guide: [null, Validators.required],
      route: [null, Validators.required],
    });
  }

  iniciarForm() {
    this.tourForm.patchValue({
      date: this.tour.date,
      vacancies: this.tour.vacancies,
      arrival_time: this.tour.arrival_time,
      departure_time: this.tour.departure_time,
      guide: this.tour.guide,
      route: this.tour.route,
    });
  }

  prepareSave() {
    this.tour = this.tourForm.value;
  }

  saveTour() {
    this.prepareSave();
    this.tourService.save(this.tour).subscribe();
    this.resetarForm(this.tourForm);
  }

}
