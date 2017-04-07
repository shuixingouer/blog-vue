import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Main from '@/components/Main'
import Me from '@/components/Me'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      redirect: '/Main',
      children: [
        {
          path: '/Main',
          name: 'Main',
          component: Main
        },
        {
          path: '/Me',
          name: 'Me',
          component: Me
        }
      ]
    }
  ]
})
