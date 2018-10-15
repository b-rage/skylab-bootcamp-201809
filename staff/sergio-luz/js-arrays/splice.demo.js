console.log('19) Executing splice demo');

var months = ['Jan', 'March', 'April', 'June'];

var removed = splice(months, 1, 2);

console.log(months); // ["Jan", "June"]
console.log(removed); // ["March", "April"]