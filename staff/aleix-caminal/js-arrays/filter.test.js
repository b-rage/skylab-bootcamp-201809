var filterTests = [];
document.querySelector('#test-filter').addEventListener('click', function() {
    testSuite(filterTests);
});

filterTests.push(function () {
    console.log('It should fail no non-array first parameter');

    var arr = 1;
    var error;

    try {
        filter(arr, function (elem) { return elem < 10 });
    } catch (err) {
        error = err;
    }

    if (!error) throw Error('has not failed');

    if (error.message !== 'array is not valid') { throw Error('error message is not as expected'); }
});

filterTests.push(function () {
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

    if (error.message !== 'callback is not a function') { throw Error('error message is not as expected'); }

});

filterTests.push(function () {
    console.log('It should fail on empty array');

    var arr = [];
    var error;

    try {
        filter(arr, function (elem) {
            return elem < 10;
        });
    } catch (err) {
        error = err;
    }

    if (!error) { throw Error('execution has not failed') }
    if (error.message !== 'array is empty') { throw Error('error message is not as expected') }
});
