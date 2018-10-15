// from.demo.js

//console.log('DEMO from');

//PRIMER CASO
//console.log(from('foo'));
// ["f", "o", "o"]


//SEGUNDO CASO
//console.log(from([1, 2, 3], function(x) { return x + x; })); 
// [2, 4, 6]

//TERCER CASO
var a = [1, 2, 3];

var b = from(a);

console.log(a); // [1, 2, 3]
console.log(b); // [1, 2, 3]
console.log(a === b); // false
