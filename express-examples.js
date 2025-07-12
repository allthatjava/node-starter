const express = require('express');
const app = express();
const port = 3000;
app.get('/', (req,res)=>{
    res.send('Works');
})

app.get('/test', (req,res)=>{
    res.send('Test page');
})

app.listen(port, () => {
    return console.log('ready and running');
})