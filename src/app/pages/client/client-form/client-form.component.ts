import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { BaseFormComponent } from './../../base/base-form/base-form.component';

@Component({
  moduleId: module.id,
  selector: 'ngx-client-form',
  templateUrl: './client-form.component.html',
})
export class ClientFormComponent extends BaseFormComponent {

  @Input('group')
  public clientForm: FormGroup;

}
