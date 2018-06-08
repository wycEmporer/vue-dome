import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import index from '@/components/index/index.vue'
import login from '@/components/login/login.vue'
import login1 from '@/components/login1/login1.vue'
import login2 from '@/components/login2/login1.vue'
import login3 from '@/components/login3/login3.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'index',
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/index',
      component: index
    },
    {
      path: '/login',
      component: login,
      redirect:'/login/login1',
      children:[
        {
          path: '/login/login1',
          component: login1
        },
        {
          path: '/login/login2',
          component: login2
        },
        {
          path: '/login/login3',
          component: login3
        },
      ]
    },
  ]
})
