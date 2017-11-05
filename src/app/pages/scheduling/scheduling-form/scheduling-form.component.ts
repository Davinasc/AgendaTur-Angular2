import { Observable } from 'rxjs/Observable';
import { Response } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, FormArray, Validators } from '@angular/forms';
import 'rxjs/Rx';

import { BaseFormComponent } from './../../base/base-form/base-form.component';

import { SchedulingService } from './../../../@core/data/scheduling.service';
import { TourService } from './../../../@core/data/tour.service';
import { SalesmanService } from './../../../@core/data/salesman.service';

import { Scheduling } from './../../../@core/models/scheduling';
import { Salesman } from './../../../@core/models/salesman';
import { Tour } from './../../../@core/models/tour';
import { Client } from './../../../@core/models/client';

@Component({
  selector: 'ngx-scheduling-form',
  templateUrl: './scheduling-form.component.html',
  styleUrls: ['./scheduling-form.component.scss'],
})
export class SchedulingFormComponent extends BaseFormComponent implements OnInit {

  schedulingForm: FormGroup;
  scheduling: Scheduling = new Scheduling();
  tours = [];
  salesmen = [];

  constructor(
    protected fb: FormBuilder,
    private schedulingService: SchedulingService,
    private tourService: TourService,
    private salesmanService: SalesmanService
  ) {
    super(fb);
    this.scheduling.tour = new Tour();
    this.scheduling.salesman = new Salesman();
    this.scheduling.clients = [];

    this.tourService.list()
    .subscribe(res => this.tours = res.tours);

    this.salesmanService.list()
    .subscribe(res => this.salesmen = res.salesmen);
  }

  ngOnInit() {
    this.criarSchedulingForm();
    this.iniciarForm();
  }

  criarSchedulingForm() {
    this.schedulingForm = this.fb.group({
      total_price: [null, Validators.required],
      voucher_price: [null, Validators.required],
      receive_price: [{value: null, disabled: true}, Validators.required],
      user_id: [null, Validators.required],
      tour_id: [null, Validators.required],
      clients: this.fb.array([
        this.iniciarClients(),
      ]),
    });
  }

  iniciarClients() {
    return this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      hotel: ['', Validators.required],
      apartament: ['', Validators.required],
      adult: ['', Validators.required],
    });
  }

  iniciarForm() {
    this.schedulingForm.patchValue({
      total_price: this.scheduling.total_price,
      voucher_price: this.scheduling.voucher_price,
      receive_price: this.scheduling.receive_price,
      salesman: this.scheduling.salesman.id,
      tour: this.scheduling.tour.id,
      clients: this.scheduling.clients,
    });
  }

  prepareSave() {
    this.scheduling = this.schedulingForm.value;
  }

  saveScheduling() {
    this.prepareSave();
    this.schedulingService.save(this.scheduling).subscribe();
    this.resetarForm(this.schedulingForm);
  }

  getReceivePrice() {
    const scheduling = this.schedulingForm.value;
    const receive_price = scheduling.total_price - scheduling.voucher_price;
    return receive_price;
  }

  getVoucherMaxValue() {
    const scheduling = this.schedulingForm.value;
    const max_value = scheduling.total_price
    return max_value;
  }

  addClient() {
    const control = <FormArray>this.schedulingForm.get('clients');
    control.push(this.iniciarClients());
  }

  removeClient(index: number) {
    const control = <FormArray>this.schedulingForm.get('clients');
    control.removeAt(index);
  }

}
