console.log('TEST  indexOf');

var tests = [];


tests.push(function () {
    console.log('Should succeed on searching inside an array and returning the index of the element');
    
    var nums = [4, 26, 33, 105, 10, 25];
    var res;
    res =  indexOf(nums, 33);
    
    if (res !== 2) throw Error('returned index does not match with the one expected')
});

tests.push(function () {
    console.log('Should succeed on searching inside an array and returning the index of the element, and if not exists, returning -1');
    
    var nums = [4, 26, 33, 105, 10, 25];
    var res;
    res =  indexOf(nums, 12);
    
    if (res !== -1) throw Error('returned index does not match with the one expected')
});
    
tests.push(function () {
        console.log('Should fail with non-array input');
        var error;
        try {
             indexOf(undefined, 1);
        } catch (err) {
            error = err;
        }

        if (!error) throw Error('has not failed');

        if (error.message !== 'array is not valid') throw Error('error message is not correct');
});

tests.push(function () {
    console.log('Should fail with empty array');
    var error;
    var nums = [];
    try {
         indexOf(nums, 1);
    } catch (err) {
        error = err;
    }

    if (!error) throw Error('has not failed');

    if (error.message !== 'array is empty') throw Error('error message is not correct');
});

tests.push(function() {
    console.log('Should fail with null array');
    var error;
    var nums = null;
    try{
         indexOf(nums, 1);
    } catch(err) {
        error = err;
    }
    if (!error) throw Error('has not failed');
    if (error.message !== 'array is not valid') throw Error('error message is not correct');
});


tests.push(function () {
    console.log('Should fail with non-array and non-callback');
    var error;
    try {
         indexOf();
    } catch (err) {
        error = err;
    }

    if (!error) throw Error('has not failed');

    if (error.message !== 'array is not valid') throw Error('error message is not correct');
});


testSuite(tests);