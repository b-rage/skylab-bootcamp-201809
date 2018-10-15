console.log('TEST findIndex');

var tests = [];

tests.push(function () {
    console.log('should succeed on searching inside an array and returning the index of the element that satisfies the condition, if exists');

    var nums = [4, 26, 33, 105, 10, 25];
    var res;

    res = findIndex(nums, function (num) { return num >= 25; });

    if (res !== 1) throw Error('returned index does not match with the one expected');
});

tests.push(function () {
    console.log('should succeed on find no index (-1) when no element satisfies the condition');

    var nums = [4, 26, 33, 105, 10, 25];
    var res;

    res = findIndex(nums, function (num) { return num >= 110; });

    if (res !== -1) throw Error('returned index does not match with the one expected')
});

tests.push(function () {
    console.log('should succeed on searching inside an array and passing all the specified data to callback');

    var nums = [4, 26, 33, 105, 10, 25];
    var expected = nums.slice(0, 2);
    var res;
    var numbers = [];
    var index = [];
    var array = [];

    res = findIndex(nums, function (elem, i, arr) {
        numbers.push(elem);
        index.push(i);
        array.push(arr);

        return elem > 25;
    });

    if (res !== 1) throw Error('returned index does not match with the one expected')
    if (numbers.length !== 2) throw Error('numbers length does not match with the correct one');
    if (index.length !== 2) throw Error('index length does not match with the correct one');
    if (array.length !== 2) throw Error('array length does not match with the correct one');

    numbers.forEach(function (elem, index) {
        if (elem !== expected[index]) throw Error('numbers array does not match original one');
    });

    index.forEach(function (i, index) {
        if (i !== index) throw Error('index array does not match original one');
    });

    array.forEach(function (arr) {
        if (arr !== nums) throw Error('array does not match original one');
    });
});

tests.push(function () {
    console.log('should fail with non-array input (undefined)');

    var arr;
    var condition = function (num) { return num < 10; };
    var error;

    try {
        findIndex(arr, condition);
    } catch (err) {
        error = err;
    }

    if (!error) throw Error('has not failed');

    if (error.message !== arr + ' is not an array') throw Error('error message is not correct: ' + error.message);
});

tests.push(function () {
    console.log('should fail with non-array input (number)');

    var arr = 1;
    var condition = function (num) { return num < 10; };
    var error;

    try {
        findIndex(arr, condition);
    } catch (err) {
        error = err;
    }

    if (!error) throw Error('has not failed');

    if (error.message !== arr + ' is not an array') throw Error('error message is not correct: ' + error.message);
});

tests.push(function () {
    console.log('should fail with non-array input (string)');

    var arr = 'hola mundo';
    var condition = function (num) { return num < 10; };
    var error;

    try {
        findIndex(arr, condition);
    } catch (err) {
        error = err;
    }

    if (!error) throw Error('has not failed');

    if (error.message !== arr + ' is not an array') throw Error('error message is not correct: ' + error.message);
});

tests.push(function () {
    console.log('should fail with non-array input (boolean)');

    var arr = false;
    var condition = function (num) { return num < 10; };
    var error;

    try {
        findIndex(arr, condition);
    } catch (err) {
        error = err;
    }

    if (!error) throw Error('has not failed');

    if (error.message !== arr + ' is not an array') throw Error('error message is not correct: ' + error.message);
});

tests.push(function () {
    console.log('should fail with non-array input (object)');

    var arr = {};
    var condition = function (num) { return num < 10; };
    var error;

    try {
        findIndex(arr, condition);
    } catch (err) {
        error = err;
    }

    if (!error) throw Error('has not failed');

    if (error.message !== arr + ' is not an array') throw Error('error message is not correct: ' + error.message);
});

tests.push(function () {
    console.log('should succeed and find no index (-1) on empty-array');

    var error;
    var nums = [];
    var res;

    res = findIndex(nums, function (num) { return num < 10; });

    if (res !== -1) throw Error('result is not as expected: ' + res);
});

tests.push(function () {
    console.log('should fail with null array');
    var error;
    var nums = null;

    try {
        findIndex(nums, function (num) { return num < 10; });
    } catch (err) {
        error = err;
    }

    if (!error) throw Error('has not failed');

    if (error.message !== 'null is not an array') throw Error('error message is not correct: ' + error.message);
});

tests.push(function () {
    console.log('should fail on non-function callback');

    var nums = [4, 26, 33, 105, 10, 25];
    var error;

    try {
        findIndex(nums);
    } catch (err) {
        error = err;
    }

    if (!error) throw Error('has not failed');

    if (error.message !== 'undefined is not a function') throw Error('error message is not correct: ' + error.message);
});

tests.push(function () {
    console.log('should fail with non-array and non-callback');

    var error;

    try {
        findIndex();
    } catch (err) {
        error = err;
    }

    if (!error) throw Error('has not failed');

    if (error.message !== 'undefined is not an array') throw Error('error message is not correct: ' + error.message);
});


testSuite(tests);
