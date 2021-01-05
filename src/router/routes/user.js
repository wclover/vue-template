import Layout from '@/layout'

export default {
  path: '/user',
  name: 'User',
  component: Layout,
  meta: { name: '用户界面', icon: 'el-icon-setting' },
  children: [
    {
      path: 'a',
      name: 'AA',
      meta: { name: '用户信息界面', icon: 'el-icon-star-off' },
      children: [
        {
          path: 'achild',
          name: 'Achild',
          meta: { name: '用户信息界面child', icon: 'el-icon-warning-outline' }
        }
      ]
    }
  ]
}
