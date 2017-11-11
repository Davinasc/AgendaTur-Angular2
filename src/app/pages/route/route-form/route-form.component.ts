import { Response } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import 'rxjs/Rx';

import { ToasterService } from 'angular2-toaster';

import { BaseFormComponent } from './../../base/base-form/base-form.component';
import { RouteService } from './../../../@core/data/route.service';
import { Route } from './../../../@core/models/route';

@Component({
  selector: 'ngx-route-form',
  templateUrl: './route-form.component.html',
  styleUrls: ['./route-form.component.scss'],
})

export class RouteFormComponent extends BaseFormComponent implements OnInit {

  title: string = 'Rota';
  routeForm: FormGroup;
  route: Route = new Route();

  constructor(protected fb: FormBuilder,
    private ts: ToasterService,
    private routeService: RouteService) {
    super(fb, ts);
  }

  ngOnInit() {
    this.criarRouteForm();
    this.iniciarForm();
  }

  criarRouteForm() {
    this.routeForm = this.fb.group({
      name: [null, Validators.required],
      price: [null, Validators.required],
    });
  }

  iniciarForm() {
    this.routeForm.patchValue({
      name: this.route.name,
      price: this.route.price,
    });
  }

  prepareSave() {
    this.route = this.routeForm.value;
  }

  saveRoute() {
    if (this.routeForm.valid) {
      this.prepareSave();
      this.routeService.save(this.route).subscribe();
      this.notify('success', '', `${this.title} ${super.successMessage()}`);
      super.resetarForm(this.routeForm);
    } else {
      super.verificaValidacoesForm(this.routeForm);
      this.notify('error', '', `${super.errorMessage()} ${this.title}`);
    }
  }

  notify(type: string, title: string, body: string) {
    this.ts.popAsync(super.notifyUser(type, title, body));
  }

}
