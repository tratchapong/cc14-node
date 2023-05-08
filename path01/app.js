const path = require('path')
const util = require('./res')

console.log(util.random())

console.log('in app.js')
console.log(__dirname)
console.log(path.resolve())

// path.resolve คือ working dir หลัก
// __dirname คือ ตำแหน่งของไฟล์ที่ run อยู่ (ถึง run ผ่าน require ก็ตาม)

let pjoin1 = path.join('do', 'rae','me')
let pjoin2 = path.posix.join('do', 'rae','me')
console.log(pjoin1)
console.log(pjoin2)