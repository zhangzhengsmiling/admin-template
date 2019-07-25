import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import Templ from '../views/templ'
import About from '../views/About'
Vue.use(VueRouter)
const staticRouter = []

const asyncRouter = [
  {
    path: '/home',
    component: Home
  },
  {
    path: '/templ',
    component: Templ
  },
  {
    path: '/about',
    component: About
  }
]

// console.log(...asyncRouter, ...staticRouter)
const routes = {
  routes: [
    ...staticRouter,
    ...asyncRouter
  ],
  mode: 'history'
}
const router = new VueRouter(routes)

export { asyncRouter }
export default router
