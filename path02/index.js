const path = require('path')
const {pathResolve, dirName} = require('./resource/services')

console.log(path.resolve())
console.log(pathResolve())
console.log(dirName())
