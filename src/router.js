import VueRouter from 'vue-router'
import account from './main/Account.vue'
import goodslist from './main/GoodsList.vue'
import login from './sub-component/Login.vue'
import register from './sub-component/Register.vue'

var router = new VueRouter({
  routes: [
    { 
      path: '/account', 
      component: account,
      children: [
        { path: 'login', component: login },
        { path: 'register', component: register }
      ]
    },
    { path: '/goodslist', component: goodslist }
  ]
})

export default router
