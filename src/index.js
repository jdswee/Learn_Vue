// javscript 入口文件
import Vue from 'vue'
// import MintUI from 'mint-ui'
// import 'mint-ui/lib/style.css'
// Vue.use(MintUI)
import 'bootstrap/dist/css/bootstrap.css'

import { Toast, Button } from 'mint-ui'
Vue.component(Button.name, Button)
Vue.component(Toast.name, Toast)

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import './css/index.less'

import router from './router'
import App from './App.vue'



var vm = new Vue({
  el: '#app',
  render: c => c(App),
  router
})
 