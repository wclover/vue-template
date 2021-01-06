import Layout from '@/layout'

export default {
  path: '/table',
  name: 'Table',
  component: Layout,
  meta: { name: '表格', icon: 'el-icon-setting' },
  children: [
    {
      path: 'basisTable',
      name: 'BasisTable',
      component: () => import('@/views/Table'),
      meta: { name: '基础表格', icon: 'el-icon-star-off' }
    }
  ]
}
