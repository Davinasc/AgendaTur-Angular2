import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import 'rxjs/add/operator/map';

import { BaseFormComponent } from './../../base/base-form/base-form.component';

import { Salesman } from './../../../@core/models/salesman';
import { SalesmanService } from './../../../@core/data/salesman.service';

@Component({
  selector: 'ngx-salesman-form',
  templateUrl: './salesman-form.component.html',
  styleUrls: ['./salesman-form.component.scss'],
})
export class SalesmanFormComponent extends BaseFormComponent implements OnInit {

  salesman: Salesman = new Salesman();
  salesmanForm: FormGroup;

  constructor(protected fb: FormBuilder, private salesmanService: SalesmanService) {
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
      phone: this.salesman.phone,
      comission: this.salesman.comission,
    });
  }

  prepareSave() {
    this.salesman = this.salesmanForm.value;
    this.salesman.user_type = 'salesman';
    this.salesman.password = 'davi1234';
    this.salesman.provider = 'email';
  }

  saveSalesman() {
    this.prepareSave();
    this.salesmanService.save(this.salesman).subscribe(res => res);
    this.resetarForm(this.salesmanForm);
  }
}
