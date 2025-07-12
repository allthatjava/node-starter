const fs = require('fs');

const myFiles = fs.readdirSync('./mods');
console.log(myFiles);

fs.readdir('./mods', (error,files)=>{
    if(error){
        throw error;
    }

    console.log(files);
});

const getSec = fs.readFileSync('./samples/test.txt','UTF-8');
console.log(getSec);

fs.readFile('./mods/test.txt', 'UTF-8', (error,output)=>{
   if(error) throw error;
   console.log(output); 
});

const myText = `This is new text in a new file`;
fs.writeFile('./samples/secret.txt', myText, error=>{
    if(error) throw error;
    console.log('File ready');
})