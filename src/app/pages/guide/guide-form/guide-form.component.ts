import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import 'rxjs/add/operator/map';

import { BaseFormComponent } from './../../forms/base-form/base-form.component';

import { Guide } from './../../../@core/models/guide';

@Component({
  selector: 'ngx-guide-form',
  templateUrl: './guide-form.component.html',
  styleUrls: ['./guide-form.component.scss'],
})
export class GuideFormComponent extends BaseFormComponent implements OnInit {

  guide: Guide = new Guide();
  guideForm: FormGroup;

  constructor(protected fb: FormBuilder) {
    super(fb);
  }

  ngOnInit() {
    this.criarGuideForm();
    this.iniciarForm();
  }

  criarGuideForm() {
    this.guideForm = super.criarUserForm(this.guideForm);
    this.guideForm.addControl(
      'qualification',
      new FormControl(null, Validators.required));
  }

  iniciarForm() {
    this.guideForm.patchValue({
      name: this.guide.name,
      email: this.guide.email,
      qualification: this.guide.qualification,
    });
  }

}
