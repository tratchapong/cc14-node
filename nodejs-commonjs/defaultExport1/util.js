const os = require('os')

console.log('Util run...')

function random() {
  return Math.floor(Math.random()*100)
}

function sysInfo() {
  return {
    cpu : os.cpus()[0].model,
    memory : os.totalmem(),
    version : os.version(),
  }
}

module.exports = random
console.log(module.exports)





// module.exports = random

// module.exports = {random}

// module.exports = () => Math.floor(Math.random()*100)