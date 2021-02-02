import Layout from '@/layout';
import Table from './table';
import Form from './form';

export const constantRoutes = [
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    meta: { name: 'Layout' },
    children: [
      {
        path: 'a',
        name: 'A',
        meta: { name: 'Layout A' },
        children: [
          {
            path: 'b',
            name: 'B',
            meta: { name: 'Layout B' }
          }
        ]
      }
    ]
  }
];

export const asyncRoutes = [
  Table,
  Form
];

export default [...constantRoutes, ...asyncRoutes];
