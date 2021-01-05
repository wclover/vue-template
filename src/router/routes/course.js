import Layout from '@/layout'

export default {
  path: '/course',
  name: 'Course',
  component: Layout,
  meta: { name: '课程界面', icon: 'el-icon-eleme' },
  children: [
    {
      path: 'a',
      name: 'AAA',
      meta: { name: '课程信息界面', icon: 'el-icon-delete' }
    }
  ]
}
