const fs = require('fs')

function getFileByPath(fpath) {
  return promise = new Promise(function(resolve, reject) {
    fs.readFile(fpath, 'utf-8', (err, dataStr) => {
      // 失败的回调
      if(err) return reject(err)
      // 成功的回调
      resolve(dataStr)
    })
  })
}

getFileByPath('./files/2.txt').then(function(data) {
  console.log(data + ' success')
}, function(err) {
  console.log(err.message)
})
