import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Home from '@/components/Home'
import Login from '@/components/Login'
import Find from '@/components/Find'
import PersonCenter from '@/components/PersonCenter'
import Menu from '@/components/Menu'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    component: Login
  }, {
    path: '/index',
    component: Index,
    children: [{
      path: 'home',
      component: Home
    }, {
      path: 'find',
      component: Find
    }, {
      path: 'person-center',
      component: PersonCenter
    }]
  }, {
    path: '/menu',
    component: Menu
  }]
})
