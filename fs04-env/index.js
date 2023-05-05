require('dotenv').config()
console.log(process.env.KEY)
const fs = require('fs')

const users = require('./users')

if(process.argv[2] !== process.env.KEY)
  return console.log('Unauthorized')

console.log(users[+process.argv[3]])
