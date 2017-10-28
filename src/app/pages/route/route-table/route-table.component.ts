import { Component, OnInit } from '@angular/core';

import { LocalDataSource } from 'ng2-smart-table';

import { RouteService } from './../../../@core/data/route.service';

@Component({
  selector: 'ngx-route-table',
  templateUrl: './route-table.component.html',
  styleUrls: ['./route-table.component.scss'],
})
export class RouteTableComponent {

  settings = this.carregaSettings();
  source: LocalDataSource = new LocalDataSource();
  routes = [];

  constructor(private routeService: RouteService) {

    this.routeService.list()
      .subscribe(res => {
        this.routes = res.routes;
        this.source.load(this.routes);
      });
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Você tem certaza que deseja apagar?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  carregaSettings() {
    return {
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
        price: {
          title: 'Preço',
          type: 'number',
        },
      },
    };
  }

}
