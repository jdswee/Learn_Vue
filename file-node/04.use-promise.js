const fs = require('fs')

function getFileByPath(fpath) {
  return new Promise(function (resolve, reject) {
    fs.readFile(fpath, 'utf-8', (err, dataStr) => {
      if (err) return reject(err)
      resolve(dataStr)
    })
  })
}
// 第一种方式，前面报错不影响后面的执行
// getFileByPath('./files/11.txt').then(function (data) {
//   console.log(data)
//   return getFileByPath('./files/2.txt')
// }, function(err) {
//   console.log(err.message)
//   return getFileByPath('./files/2.txt')
// }).then(function (data) {
//   console.log(data)
//   return getFileByPath('./files/3.txt')
// }, function(err) {
//   console.log(err.message)
//   return getFileByPath('./files/3.txt')
// }).then(function (data) {
//   console.log(data)
// })

// 第二种方式，前面报错立即停止并打印错误信息
getFileByPath('./files/1.txt').then(function(data) {
  console.log(data)
  return getFileByPath('./files/12.txt')
}).then(function(data) {
  console.log(data)
  return getFileByPath('./files/3.txt')
}).then(function(data) {
  console.log(data)
}).catch(function(err) {
  console.log('catch 自己的提示：' + err.message)
})
