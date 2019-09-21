// javscript 入口文件
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import router from './router'
import app from './App.vue'

var vm = new Vue({
  el: '#app',
  render: c => c(app),
  router
})
 