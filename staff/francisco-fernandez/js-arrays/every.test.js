console.log('TEST every');

var tests = [];

//TEST 1
tests.push(function () {
    console.log('should be true when all the elements fullfil the condition');
    var nums = [1, 30, 39, 29, 10, 13];
    var res = undefined;

    var res = every(nums, function(num) { return num < 40; });

    if (res === undefined) throw Error('the function did not returned any value');
    if (res !== true) throw Error('the returned value is not correct, it is ' + res + ' and should be true');
    
    console.log('%c Done %s','color: green', '✔');
});

//TEST 2
tests.push(function () {
    console.log('should be false in case not all the elements fullfil the condition');
    var words  = ['spray', 'limit', 'elite', 'exuberant', 'construction', 'present'];
    var res = undefined;

    var res = every(words, function(word) { return word.length < 10; });

    if (res === undefined) throw Error('the function did not returned any value');
    if (res !== false) throw Error('the returned value is not correct, it is '+ res + ' and should be false');

    console.log('%c Done %s','color: green', '✔');
});

//TEST 3
tests.push(function () {
    console.log('should not change the original array');
    var words = ['spray', 'limit', 'elite', 'exuberant', 'construction', 'present'];
    var res = undefined;

    var res = every(words, function(word) { return word.length < 10; });

    if (words.length !== 6) throw Error('the original array length has changed');
    
    console.log('%c Done %s','color: green', '✔');
});

//TEST 4
tests.push(function () {
    console.log('should return true on empty array(vacuously true)');
    var arr = [];
    var res;
    try {
       var res = every(arr, function() {});
    } catch (err) {
        error = err;
    }

    if (res === undefined) throw Error('the function did not returned any value');
    if (res !== true) throw Error('the returned value is not correct, it is ' + res + ' and should be true');

    console.log('%c Done %s','color: green', '✔');
});

//TEST 5
tests.push(function () {
    console.log('should fail on non-function callback');
    var nums = [1, 2, 3];
    var error;

    try {
        every(nums);
    } catch (err) {
        error = err;
    }

    if (!error) throw Error('error did not occur when expected');
    if (error.message !== 'callback is not a function') throw Error('error message is not correct');

    console.log('%c Done %s','color: green', '✔');
});

//TEST 6
tests.push(function () {
    console.log('should fail on non-array');
    var arr;
    var error;

    try {
        every(arr, function(){});
    } catch (err) {
        error = err;
    }

    if (!error) throw Error('error did not occur when expected');
    if (error.message !== 'arr is not an array') throw Error('error message is not correct');

    console.log('%c Done %s','color: green', '✔');
});

//TEST 7
tests.push(function () {
    console.log('should fail on non-array and non-callback');
    var error;

    try {
        every();
    } catch (err) {
        error = err;
    }

    if (!error) throw Error('error did not occur when expected');
    if (error.message !== 'arr is not an array and callback is not a function') throw Error('error message is not correct');

    console.log('%c Done %s','color: green', '✔');
});

// //TEST 8
// tests.push(function () {
//     console.log('should succeed on iterating an array and passing all specified data to callback');

//     var arr = [1, 2, 3];

//     var elements = [];
//     var indexes = [];
//     var arrays = [];

//     every(arr, function (element, index, array) {
//         elements.push(element);
        
//         indexes.push(index);

//         arrays.push(array);
//     });

//     if (elements.length !== arr.length) throw Error('elements length is not equal to array length');

//     if (indexes.length !== arr.length) throw Error('indexes length is not equal to array length');

//     if (arrays.length !== arr.length) throw Error('arrays length is not equal to array length');

//     elements.every(function (elem, index) {
//         if (elem !== arr[index]) throw Error('element at index: ' + index + ' does not match ' + arr[index]);
//     });

//     indexes.forEach(function (i, index) {
//         if (i !== index) throw Error('index: ' + index + ' does not match ' + index);
//     });

//     arrays.forEach(function(array) {
//         if (array !== arr) throw Error('array does not match original one');
//     });

//     console.log('%c Done %s','color: green', '✔');
// });



testSuite(tests);


