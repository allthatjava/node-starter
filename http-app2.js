const http = require('http');
const fs = require('fs');
const url = require('url');

const port = 8080;
const host = '127.0.0.1';

// try http://localhost:8080/index2.html on the browser
const server = http.createServer((request, response)=>{

    const base = url.parse(request.url);
    // console.log(base);
    const filePath = ('./samples'+base.pathname);

    fs.readFile(filePath, (error,html)=>{
        if(error){
            response.writeHead(404, {
                'Content-Type':'text/html'
            });
            response.end(`<h1>Not Found</h1>`);
        }else{
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(html);
            response.end();
        }
    })
})

server.listen(port,host,()=>{
    console.log('ready');
})