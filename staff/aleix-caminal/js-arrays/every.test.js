var everyTests = [];
document.querySelector('#test-every').addEventListener('click', function() {
    testSuite(everyTests);
});

//TEST 1
everyTests.push(function () {
    console.log('should be true when all the elements fullfil the condition');
    var nums = [1, 30, 39, 29, 10, 13];
    var res = undefined;

    var res = every(nums, function(num) { return num < 40; });

    if (res === undefined) throw Error('the function did not returned any value');
    if (res !== true) throw Error('the returned value is not correct, it is ' + res + ' and should be true');

    console.log('%c Done %s','color: green', '✔');
});

//TEST 2
everyTests.push(function () {
    console.log('should be false in case not all the elements fullfil the condition');
    var words  = ['spray', 'limit', 'elite', 'exuberant', 'construction', 'present'];
    var res = undefined;

    var res = every(words, function(word) { return word.length < 10; });

    if (res === undefined) throw Error('the function did not returned any value');
    if (res !== false) throw Error('the returned value is not correct, it is '+ res + ' and should be false');

    console.log('%c Done %s','color: green', '✔');
});

//TEST 3
everyTests.push(function () {
    console.log('should not change the original array');
    var words = ['spray', 'limit', 'elite', 'exuberant', 'construction', 'present'];
    var res = undefined;

    var res = every(words, function(word) { return word.length < 10; });

    if (words.length !== 6) throw Error('the original array length has changed');

    console.log('%c Done %s','color: green', '✔');
});

//TEST 4
everyTests.push(function () {
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
everyTests.push(function () {
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
everyTests.push(function () {
    console.log('should fail on non-array');
    var error;

    try {
        every();
    } catch (err) {
        error = err;
    }

    if (!error) throw Error('error did not occur when expected');
    if (error.message !== 'array is not valid') throw Error('error message is not correct');

    console.log('%c Done %s','color: green', '✔');
});

//TEST 7
everyTests.push(function () {
    console.log('should fail on non-callback function');
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
