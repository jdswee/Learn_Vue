const fs = require('fs')

function getFileByPath(fpath) {
  return new Promise(function (resolve, reject) {
    fs.readFile(fpath, 'utf-8', (err, dataStr) => {
      if (err) return reject(err)
      resolve(dataStr)
    })
  })
}

getFileByPath('./files/1.txt').then(function (data) {
  console.log(data)
  return getFileByPath('./files/2.txt')
}).then(function (data) {
  console.log(data)
  return getFileByPath('./files/3.txt')
}).then(function (data) {
  console.log(data)
})
