// AAA='{ "name":"Candy"}' node app.js
require('dotenv').config()

console.log(process.env.USERNAME)
console.log(process.env.AAA)
console.log(typeof process.env.AAA)
let aaa_obj = JSON.parse(process.env.aaa)
console.log(aaa_obj)
console.log(typeof aaa_obj)
