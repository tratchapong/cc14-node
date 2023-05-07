require('dotenv').config({ debug: false })

console.log(process.env.KEY)
console.log("hello", process.env.NAME)

require('dotenv').config({ debug: true, override: true })

process.env.NAME='Tony Stark'
console.log("hello", process.env.NAME)

// https://github.com/dotenv-org/examples/blob/master/dotenv-nodejs-override/index.js