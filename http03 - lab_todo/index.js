const http = require('http')
const server = http.createServer()

const todo = [
    {id: 1, title: 'HTML'},
    {id: 2, title: 'CSS'},
    {id: 3, title: 'Javascript'},
]   

server.listen(8080, ()=> console.log('Server on 8080..'))

server.on('request', (req, res) => {
    console.log('Method : ',req.method)
    console.log('path :', req.url)
    
    if(req.url.startsWith('/todo') ) {
        let param = req.url.split('/').pop()
        let id = +param
        let result = todo.find( el => el.id === id)
        res.statusCode = 200
        res.setHeader('content-type', 'application/json')
        res.write(JSON.stringify(result))
        return res.end()
    }

    res.statusCode = 200
    res.setHeader('content-type', 'application/json')
    res.write(JSON.stringify({msg: 'Hello'}))
    // res.write('<h1>Codecamp 14</h1>')
    // res.write('<img src="https://picsum.photos/200" >')
    // res.write(JSON.stringify({name: 'CC14', age: 44}))
    res.end()
})
//  ให้ response ข้อมูล todo ออกมาตาม id ที่ระบุ
// เช่น request = '/todo/1' 
// จะ response 
// {id: 1, title: 'HTML'}
