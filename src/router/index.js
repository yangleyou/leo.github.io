import Vue from 'vue'
import Router from 'vue-router'
//  import HelloWorld from '@/components/HelloWorld'
import Profile from '../components/Profile.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      redirect:'/greeting'
    },
    {
      path: '/greeting',
      name: 'HelloWorld',
      component: resolve => require(['@/components/HelloWorld.vue'], resolve)
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },

  ]
})
