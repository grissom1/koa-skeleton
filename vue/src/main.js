// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Frontpage from './components/Frontpage'
import VueRouter from 'vue-router'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
/* eslint-disable no-new */

Vue.use(VueRouter);
Vue.use(MintUI);

const router = new VueRouter({
    routes: [
        // { path: '/', component: ShippingPending },
        // { path: '/', redirect: '/shipping-pending' },
        { path: '/', component: App},
        { path: '/shipping-pending', Frontpage },
        { path: '/place-order', redirect: '/'}
    ]
})
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router: router
})
