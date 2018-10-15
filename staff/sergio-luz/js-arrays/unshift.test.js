console.log('%cTEST unshift', 'background: orange');

var tests = [];

tests.push(function () {
    console.log('should succeed unshiftying');

    var nums = [1, 2, 3];
    var add = [1, 2, 6];

    var res = [];

    res = unshift(nums, 1, 2, 6);

    if (res.length === 3) throw Error('result length is not correct');

    for (var i = 0; i < nums.length - 3; i++) {
        if (add[i] !== nums[i]) throw Error(add[i] + ' does not match with ' + nums[i]);
    }
});

tests.push(function () {
    console.log('should fail when non-array');

    var nums;
    var error;

    try {
        unshift(nums, 1, 2, 6);
    } catch (err) {
        error = err;
    }

    if (error.message !== nums + ' is not an array');
});

tests.push(function () {
    console.log('should fail when number instead of array');

    var nums = 1;
    var error;

    try {
        unshift(nums, 1, 2, 6);
    } catch (err) {
        error = err;
    }

    if (error.message !== nums + ' is not an array');
});

tests.push(function () {
    console.log('should fail when string instead of array');

    var nums = "hola";
    var error;

    try {
        unshift(nums, 1, 2, 6);
    } catch (err) {
        error = err;
    }

    if (error.message !== nums + ' is not an array');
});


tests.push(function () {
    console.log('should fail when boolean instead of array');

    var nums = true;
    var error;

    try {
        unshift(nums, 1, 2, 6);
    } catch (err) {
        error = err;
    }

    if (error.message !== nums + ' is not an array');
});


tests.push(function () {
    console.log('should fail when object instead of array');

    var nums = {
        ob: "hola"
    };
    var error;

    try {
        unshift(nums, 1, 2, 6);
    } catch (err) {
        error = err;
    }

    if (error.message !== nums + ' is not an array');
});


tests.push(function () {
    console.log('should fail when function instead of array');

    var nums = function () {};
    var error;

    try {
        unshift(nums, 1, 2, 6);
    } catch (err) {
        error = err;
    }

    if (error.message !== nums + ' is not an array');
});

tests.push(function () {
    console.log('should return the array length');

    var nums = [1,2,3,4,5,6];
    var error, res;

    res = unshift(nums, 1, 2, 6);

    if(res!==nums.length) throw Error('Is not returning the correct length of the array');
});
testSuite(tests);