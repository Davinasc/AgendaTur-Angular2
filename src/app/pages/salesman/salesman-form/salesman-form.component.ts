import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import 'rxjs/add/operator/map';

import { BaseFormComponent } from './../../forms/base-form/base-form.component';

import { Salesman } from './../../../@core/models/salesman';

@Component({
  selector: 'ngx-salesman-form',
  templateUrl: './salesman-form.component.html',
  styleUrls: ['./salesman-form.component.scss'],
})
export class SalesmanFormComponent extends BaseFormComponent implements OnInit {

  salesman: Salesman = new Salesman();
  salesmanForm: FormGroup;

  constructor(protected fb: FormBuilder) {
    super(fb);
  }

  ngOnInit() {
    this.criarSalesmanForm();
    this.iniciarForm();
  }

  criarSalesmanForm() {
    this.salesmanForm = super.criarUserForm(this.salesmanForm);
    this.salesmanForm.addControl(
      'comission',
      new FormControl(null, Validators.required));
  }

  iniciarForm() {
    this.salesmanForm.patchValue({
      name: this.salesman.name,
      email: this.salesman.email,
      comission: this.salesman.comission,
    });
  }

}
