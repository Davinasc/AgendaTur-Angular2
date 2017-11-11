import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';


import { ToasterService, ToasterConfig, Toast, BodyOutputType } from 'angular2-toaster';
import 'style-loader!angular2-toaster/toaster.css';

@Component({
  selector: 'ngx-base-form',
  templateUrl: './base-form.component.html',
  styleUrls: ['./base-form.component.scss'],
})
export class BaseFormComponent implements OnInit {

  toastConfig: ToasterConfig;

  constructor(protected fb: FormBuilder, private toasterService: ToasterService) {  }

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
      'form-control-danger': this.verificaValidTouched(form, campo)
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
      phone: [null, [Validators.required]],
    });
    return form;
  }

  protected notifyUser(type: string, title: string, body: string) {
    this.toastConfig = new ToasterConfig({
      positionClass: 'toast-top-right',
      timeout: 5000,
      newestOnTop: true,
      tapToDismiss: true,
      preventDuplicates: true,
      animation: 'flyLeft',
      limit: 3,
    });
    const toast: Toast = {
      type: type,
      title: title,
      body: body,
      timeout: 5000,
      showCloseButton: true,
      bodyOutputType: BodyOutputType.TrustedHtml,
    };
    return toast;
  }

  protected errorMessage() {
    return 'Não foi possível adicionar';
  }

  protected successMessage() {
    return 'adicionado!';
  }
}
