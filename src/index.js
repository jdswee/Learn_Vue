// javscript 入口文件
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
import app from './App.vue'
import account from './main/Account.vue'
import goodslist from './main/GoodsList.vue'

var router = new VueRouter({
  routes: [
    { path: '/account', component: account },
    { path: '/goodslist', component: goodslist }
  ]
})

var vm = new Vue({
  el: '#app',
  render: c => c(app),
  router
})
