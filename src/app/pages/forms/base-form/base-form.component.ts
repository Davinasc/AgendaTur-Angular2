import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'ngx-base-form',
  templateUrl: './base-form.component.html',
  styleUrls: ['./base-form.component.scss'],
})
export class BaseFormComponent implements OnInit {

  constructor(protected fb: FormBuilder) {  }

  ngOnInit() {
  }

  resetarForm(form: FormGroup) {
    form.reset();
  }

  verificaValidTouched(form: FormGroup, campo) {
    return !form.get(campo).valid && ( form.get(campo).touched || form.get(campo).dirty );
  }

  aplicaCssErro(form: FormGroup, campo: string) {
    return {
      'has-error': this.verificaValidTouched(form, campo),
      'has-feedback': this.verificaValidTouched(form, campo),
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

  criarUserForm(form: FormGroup) {
    form = this.fb.group({
      name: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
    });
    return form;
  }

}
