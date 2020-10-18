const cal = require('./calculator');

const a = 2;
const b = 10;

console.log(`더하면 ${cal.add(a,b)}`);
console.log(`빼면 ${cal.substract(a,b)}`);
console.log(`곱하면 ${cal.multiply(a,b)}`);
console.log(`나누면 ${cal.divide(a,b)}`);