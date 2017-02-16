import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'Home',
      component: require('./spa/Home.vue'),
      redirect: '/issues',
      children: [{
        path: 'issues',
        name: 'Issues',
        component: require('./spa/Issues/Issues.vue'),
      }, ]
    },
    {
      path: '/forbidden',
      name: 'forbidden',
      component: require('./spa/Home.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: require('./spa/Login/Login.vue'),
    },
  ]
})