const fs = require('fs/promises')
const path = require('path')

let products = path.resolve( 'resource', 'products.json')
let summary = path.resolve( 'resource', 'summary.json')

const getFile =  (file) => {
  return fs.readFile(file, 'utf8')
}
getFile(products).then(raw => {
  let data = JSON.parse(raw)
  // console.log(data[0])
  let output = data.reduce( (a,c)=> {
    if ( !a[c.category.name])
      a[c.category.name] = 0
    a[c.category.name] += 1
    a.all += 1 
    return a
  },{all : 0})
  console.log(output)
  return output
}).then(output => {
  fs.writeFile(summary, JSON.stringify(output))
  return('OK')
}).then(console.log)
