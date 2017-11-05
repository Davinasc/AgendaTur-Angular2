import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'nb-home',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'MENU',
    group: true,
  },
  {
    title: 'Vendedores',
    icon: 'ion-ios-people-outline',
    children: [
      {
        title: 'Adicionar novo',
        link: '/pages/vendedores/novo',
      },
      {
        title: 'Ver todos',
        link: '/pages/vendedores/todos',
      },
    ],
  },
  {
    title: 'Guias',
    icon: 'ion-person-stalker',
    children: [
      {
        title: 'Adicionar novo',
        link: '/pages/guias/novo',
      },
      {
        title: 'Ver todos',
        link: '/pages/guias/todos',
      },
    ],
  },
  {
    title: 'Agendamentos',
    icon: 'nb-compose',
    children: [
      {
        title: 'Adicionar novo',
        link: '/pages/agendamentos/novo',
      },
      {
        title: 'Ver todos',
        link: '/pages/agendamentos/todos',
      },
    ],
  },
  {
    title: 'Passeios',
    icon: 'ion-android-bus',
    children: [
      {
        title: 'Adicionar novo',
        link: '/pages/passeios/novo',
      },
      {
        title: 'Ver todos',
        link: '/pages/passeios/todos',
      },
    ],
  },
  {
    title: 'Rotas',
    icon: 'nb-location',
    children: [
      {
        title: 'Adicionar novo',
        link: '/pages/rotas/novo',
      },
      {
        title: 'Ver todos',
        link: '/pages/rotas/todos',
      },
    ],
  },
  {
    title: 'Analytics',
    icon: 'nb-bar-chart',
    children: [
      {
        title: 'Echarts',
        link: '/pages/charts/echarts',
      },
      {
        title: 'Charts.js',
        link: '/pages/charts/chartjs',
      },
      {
        title: 'D3',
        link: '/pages/charts/d3',
      },
    ],
  },
];
