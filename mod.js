const pathMod = require('path');
console.log(`filename:${__filename}`);
console.log('basename:'+pathMod.basename(__filename));

const utilMod = require('util');
// console.log(utilMod);

utilMod.log(pathMod.basename(__filename));

const welcomeMod = require('./mods/welcome.js');
welcomeMod();

const ranNum = require('./mods/random-num.js');

console.log(ranNum.random(50));
