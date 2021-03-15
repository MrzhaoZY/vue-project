import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import Home from '../components/Home.vue'
import Welcome from '../components/Welcome.vue'
import Users from '../components/User/Users.vue'
import Categories from '../components/Goods/Categories.vue'
import Goods from '../components/Goods.vue'
import Orders from '../components/Orders.vue'
import Params from '../components/Goods/Params.vue'
import Reports from '../components/Reports.vue'
import Rights from '../components/Power/Rights.vue'
import Roles from '../components/Power/Roles.vue'
Vue.use(VueRouter)

const routes = [{
  path: '/',
  redirect: '/login'
}, {
  path: '/login',
  component: Login
}, {
  path: '/home',
  component: Home,
  redirect: '/welcome',
  children: [{
    path: '/welcome',
    component: Welcome
  }, {
    path: '/users',
    component: Users
  }, {
    path: '/categories',
    component: Categories
  }, {
    path: '/goods',
    component: Goods
  }, {
    path: '/orders',
    component: Orders
  }, {
    path: '/params',
    component: Params
  }, {
    path: '/reports',
    component: Reports
  }, {
    path: '/rights',
    component: Rights
  }, {
    path: '/roles',
    component: Roles
  }]
}]

const router = new VueRouter({
  routes
})

// 挂载路由导航守卫
router.beforeEach((to, from, next) => {
  // to 将要访问的路径
  // from 代表从哪个路径跳转而来
  // next 是一个函数， 表示放行
  // next（） 放行   next('/login') 强制跳转

  // 如果是登录页
  if (to.path === '/login') return next()

  // 如果不是登录页，而是一个有权限的登录页 先获取token
  const tokenStr = window.sessionStorage.getItem('token')
  // 判断是否存在
  if (!tokenStr) return next('/login')
  next()
})

export default router
