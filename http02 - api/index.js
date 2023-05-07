const http = require('http')
const fs = require('fs/promises')
const path = require('path')
const products = require('./db/products.json')

const server = http.createServer()

server.listen(8080, ()=> {
  console.log('Server run on port 8080...')
})

server.on('request', (req, res) => {
  console.log('Method :', req.method)
  console.log('URL :',req.url)

  if (req.url.startsWith('/products/')){
    const param = req.url.split('/').pop()
    // console.log(param)
    // console.log(typeof param)
    let id = +param
    // console.log(id)
    // console.log(typeof id)
    let result = products.find( el => el.id === id )
    console.log(result)
    // res.end(result.toString())
    res.end(JSON.stringify(result, null, 2))
  }
  // console.log('Headers :',req.headers)
  // res.end('OK')
})
