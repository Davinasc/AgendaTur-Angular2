import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">
      Criado por <b><a href="https://github.com/Davinasc" target="_blank">Davi Nascimento</a></b>
    </span>
  `,
})
export class FooterComponent {
}
