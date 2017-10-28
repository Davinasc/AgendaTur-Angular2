import { Component, OnInit } from '@angular/core';

import { LocalDataSource } from 'ng2-smart-table';

import { SalesmanService } from './../../../@core/data/salesman.service';


@Component({
  selector: 'ngx-salesman-table',
  templateUrl: './salesman-table.component.html',
  styleUrls: ['./salesman-table.component.scss'],
})
export class SalesmanTableComponent {

  settings = {
    actions: {
      columnTitle: 'Ações',
    },
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      id: {
        title: 'ID',
        type: 'number',
        editable: false,
        width: '10%',
      },
      name: {
        title: 'Nome',
        type: 'string',
      },
      phone: {
        title: 'Telefone',
        type: 'string',
      },
      email: {
        title: 'E-mail',
        type: 'string',
      },
      comission: {
        title: 'Comissão',
        type: 'number',
        width: '15%',
        filter: false,
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();
  salesmen: any[]

  constructor(private salesmanService: SalesmanService) {
    this.salesmanService.list()
      .subscribe(res => {
        this.salesmen = res.users;
        this.source.load(this.salesmen);
      });
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Você tem certaza que deseja apagar?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}
