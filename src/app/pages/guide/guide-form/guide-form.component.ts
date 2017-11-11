import { Response } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import 'rxjs/Rx';

import { BaseFormComponent } from './../../base/base-form/base-form.component';
import { GuideService } from './../../../@core/data/guide.service';
import { Guide } from './../../../@core/models/guide';

@Component({
  selector: 'ngx-guide-form',
  templateUrl: './guide-form.component.html',
  styleUrls: ['./guide-form.component.scss'],
})
export class GuideFormComponent extends BaseFormComponent implements OnInit {

  guide: Guide = new Guide();
  guideForm: FormGroup;

  constructor(protected fb: FormBuilder, private guideService: GuideService) {
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
      phone: this.guide.phone,
      qualification: this.guide.qualification,
    });
  }

  prepareSave() {
    this.guide = this.guideForm.value;
    this.guide.user_type = 'guide';
    this.guide.password = 'davi1234';
    this.guide.provider = 'email';
  }

  saveGuide() {
    if (this.guideForm.valid) {
      this.prepareSave();
      this.guideService.save(this.guide).subscribe();
      super.resetarForm(this.guideForm);
    } else {
      super.verificaValidacoesForm(this.guideForm);
    }
  }

}
