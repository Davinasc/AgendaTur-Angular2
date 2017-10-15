import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'ngx-base-form',
  templateUrl: './base-form.component.html',
  styleUrls: ['./base-form.component.scss'],
})
export class BaseFormComponent implements OnInit {

  form: FormGroup;

  constructor() { }

  ngOnInit() {
  }

  resetarForm() {
    this.form.reset();
  }

  verificaValidTouched(campo: string) {
    return !this.form.get(campo).valid && ( this.form.get(campo).touched || this.form.get(campo).dirty );
  }

  aplicaCssErro(campo: string) {
    return {
      'has-error': this.verificaValidTouched(campo),
      'has-feedback': this.verificaValidTouched(campo),
    };
  }

  verificaValidacoesForm(formGroup: FormGroup) {
    const controlesForm = Object.keys(formGroup.controls);
    controlesForm.forEach(campo => {
      const controle = formGroup.get(campo);
      controle.markAsDirty();
      if (controle instanceof FormGroup) {
        this.verificaValidacoesForm(controle);
      }
    });
  }

}
