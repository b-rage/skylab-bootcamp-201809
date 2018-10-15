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
