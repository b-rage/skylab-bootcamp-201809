console.log('TEST From');
var tests = [];

tests.push(function () {
    console.log('should succeed on iterating and array (copying it to another array)');
    var nums = [1, 2, 3];
    var res = from(nums);


    if (nums === res) throw Error('it returns the same array and not a copy');
    
    nums.forEach(function(num, i) {
        if (num !== res[i]) throw Error('the copied items are not correct');
    });

    console.log('%c Done %s', 'color: green', '✔');
});



tests.push(function () {
    console.log('should fail on non-function callback');
    var error;
    var nums = [1, 2, 3];
    try {
        from(nums, 3);
    } catch (err) {
        error = err;
    }
    if (!error) throw Error('has not failed');
    if (error.message !== 'callback is not a function') throw Error('error message is not correct');
    console.log('%c Done %s', 'color: green', '✔');
});

tests.push(function () {
    console.log('Not allowed empty positions in the output');
    var nums = [1, 2, , 3];
    var res;
    var error;
    try {
        res = from(nums);
        if (res.some(function (x, i, arr) { return !x })) throw Error('Empty value found in array');
    } catch (err) {
        error = err;
    }
    if (!error) throw Error('has not failed');
    if (error.message !== 'Empty value found in array') throw Error('error message is not correct');
    console.log('%c Done %s', 'color: green', '✔');
});

testSuite(tests);