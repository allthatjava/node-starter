let val = "Hello World welcome to Node";
console.log(val);

console.log(global);
console.log('Directory:'+__dirname);
console.log('FileName:'+__filename);

console.log(process.argv);

const first = process.argv[2];
const last = process.argv[3];

let message = `Hi, ${first} ${last}`;
console.log(message);

process.stdout.write('Brian\n');
process.stdout.write('Heo\n');

const arr = ["Dog", "Cat", "Rabiit"];

const output = function(val =0){
    process.stdout.write(`${arr[val]}\n`);
}

const num = Math.floor(Math.random()*2);
output(num);

process.stdin.on('data',data => {
    process.stdout.write(`You wrote ${data}\n`);
    process.exit();
})

process.on('exit', (data)=>{
    console.log('you exited');
})