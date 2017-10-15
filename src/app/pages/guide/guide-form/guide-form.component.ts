import { Guide } from './../../../@core/models/guide';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import 'rxjs/add/operator/map';

import { BaseFormComponent } from './../../forms/base-form/base-form.component';

@Component({
  selector: 'guide-form',
  templateUrl: './guide-form.component.html',
  styleUrls: ['./guide-form.component.scss']
})
export class GuideFormComponent extends BaseFormComponent implements OnInit {

  guide: Guide;

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) { super();
 }

  ngOnInit() {
    this.inicializarForm();
  }

  inicializarForm() {
    this.form = this.formBuilder.group({
      nome: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      endereco: this.formBuilder.group({
        cep: [null, Validators.required],
        num: [null, Validators.required],
        complemento: [null],
        rua: [null, Validators.required],
        bairro: [null, Validators.required],
        cidade: [null, Validators.required],
        estado: [null, Validators.required]
      })
    });
  }

}
