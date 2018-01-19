import Vue from 'vue'
import Router from 'vue-router'

// import NavMenu from '@/components/NavMenu'
import HowWeWork from '@/components/HowWeWork'
import WhoWeAre from '@/components/WhoWeAre'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'NavMenu',
    //   component: NavMenu
    // },
    {
      path: '/howwework',
      name: 'HowWeWork',
      component: HowWeWork
    },
    {
      path: '/whoweare',
      name: 'WhoWeAre',
      component: WhoWeAre
    }
  ]
})
