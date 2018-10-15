console.log('TEST includes');

var tests = [];

// 1
tests.push(function () {
    console.log('should succeed on returning true or false');

    var arr = ['ant', 'bison', 'camel', 'duck', 'bison', 'cat', 'dog', 'bat'];

    var res = includes(arr, 'duck');

    if (res !== true) throw Error('should return correct boolean value');
});

// 2
tests.push(function () {

    console.log('should fail because array is empty');

    var arr = [];
    var test_item = 'cat';
    var error;

    try {
        includes(arr, test_item);
    } catch (err) {
        error = err;
    }

    if (!error) throw Error('should have thrown an error');
    if (error.message !== 'array cannot be empty') throw Error('error message is not correct');
});

// 3
tests.push(function () {
    console.log('should fail because item is missing');

    var arr = [1, 2, 3];
    var error;
    try {
        includes(arr);
    } catch (err) {
        error = err;
    }

    if (!error) throw Error('should have thrown an error');
    if (error.message !== 'item to search is missing') throw Error('error message is not correct');

});

// 4
tests.push(function () {
    console.log('should fail because there are no arguments');

    var error;
    try {
        includes();
    } catch (err) {
        error = err;
    }

    if (!error) throw Error('should have thrown an error');
    if (error.message !== 'function must contain two arguments') throw Error('error message is not correct');
});

// 5
tests.push(function () {
    console.log('should fail when item is an array');

    var error;
    var test_arr = [1, 2, 3];
    var dummy_item = [1];
    try {
        includes(test_arr, dummy_item);
    } catch (err) {
        error = err;
    }

    if (!error) throw Error('should have thrown an error');
    if (error.message !== 'item to search cannot be an array') throw Error('error message is not correct');
});

testSuite(tests);