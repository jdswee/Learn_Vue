import Vue from 'vue'
// Reset CSS
import './css/index.scss'
// Mint UI
import { Header } from 'mint-ui';
Vue.component(Header.name, Header);
// MUI
import '../lib/mui-master/dist/css/mui.min.css'

import App from './App.vue'

const vm = new Vue({
  el: '#app',
  render: c => c(App)
})
