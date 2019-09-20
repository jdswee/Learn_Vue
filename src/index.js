// javscript 入口文件
import Vue from 'vue'
import VueRouter from 'vue-router'
import app from './App.vue'
// Vue Router
import router from './router.js'
Vue.use(VueRouter) 
// Mint UI
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

var vm = new Vue({
  el: '#app',
  render: c => c(app),
  router
})
