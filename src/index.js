import Vue from 'vue'
// vue-resource
import VueResource from 'vue-resource'
Vue.use(VueResource)
// vue-router
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import router from './router'
// Reset CSS
import './css/index.scss'
// Mint UI
import { Header,Swipe, SwipeItem } from 'mint-ui';
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
// MUI
import '../lib/mui-master/dist/css/mui.min.css'
import '../lib/mui-master/examples/hello-mui/css/icons-extra.css'

import App from './App.vue'

const vm = new Vue({
  el: '#app',
  router,
  render: c => c(App)
})
