console.log('TEST findIndex');

var tests = [];


tests.push(function () {
    console.log('Should succeed on searching inside an array and returning the index of the elemen that satisfies the callback, if exists');
    
    var nums = [4, 26, 33, 105, 10, 25];
    var res;
    res = findIndex(nums, function (num) { return num >= 25; });
    
    if (res !== 1) throw Error('returned index does not match with the one expected')
});

tests.push(function () {
    console.log('Should succeed on searching inside an array and returning the index of the elemen that satisfies the callback, and if not exists, returning -1');
    
    var nums = [4, 26, 33, 105, 10, 25];
    var res;
    res = findIndex(nums, function (num) { return num >= 110; });
    
    if (res !== -1) throw Error('returned index does not match with the one expected')
});

tests.push(function () {
    console.log('Should succeed on searching inside an array and passing all the specified data to callback');
    
    var nums = [4, 26, 33, 105, 10, 25];
    var numShort = [4, 26];
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
    
    if (numbers.length !== 2) throw Error('numbers length does not match with the correct one')
    if (index.length !== 2) throw Error('index length does not match with the correct one')
    if (array.length !== 2) throw Error('array length does not match with the correct one')
    numbers.forEach(function(elem, index) {
        if (elem !== numShort[index]) throw Error('numbers array does not match original one');
    });
    index.forEach(function(i, index) {
        if (i !== index) throw Error('index array does not match original one');
    });
    
    array.forEach(function(arr) {
        if (arr !== nums) throw Error('array does not match original one');
    });
    
});
    
tests.push(function () {
        console.log('Should fail with non-array input');
        var error;
        try {
            findIndex(undefined, function (num) { return num < 10; });
        } catch (err) {
            error = err;
        }

        if (!error) throw Error('has not failed');

        if (error.message !== 'entered invalid array') throw Error('error message is not correct');
});

tests.push(function () {
    console.log('Should fail with empty array');
    var error;
    var nums = [];
    try {
        findIndex(nums, function (num) { return num < 10; });
    } catch (err) {
        error = err;
    }

    if (!error) throw Error('has not failed');

    if (error.message !== 'entered empty array') throw Error('error message is not correct');
});

tests.push(function() {
    console.log('Should fail with null array');
    var error;
    var nums = null;
    try{
        findIndex(nums, function(num) {return num < 10; });
    } catch(err) {
        error = err;
    }
    if (!error) throw Error('has not failed');
    if (error.message !== 'entered invalid array') throw Error('error message is not correct');
});

tests.push(function () {
    console.log('should fail on non function callback');

    var nums = [4, 26, 33, 105, 10, 25];
    var error;
    try {
        findIndex(nums);
    } catch (err) {
        error = err;
    }

    if (!error) throw Error('has not failed');

    if (error.message !== 'callback is not a function') throw Error('error message is not correct');
});

tests.push(function () {
    console.log('Should fail with non-array and non-callback');
    var error;
    try {
        findIndex();
    } catch (err) {
        error = err;
    }

    if (!error) throw Error('has not failed');

    if (error.message !== 'entered invalid array') throw Error('error message is not correct');
});


testSuite(tests);