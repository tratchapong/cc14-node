const path = require('path')
const title = 'Codecamp#14 is the best'

const random = () => Math.floor(Math.random() * 10)

console.log('index in res.. running')
console.log(__dirname)
console.log(path.resolve())
console.log('-------------------')

module.exports = {random, title}
