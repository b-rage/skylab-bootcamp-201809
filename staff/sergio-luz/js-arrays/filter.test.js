//TEST filter

console.log('%cTEST filter ', 'background: orange');

var tests = [];

tests.push(function () {
    console.log('It should fail no non-array first parameter');

    var arr = 1;
    var error;

    try {
        filter(arr, function (elem) { return elem < 10 });
    } catch (err) {
        error = err;
    }

    if (!error) throw Error('has not failed');

    if (error.message !== 'first element is not an array') { throw Error('error message is not as expected'); }
});

tests.push(function () {

    console.log('It should fail on non-function second parameter');

    var arr = [1, 2, 3];
    var callback = 3;
    var error;

    try {
        filter(arr, callback);
    } catch (err) {
        error = err;
    }

    if (!error) { throw Error('execution has not failed') }

    if (error.message !== 'second element is not an function') { throw Error('error message is not as expected'); }

});

tests.push(function () {

    console.log('It should fail on empty array');

    var arr = [];
    var callback = function (elem) { return elem < 10 }
    var error;

    try {
        filter(arr, callback);
    } catch (err) {
        error = err;
    }

    if (!error) { throw Error('execution has not failed') }
    if (error.message !== 'the array passed as argument is empty') { throw Error('error message is not as expected') }

});


testSuite(tests);