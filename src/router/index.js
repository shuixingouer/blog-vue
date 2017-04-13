import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Main from '@/components/Main'
import Login from '@/components/Login'
import Me from '@/components/Me'
import Detail from '@/components/Detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      redirect: '/main',
      children: [
        {
          path: '/main',
          name: 'main',
          component: Main
        },
        {
          path: '/login',
          name: 'login',
          component: Login
        },
        {
          path: '/me',
          name: 'me',
          component: Me
        },
        {
          path: '/detail/:id',
          name: 'detail',
          component: Detail
        }
      ]
    }
  ]
})
