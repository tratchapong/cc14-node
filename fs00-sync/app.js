const fs = require('fs')
const fsa = require('fs/promises')

// console.time('readFilePM')
// let pm1 = fsa.readFile('./file01.txt','utf8')
// let pm2 = fsa.readFile('./file02.txt','utf8')
// let pm3 = fsa.readFile('./file03.txt','utf8')
// console.timeLog('readFilePM')
// Promise.all([pm1, pm2, pm3]).then(res => {
//   console.timeLog('readFilePM', res);
// })

// time consume with ReadFileSync
console.time('readFileSync')
let data1 = fs.readFileSync('./file01.txt','utf8')
let data2 = fs.readFileSync('./file02.txt','utf8')
let data3 = fs.readFileSync('./file03.txt','utf8')
console.timeEnd('readFileSync')
console.log(data1,data2,data3)

// with Asynchronous callback
// console.time('readFileCB')
// fs.readFile('./file01.txt','utf8', (err,data) =>{console.log(data); console.timeLog('readFileCB')})
// fs.readFile('./file02.txt','utf8', (err,data) =>{console.log(data); console.timeLog('readFileCB')})
// fs.readFile('./file03.txt','utf8', (err,data) =>{console.log(data); console.timeLog('readFileCB')})
// setTimeout(()=>{console.timeEnd('readFileCB')}, 100)


// with Asynchronous Promise
// console.time('readFilePM')
// let pm1 = fsa.readFile('./file01.txt','utf8').then(console.log)
// let pm2 = fsa.readFile('./file02.txt','utf8').then(console.log)
// let pm3 = fsa.readFile('./file03.txt','utf8').then(console.log)
// Promise.all([pm1, pm2, pm3]).then(res => {
//   console.timeEnd('readFilePM');
// })
