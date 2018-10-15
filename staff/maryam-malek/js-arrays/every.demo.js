console.log('DEMO every');

var values = [1, 30, 39, 29, 10, 13];

var res = every(values, function(elem) { return elem < 40; });

console.log(res); // true

var val = [1, 44, 26, 55, 3, 10]
var res = every(val, function(elem) { return elem < 40; });

console.log(res); // false

var words = words = ['spray', 'limit', 'elite', 'exuberant', 'construction', 'present'];

var res = every(words, function(word) { return word.length < 10; });

console.log(res); // false