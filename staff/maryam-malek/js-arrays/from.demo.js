console.log('from demo');

console.log(from('foo'));

// ["f", "o", "o"]

console.log(from([1, 2, 3], x => x + x));

// [2, 4, 6]