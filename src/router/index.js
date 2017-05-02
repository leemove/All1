import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import myWords from '@/components/myWords'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/myWords',
      name: 'myWords',
      component: myWords
    }
  ]
})
