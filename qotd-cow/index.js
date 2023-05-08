const chalk = require('chalk')
const axios = require('axios')
const {random, makecow} = require('./services')

axios.get(`https://dummyjson.com/quotes/${random()}`)
.then( rs => {
  // console.log(rs.data)
  console.log(chalk.yellowBright(makecow(rs.data.quote)))
})


