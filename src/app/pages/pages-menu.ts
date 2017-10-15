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
    link: '/pages/ui-features',
    children: [
      {
        title: 'Adicionar novo',
        link: '#',
      },
      {
        title: 'Ver todos',
        link: '#',
      },
    ],
  },
  {
    title: 'Guias',
    icon: 'ion-ios-flag-outline',
    children: [
      {
        title: 'Adicionar novo',
        link: '/pages/guides/novo',
      },
      {
        title: 'Ver todos',
        link: '/pages/guides/todos',
      },
    ],
  },
  {
    title: 'Passeios',
    icon: 'ion-android-bus',
    children: [
      {
        title: 'Adicionar novo',
        link: '#',
      },
      {
        title: 'Ver todos',
        link: '#',
      },
    ],
  },
  {
    title: 'Rotas',
    icon: 'nb-location',
    children: [
      {
        title: 'Adicionar novo',
        link: '#',
      },
      {
        title: 'Ver todos',
        link: '#',
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
