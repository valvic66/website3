import Vue from 'vue'
import Router from 'vue-router'

// import NavMenu from '@/components/NavMenu'
import HowWeWork from '@/components/HowWeWork'
import WhoWeAre from '@/components/WhoWeAre'
import ShowCase from '@/components/ShowCase'
import LandingPage from '@/components/LandingPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Landing',
      component: LandingPage
    },
    {
      path: '/howiwork',
      name: 'HowIWork',
      component: HowWeWork
    },
    {
      path: '/whoami',
      name: 'WhoAmI',
      component: WhoWeAre
    },
    {
      path: '/showcase',
      name: 'ShowCase',
      component: ShowCase
    }
  ]
})
