const fs = require('fs')
const path = require('path')
// 给定文件路径，返回读取的内容 
function getFileByPath(fpath, callback) {
  fs.readFile(fpath, 'utf-8', (err, dataStr) => {
    if(err) return callback(err)

    callback(null, dataStr)
  })  
}

getFileByPath(path.join(__dirname, './files/1.txt'), (err, dataStr) => {
   if (err) return console.log(err.message)

   console.log(dataStr)

})
