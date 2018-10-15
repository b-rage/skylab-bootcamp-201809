// sort.demo.js

console.log('DEMO sort');

var months = ['March', 'Jan', 'Feb', 'Dec'];

var sorted = sort(months);

console.log(sorted);
// ["Dec", "Feb", "Jan", "March"]
console.log(months);
// ["Dec", "Feb", "Jan", "March"]
console.log(sorted === months);

var nums = [1, 30, 4, 21];

var sorted = sort(nums);

console.log(sorted); // [1, 21, 30, 4]
console.log(nums); // [1, 21, 30, 4]
console.log(sorted === nums); // true