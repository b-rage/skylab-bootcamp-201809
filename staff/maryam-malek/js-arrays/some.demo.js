console.log('DEMO some');

var nums = [1, 2, 3, 4, 5];

var res = some(nums, function(elem) { return elem % 2 === 0; });

console.log(res); // true

var val = [100, 44, 55, 300, 105]
var res = some(val, function(elem) { return elem < 40; });

console.log(res); // false