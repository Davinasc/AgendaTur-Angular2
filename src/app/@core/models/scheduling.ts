import { Client } from './client';
import { Tour } from './tour';
import { Salesman } from './salesman';

export class Scheduling {
  id: number;
  total_price: number;
  receive_price: number;
  voucher_price: number;
  salesman: Salesman;
  tour: Tour;
  clients: Client[];
}
