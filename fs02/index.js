const fs = require('fs/promises')
const path = require('path')


let readme = path.resolve( 'resource', 'readme.txt')
// let readme2 = path.join(__dirname, 'resource', 'readme.txt')

// fs.readFile(readme, 'utf8').then(console.log)


const getFile =  (file) => {
  return fs.readFile(file, 'utf8')
  
}
getFile(readme).then(console.log)

console.log(path.resolve())