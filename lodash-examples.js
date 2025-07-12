const lodash = require('lodash');
let random1 = lodash.random(100);
console.log(random1);
let random2 = lodash.random(50,100);
console.log(random2);
const arr = [3,4,56,76,'test',765,65,56];
console.log(lodash.shuffle(arr));
console.log(lodash.shuffle(arr));
lodash.times(10, () => {
    console.log(lodash.random(50,100));
})