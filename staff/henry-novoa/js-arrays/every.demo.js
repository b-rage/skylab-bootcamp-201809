console.log('DEMO every');

var nums = [1, 30, 39, 29, 10, 13];

var res = every(nums, function(num) { return num < 40; });

console.log(res); // true

var words = words = ['spray', 'limit', 'elite', 'exuberant', 'construction', 'present'];

var res = every(words, function(word) { return word.length < 10; });

console.log(res); // false

// every.demo.js

