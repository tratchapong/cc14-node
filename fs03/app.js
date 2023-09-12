const fs = require('fs/promises')
const path = require('path')

let products = path.resolve( 'resource', 'products.json')
let summary = path.resolve( 'resource', 'summary.json')

const getFile =  (file) => {
  return fs.readFile(file, 'utf8')
}
getFile(products).then(raw => {
  let data = JSON.parse(raw)
  let output = data.reduce( (a,c)=> {
    if ( !a[c.category.name])
      a[c.category.name] = 0
    a[c.category.name] += 1
    a.all += 1 
    return a
  },{all : 0})
  return fs.writeFile(summary, JSON.stringify(output,null,2))
}).then( () => {
  console.log('write-file OK')
  return getFile(summary)
}).then(console.log)
