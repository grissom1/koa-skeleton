// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
/* eslint-disable no-new */

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        // { path: '/', component: ShippingPending },
        // { path: '/', redirect: '/shipping-pending' },
        { path: '/', component: App},
        { path: '/shipping-pending', redirect: '/' },
        { path: '/place-order', redirect: '/'}
    ]
})
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router: router
})
