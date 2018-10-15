console.log('TEST slice');

var tests = [];

tests.push(function () {
    console.log('should succeed on extracting a part of an array (copying it to another array)');

    var nums = [1, 2, 3];
    var start = 0;
    var end = 0;

    var res = [];

    res = slice(nums, start, end);

    if (res.length !== (end - start)) throw Error('result length is not equal to nums length');

    res.forEach(function (val, index) {
        if (val !== nums[index + start]) throw Error('element at index ' + index + ' does not match the original one');
    });
});

tests.push(function () {
    console.log('should fail on non-array');

    var error;

    try {
        slice();
    } catch (err) {
        error = err;
    }

    if (!error) throw Error('has not failed');

    if (error.message !== 'array is not valid') throw Error('error message is not correct');
});

tests.push(function () {
    console.log('should succeed on extracting a concrete part of an array (copying it to another array)');

    var animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
    var start = 1;
    var end = 2;

    var res = [];

    res = slice(animals, start, end);

    if (res.length !== (end - start)) throw Error('result length is not equal to nums length');

    res.forEach(function (val, index) {
        if (val !== animals[index + start]) throw Error('element at index ' + index + ' does not match the original one');
    });
});

tests.push(function () {
    console.log('should succed on non-end and non-start');

    var error;
    var res = [];
    var animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

    try {
        res = slice(animals);
        if (res.length === 0) throw Error("end or start are not starting automatically");
    } catch (err) {
        error = err;
    }
    if (error) {
        if (error.message === 'end or start are not starting automatically') throw Error('End and start have to be valid');
    }
});

tests.push(function () {
    console.log('should fail when end or start are not a number');

    var error;
    var res = [];
    var animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

    try {
        res = slice(animals,0, "hola");
    } catch (err) {
        error = err;
    }
    if (!error) throw Error('has not failed');

    if (error.message !== 'start is not valid' && error.message!=="end is not valid")
        throw Error('error message for end is not correct');
    
});



testSuite(tests);