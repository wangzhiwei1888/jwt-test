
// console.log(00000)
const token = require('../config/token');
// console.log(1111);

var token1 = token.sign({username:'wzw',password:'111'});

console.log(token1);

token.add(token1);