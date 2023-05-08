const cowsay = require('cowsay')

exports.random = () => Math.floor(Math.random()*100 + 1)

exports.makecow = (msg) => cowsay.say({
  text : msg,
  e : "oO",
  T : "U "
})

