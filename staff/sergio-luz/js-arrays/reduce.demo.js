console.log('21) Executing reduce demo');

var nums = [1, 2, 3, 4];

console.log(reduce(nums, function(accum, num) { return accum + num; })); // 10

console.log(reduce(nums, function(accum, num) { return accum + num; }, 5)); // 15