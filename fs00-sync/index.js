const fs = require('fs')
const fsa = require('fs/promises')

// time consume with ReadFileSync
console.time('readFileSync')
let data1 = fs.readFileSync('./file01.txt','utf8')
console.log(data1)
let data2 = fs.readFileSync('./file02.txt','utf8')
console.log(data2)
let data3 = fs.readFileSync('./file03.txt','utf8')
console.log(data3)
console.timeEnd('readFileSync')

// with Asynchronous callback
console.time('readFileCB')
fs.readFile('./file01.txt','utf8', (err,data) => console.log(data))
fs.readFile('./file02.txt','utf8', (err,data) => console.log(data))
fs.readFile('./file03.txt','utf8', (err,data) => console.log(data))
console.timeEnd('readFileCB')


// with Asynchronous Promise
console.time('readFilePM')
fsa.readFile('./file01.txt','utf8').then(console.log)
fsa.readFile('./file01.txt','utf8').then(console.log)
fsa.readFile('./file01.txt','utf8').then(console.log)
console.timeEnd('readFilePM')



