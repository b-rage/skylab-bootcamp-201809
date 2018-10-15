console.log('TEST map');

var tests = [];

tests.push(function () {
    console.log('should succeed on iterating and array (copying it to another array)');

    var nums = [1, 2, 3];

    var res = map(nums, function(x) {
        return x * 2;
     });

    if (res.length !== nums.length) throw Error('result length is not equal to nums length');

    res.forEach(function (val, index) {
        if (val !== nums[index]*2) throw Error('element at index ' + index + ' does not match the original one');
    });
});

tests.push(function () {
    console.log('should fail on non-function callback');

    var nums = [1, 2, 3];

    var error;

    try {
        map(nums);
    } catch (err) {
        error = err;
    }

    if (!error) throw Error('has not failed');

    if (error.message !== 'callback is not a function') throw Error('error message is not correct');
});

tests.push(function () {
    console.log('should fail on non-array and non-callback');

    var error;

    try {
        map();
    } catch (err) {
        error = err;
    }

    if (!error) throw Error('has not failed');

    if (error.message !== 'array is not valid') throw Error('error message is not correct');
});

testSuite(tests);