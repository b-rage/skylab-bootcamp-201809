console.log('TEST fill');

var tests = [];

tests.push(function () {
    console.log('should succeed on modification');

    var nums = [1, 2, 3];

    var res = fill(nums, 6);

    forEach(res, function (val, index) {
        if (res[index] !== 6) throw Error('element at index ' + index + ' does not match with 6');
    });
});

tests.push(function () {
    console.log('should fail on non-array');
    
    var error;

    try {
        fill();
    } catch (err) {
        error = err;
    }

    if (!error) throw Error('has not failed');

    if (error.message !== 'undefined is not valid') throw Error('error message is not correct');
});

tests.push(function () {
    console.log('should fail on non-array (undefined)');
    
    var error;
    var arr;

    try {
        fill(arr);
    } catch (err) {
        error = err;
    }

    if (!error) throw Error('has not failed');

    if (error.message !== arr + ' is not valid') throw Error('error message is not correct');
});

tests.push(function () {
    console.log('should fail on non-array (string)');
    
    var error;
    var arr='hola';

    try {
        fill(arr);
    } catch (err) {
        error = err;
    }

    if (!error) throw Error('has not failed');

    if (error.message !== arr + ' is not valid') throw Error('error message is not correct');
});

tests.push(function () {
    console.log('should fail on non-array (number)');
    
    var error;
    var arr=5;

    try {
        fill(arr);
    } catch (err) {
        error = err;
    }

    if (!error) throw Error('has not failed');

    if (error.message !== arr + ' is not valid') throw Error('error message is not correct');
});


testSuite(tests);
 