const fs = require('fs')
const fsa = require('fs/promises')


try {
  let data1 = fs.readFileSync('./file01.txt','utf8')
  console.log(data1)
} catch (err) {
  console.log('file01.txt have error')
  console.log(err.message)
}


// fs.readFile('./file01.txt','utf8', (err,data) => {
//   if(err){
//     console.log('file01.txt readFile error')
//     console.log(err.message)
//     return
//   }
//   console.log(data)
// })



// fsa.readFile('./ile01.txt','utf8')
// .then(console.log)
// .catch(console.log)




