import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  moduleId: module.id,
  selector: 'ngx-client-form',
  templateUrl: './client-form.component.html',
})
export class ClientFormComponent {

  @Input('group')
  public clientForm: FormGroup;

}
