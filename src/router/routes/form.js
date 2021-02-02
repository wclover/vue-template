import Layout from '@/layout';

export default {
  path: '/form',
  name: 'Form',
  component: Layout,
  meta: { name: '表单', icon: 'el-icon-eleme' },
  children: [
    {
      path: 'basicForm',
      name: 'BasicForm',
      component: () => import('@/views/Form/BasicForm'),
      meta: { name: '基础表单', icon: 'el-icon-delete' }
    }
  ]
};
