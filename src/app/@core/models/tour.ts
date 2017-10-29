import { Route } from './route';
import { Guide } from './guide';

export class Tour {
  id: string;
  date: Date;
  vacancies: number;
  arrival_time: Date;
  departure_time: Date;
  guide: Guide;
  route: Route;

}
