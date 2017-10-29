import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { LocalDataSource } from 'ng2-smart-table';

import { TourService } from './../../../@core/data/tour.service';
import { Tour } from './../../../@core/models/tour';

@Component({
  selector: 'ngx-tour-table',
  templateUrl: './tour-table.component.html',
  styleUrls: ['./tour-table.component.scss'],
})
export class TourTableComponent {

  settings = this.carregaSettings();
  source: LocalDataSource = new LocalDataSource();
  tours: Tour[];

  constructor(private tourService: TourService, private datePipe: DatePipe) {

    this.tourService.list()
      .subscribe(res => {
        this.tours = this.formatarToursJSON(res.tours);
        this.source.load(this.tours);
      });
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Você tem certaza que deseja apagar?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  formatarToursJSON(tours) {
    const tour: Tour = new Tour();
    if (tours != null) {
      for (const i in tours) {
        tour.guide = tours[i]['guide'];
        tour.route = tours[i]['route'];
        tour.date = tours[i]['date'];
        tour.arrival_time = tours[i]['arrival_time'];
        tour.departure_time = tours[i]['departure_time'];

        tours[i]['guide'] = tour.guide.name;
        tours[i]['route'] = tour.route.name;
        tours[i]['date'] = this.datePipe.transform(tour.date, 'dd-MM-yyyy');
        tours[i]['arrival_time'] = this.datePipe.transform(tour.arrival_time, 'HH:mm:ss');
        tours[i]['departure_time'] = this.datePipe.transform(tour.departure_time, 'HH:mm:ss');
      }
      const json = JSON.stringify(tours);
      return JSON.parse(json);
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
        route: {
          title: 'Rota',
          type: 'string',
        },
        date: {
          title: 'Data',
          type: 'string',
        },
        vacancies: {
          title: 'Vagas',
          type: 'number',
        },
        departure_time: {
          title: 'Saida',
          type: 'string',
        },
        arrival_time: {
          title: 'Chegada',
          type: 'string',
        },
        guide: {
          title: 'Guia',
          type: 'string',
        },
      },
    };
  }

}
