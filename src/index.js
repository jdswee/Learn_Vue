// javscript 入口文件

import $ from 'jquery'
import '../src/css/index.css' 
import '../src/css/index.less'
import '../src/css/index.scss'
import 'bootstrap/dist/css/bootstrap.css'

// class 关键字，是 ES6 中用来实现面向对象编程的方式
class Person {
  static info = { name: 'zs', age: 20 }
}

console.log(Person.info)
