// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Frontpage from './components/Frontpage'
import VueRouter from 'vue-router'
import {Cell, Checklist} from 'mint-ui'
import { Button } from 'mint-ui';
import { Actionsheet } from 'mint-ui';
import { Tabbar, TabItem } from 'mint-ui';
import { TabContainer, TabContainerItem } from 'mint-ui';

Vue.component(TabContainer.name, TabContainer);
Vue.component(TabContainerItem.name, TabContainerItem);

Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);

Vue.component(Button.name, Button);
Vue.component(Actionsheet.name, Actionsheet);
// import 'mint-ui/lib/style.css'
/* eslint-disable no-new */

Vue.use(VueRouter);
Vue.component(Cell.name, Cell);
Vue.component(Checklist.name, Checklist);

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
