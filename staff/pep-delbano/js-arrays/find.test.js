// find.test.js

console.log('TEST find')

var tests = [];

tests.push(function () {
    console.log('should fail if callback is not defined');

    var nums = [5, 12, 8, 130, 44];

    var error;

    try {
        find(nums);
    } catch (err) {
        error = err;
    }

    if (!error) throw Error('expected error, but got no error');

    if (error.message !== 'undefined is not a function') throw Error('error message is not as expected');
});

tests.push(function () {
    console.log('should return undefined if no item satisfies the condition');

    var nums = [5, 1, 8, 3, 4];

    var res = find(nums, function (elem) { return elem > 10; });

    if (res !== undefined) throw Error('result is not undefined');
});

tests.push(function () {
    console.log('should succeed and find matching elements');

    var nums = [5, 12, 8, 130, 44];

    var res = find(nums, function (elem) { return elem > 10; });

    if (res !== 12) throw Error('result does not match expected value');
});

tests.push(function () {
    console.log('should succeed and find matching elements (characters)');

    var nums = ['5', '12', '8', '130', '44'];

    var res = find(nums, function (elem) { return elem == 8; });

    if (res !== '8') throw Error('result does not match expected value');
});

tests.push(function () { // BDD-like
    console.log('should succeed and find matching elements (random input)');

    var nums = [];

    function randomNum() {
        return 1 + Math.floor(Math.random() * 10);
    }

    var length = randomNum();

    for (var i = 0; i < length; i++) {
        nums.push(randomNum());
    }

    function condition(elem) {
        return elem > 5;
    }

    var expected = nums.find(condition);

    var result = find(nums, condition);

    if (result !== expected) throw Error('result does not match expected value');
});

tests.push(function () {
    console.log('should fail if array is not defined');

    var error;

    try {
        find();
    } catch (err) {
        error = err;
    }

    if (!error) throw Error('expected error, but got no error');

    if (error.message !== 'undefined is not an array') throw Error('error message is not as expected');
});

testSuite(tests);