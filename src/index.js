// javscript 入口文件
import '../src/css/index.css' 
import '../src/css/index.less'
import '../src/css/index.scss'
import 'bootstrap/dist/css/bootstrap.css'
import Vue from 'vue'
// vue组件
import login from './login.vue'
 
const vm = new Vue({
  el: '#app',
  data: {},
  render: createElements => createElements(login)
})
