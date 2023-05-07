const fs = require('fs/promises')

function readData() {
  return fs.readFile('./db/users.json', 'utf8').then(JSON.parse)
}

function writeData(data) {
  return fs.writeFile('./db/users.json', JSON.stringify(data, null, 2))
}

function addUSer(first_name, gender) {
  readData().then(data => {
    newUser = {
      id: data[data.length-1].id+1,
      first_name,
      gender
    }
    data.push(newUser)
    return data
  }).then( data => writeData(data))
}



function deleteUser(del_id) {

}

function updataUser(id, {first_name, gender}) {

}

function getUser(id) {

}

addUSer('Anthony', 'Male')