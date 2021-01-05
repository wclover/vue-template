import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'
Vue.use(Router)

export const createRouter = () => {
  // 解决vue-router在3.0版本以上重复点菜单报错的问题
  const originalPush = Router.prototype.push
  Router.prototype.push = function push (location) {
    return originalPush.call(this, location).catch(err => err)
  }
  const router = new Router({
    routes: routes
  })
  return router
}

const router = createRouter()

export default router
