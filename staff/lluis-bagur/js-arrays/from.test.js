console.log('TEST From');

var tests = [];

tests.push(function () {
    console.log('should succeed on iterating and array (copying it to another array)');

    var nums = [1, 2, 3];

    var res = [];

    from(nums, function (num, index) {
        res[index] = num;
        return num;
    });

    if (res.length !== nums.length) throw Error('result length is not equal to nums length');

    res.forEach(function (val, index) {
        if (val !== nums[index]) throw Error('element at index ' + index + ' does not match the original one');
    });
});

tests.push(function () {
    console.log('should fail on non-function callback');

    var error;
    var nums = [1, 2, 3];

    try {
        from(nums,3);
    } catch (err) {
        error = err;
    }
    if (!error) throw Error('has not failed');
    if (error.message !== 'callback is not a function') throw Error('error message is not correct');

});

tests.push(function () {
    console.log('should fail on non-iterable-object');

    var arr;
    var error;

    try {
        from({ a: 5, b: 3 });
    } catch (err) {
        error = err;
    }

    if (!error) throw Error('has not failed');

    if (error.message !== 'object is not iterable') throw Error('error message is not correct');
});

tests.push(function () {
    console.log('Not allowed empty positions in the output');

    var nums = [1,2,,3];
   // var res;
    var error;

    try{
        from(nums);
       
    }catch(err){
        error = err;
    }
    if (!error) throw Error('has not failed');

    if (error.message !== 'Empty value found in array') throw Error('error message is not correct');

    

});


testSuite(tests);