const fs = require('fs')
const path = require('path')

function readFilePromise(path) {
  return new Promise( (resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if(err)
        return reject(err)
      console.log('File OK..')
      return resolve(data)
    })
  })
}

function readFilePromise2(path) {
  const data = new Promise( (resolve, reject) => {
    fs.readFile(path,'utf8', (err, data) => {
      if(err)
        return reject(err)
      console.log('File open ok..')
      resolve(data)
    })
  } )
  return data
}

console.log(__dirname)

let readme = path.join(__dirname,'resource', 'readme.txt')

console.log(readme)

// readFilePromise2(readme).then( txt => {
//   console.log(txt)
// }).catch( err => {
//   console.log('Error...')
//   console.log(err)
// }).finally( ()=>{
//   console.log('---------')
// })

const runReadme = async () => {
  try {
    let data = await readFilePromise2(readme)
    console.log(data)
  } catch(err) {
    console.log('Have Error...')
    console.log(err)
  }
}

runReadme()



