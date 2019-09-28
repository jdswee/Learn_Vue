import Vue from 'vue'
// moment.js
import moment from 'moment'
// vue-resource
import VueResource from 'vue-resource'
Vue.use(VueResource)
Vue.http.options.root = 'http://www.liulongbin.top:3005'
// vue-router
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import router from './router'
// Reset CSS
import './css/index.scss'
// Mint UI
import { Header,Swipe, SwipeItem, Button } from 'mint-ui';
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name, Button);
// MUI
import '../lib/mui-master/dist/css/mui.min.css'
import '../lib/mui-master/examples/hello-mui/css/icons-extra.css'

import App from './App.vue'

Vue.filter('dateFormat', function (value) {
  if(!value) return ''
  return moment(value).format('YYYY-MM-DD HH:mm:ss')
})

const vm = new Vue({
  el: '#app',
  router,
  render: c => c(App)
})
