console.log('TEST concat');

var tests = [];

tests.push(function () {
    console.log('first argument should be an array');
    if (!(arr instanceof Array)) throw Error('arr is not an array');
});

tests.push(function () {
    console.log('second argument should be an array');
    if (!(arr2 instanceof Array)) throw Error('arr2 is not an array');
});

tests.push(function () {
    console.log('first array should be contain elements');
    if (arr.length === 0) throw Error('The first array contains nothing');
});
tests.push(function () {
    console.log('second array should be contain elements');
    if (arr2.length === 0) throw Error('The second array contains nothing');
});

testSuite(tests);