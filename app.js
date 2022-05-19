// https://www.youtube.com/watch?v=VShtPwEkDD0&list=PLZlA0Gpn_vH_uZs4vJMIhcinABSTUH2bY

// https://www.youtube.com/watch?v=f7nejJv0fzc


const http = require('http')
const fs = require('fs')
const path = require('path')
const port = 8080


const server = http.createServer(function(req, res){
res.writeHead(200, { 'Content-Type': 'text/html'})


const createPath = (page) => path.resolve(__dirname, 'server', `${page}.html`)
let basePath ='';

switch(req.url){
    case '/':
        basePath = createPath('index')
        break;
    case '/about':
            basePath = createPath('about')
            break;
    case '/contact-me':
            basePath = createPath('contact-me')
            break;
            default:
                basePath = createPath('404')
                break;
}

    fs.readFile(basePath, function(error, data){
        if(error){
            res.writeHead(404)
            res.write('ERROR')
        } else {
            res.write(data)
        }
        res.end()
    })




})


server.listen(port, function(error){
    if(error){
        console.log('omg', error)
    }else{
        console.log('its ok' + port)
    }
})