import Vue from 'vue'
// moment.js
import moment from 'moment'
// vue-resource
import VueResource from 'vue-resource'
Vue.use(VueResource)
Vue.http.options.root = 'http://www.liulongbin.top:3005'
Vue.http.options.emulateJSON = true;
// vue-router
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import router from './router'

var shoppingCart = JSON.parse(localStorage.getItem('shoppingcart')) 

// Vuex
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    cart: shoppingCart
  },
  mutations: {
    addToCart(state, goodsInfo) {
      let flag = false
      state.cart.some(item => {
        if (item.id == goodsInfo.id) {
          item.count += parseInt(goodsInfo.count)
          flag = true
          return true
        }
      })
      if(!flag) {
        state.cart.push(goodsInfo)
      }
      localStorage.setItem('shoppingcart', JSON.stringify(state.cart))
    }
  },
  getters: {
    getTotalNumb(state) {
      let totalnumb = 0
      state.cart.forEach(item => {
        totalnumb += item.count
      })
      return totalnumb
    }
  }
})
// Reset CSS
import './css/index.scss'
// Mint UI
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)
// MUI
import '../lib/mui-master/dist/css/mui.css'
import '../lib/mui-master/examples/hello-mui/css/icons-extra.css'
// 图片预览插件
import VuePreview from 'vue-preview' 
Vue.use(VuePreview, {
  bgOpacity: 0.85,
  tapToClose: true,
})


import App from './App.vue'

Vue.filter('dateFormat', function (value) {
  if(!value) return ''
  return moment(value).format('YYYY-MM-DD HH:mm:ss')
})

const vm = new Vue({
  el: '#app',
  router,
  render: c => c(App),
  store,
})
