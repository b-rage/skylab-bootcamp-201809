console.log('%cTEST splice', 'background: orange');

var tests = [];

tests.push(function () {
    console.log('should succeed on extracting a part of an array (copying it to another array)');

    var nums = [1, 2, 3];
    var start = 0;
    var del = 0;

    var res = [];

    res = splice(nums, start, del);

    if (res.length !== (del - start)) throw Error('result length is not equal to nums length');

    res.forEach(function (val, index) {
        if (val !== nums[index + start]) throw Error('element at index ' + index + ' does not match the original one');
    });
});

tests.push(function () {
    console.log('should succeed modifying the array');

    var nums = [1, 2, 3];
    var start = 0;
    var del = 0;

    var res = [];

    res = splice(nums, start, del);

    if (nums.length !== nums.length-(del - start)) throw Error('result length is not equal to nums length');
});

tests.push(function () {
    console.log('should fail on non-array');

    var error;

    try {
        splice();
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
    var del = 2;

    var res = [];
    var res2=['ant', 'bison', 'camel', 'duck', 'elephant'];
    res.splice(start, del);

    res = splice(animals, start, del);

    res.forEach(function (val, index) {
        if (val !== res2[index + start]) throw Error('element at index ' + index + ' does not match the original one');
    });
});

tests.push(function () {
    console.log('should succed on non-del and non-start');

    var error;
    var res = [];
    var animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

    try {
        res = splice(animals);
        if (res.length === 0) throw Error("del or start are not starting automatically");
    } catch (err) {
        error = err;
    }
    if (error) {
        if (error.message === 'del or start are not starting automatically') throw Error('del and start have to be valid');
    }
});

tests.push(function () {
    console.log('should fail when del or start are not a number');

    var error;
    var res = [];
    var animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

    try {
        res = splice(animals,"hola", "hola");
    } catch (err) {
        error = err;
    }
    if (!error) throw Error('has not failed');

    if (error.message !== 'start is not valid' && error.message!=="del is not valid")
        throw Error('error message for del is not correct');
    
});

testSuite(tests);