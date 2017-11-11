import { Response } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import 'rxjs/Rx';

import { BaseFormComponent } from './../../base/base-form/base-form.component';
import { RouteService } from './../../../@core/data/route.service';
import { Route } from './../../../@core/models/route';

@Component({
  selector: 'ngx-route-form',
  templateUrl: './route-form.component.html',
  styleUrls: ['./route-form.component.scss'],
})

export class RouteFormComponent extends BaseFormComponent implements OnInit {

  routeForm: FormGroup;
  route: Route

  constructor(protected fb: FormBuilder, private routeService: RouteService) {
    super(fb);
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
    this.prepareSave();
    if (this.routeForm.valid) {
      this.routeService.save(this.route).subscribe();
    } else {
      super.verificaValidacoesForm(this.routeForm);
    }
    super.resetarForm(this.routeForm);
  }

}
