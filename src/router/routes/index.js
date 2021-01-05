import Layout from '@/layout'
import User from './user'
import Course from './course'

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
]

export const asyncRoutes = [
  User,
  Course
]

export default [...constantRoutes, ...asyncRoutes]
