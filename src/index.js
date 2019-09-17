// javscript 入口文件

import $ from 'jquery'
import '../src/css/index.css' 
import '../src/css/index.less'
import '../src/css/index.scss'
import 'bootstrap/dist/css/bootstrap.css'
import 'open-iconic/font/css/open-iconic-bootstrap.css'

$(function() {
  $('li:odd').css('backgroundColor', 'lightpink');
  $('li:even').css('backgroundColor', function() {
    return '#' + 'D97634'
  });
})
