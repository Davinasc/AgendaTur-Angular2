import { Component, OnInit } from '@angular/core';

import { LocalDataSource } from 'ng2-smart-table';

import { GuideService } from './../../../@core/data/guide.service';
import { Guide } from './../../../@core/models/guide';

@Component({
  selector: 'ngx-guide-table',
  templateUrl: './guide-table.component.html',
  styleUrls: ['./guide-table.component.scss'],
})
export class GuideTableComponent  {

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
      qualification: {
        title: 'Qualificações',
        editor: {
          type: 'textarea',
        },
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();
  guides = [];

  constructor(private guideService: GuideService) {

    this.guideService.list()
      .subscribe( res => {
        this.guides = res.guides;
        this.source.load(this.guides);
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
