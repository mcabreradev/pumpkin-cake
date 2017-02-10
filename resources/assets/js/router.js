import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', name: 'Hello', component: require('./components/home/Index.vue')},
    // {path: '/invoice', component: require('./views/invoice/index.vue')},
    // {path: '/invoice/create', component: require('./views/invoice/form.vue')},
    // {path: '/invoice/:id/edit', component: require('./views/invoice/form.vue'), meta: {mode: 'edit'}},
    // {path: '/invoice/:id', component: require('./views/invoice/show.vue')},
      ]
})
