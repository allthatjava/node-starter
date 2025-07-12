const http = require('http');
const fs = require('fs');

const port = 8080;
const host = '127.0.0.1';

// try http://localhost:8080/ on the browser
const server = http.createServer((request, response)=>{

    console.log(request.url);

    fs.readFile('./samples/index.html', (error,html)=>{
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.write(`<script>alert('Alert')</script>`);
        response.write(html);
        response.end();
    })
})

server.listen(port,host,()=>{
    console.log('ready');
})