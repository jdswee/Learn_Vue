// javscript 入口文件

// 导入 jquery
import $ from 'jquery'
import '../src/css/index.css' 
import '../src/css/index.less'
import '../src/css/index.scss'

$(function() {
  $('li:odd').css('backgroundColor', 'lightpink');
  $('li:even').css('backgroundColor', function() {
    return '#' + 'D97634'
  });
})
