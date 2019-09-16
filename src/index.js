// javscript 入口文件

// 导入 jquery
import $ from 'jquery'

$(function() {
  $('li:odd').css('backgroundColor', 'lightpink');
  $('li:even').css('backgroundColor', function() {
    return '#' + 'D97634'
  });
})
