import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import 'rxjs/add/operator/map';

import { ToasterService } from 'angular2-toaster';

import { BaseFormComponent } from './../../base/base-form/base-form.component';
import { Salesman } from './../../../@core/models/salesman';
import { SalesmanService } from './../../../@core/data/salesman.service';

@Component({
  selector: 'ngx-salesman-form',
  templateUrl: './salesman-form.component.html',
  styleUrls: ['./salesman-form.component.scss'],
})
export class SalesmanFormComponent extends BaseFormComponent implements OnInit {

  title: string = 'Vendedor'
  salesman: Salesman = new Salesman();
  salesmanForm: FormGroup;

  constructor(protected fb: FormBuilder,
    private ts: ToasterService,
    private salesmanService: SalesmanService) {
    super(fb,ts);
  }

  ngOnInit() {
    this.criarSalesmanForm();
    this.iniciarForm();
  }

  criarSalesmanForm() {
    this.salesmanForm = super.criarUserForm(this.salesmanForm);
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
    if (this.salesmanForm.valid) {
      this.prepareSave();
      this.salesmanService.save(this.salesman).subscribe();
      this.notify('success', '', `${this.title} ${super.successMessage()}`);
      super.resetarForm(this.salesmanForm);
    } else {
      super.verificaValidacoesForm(this.salesmanForm);
      this.notify('error', '', `${super.errorMessage()} ${this.title}`);
    }
  }

  notify(type: string, title: string, body: string) {
    this.ts.popAsync(super.notifyUser(type, title, body));
  }
}
