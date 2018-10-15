console.log('Sort TEST')

var sortTests = [];
// document.querySelector('#test-sort').addEventListener('click', function() {
//     testSuite(sortTests);
// });

sortTests.push(function () {
    console.log('should fail on non-array');

    var error;

    try {
        sort();
    } catch (err) {
        error = err;
    }

    if (!error) throw Error('has not failed');

    if (error.message !== 'array is not valid') throw Error('error message is not correct');
});

sortTests.push(function () {
    console.log('should fail on empty array');

    var arr = [];
    var error;

    try {
        sort(arr);
    } catch (err) {
        error = err;
    }

    if (!error) throw Error('has not failed');

    if (error.message !== 'array is empty') throw Error('error message is not correct');
});

sortTests.push(function () {
    console.log('should modify the original array');

    var arr = [1, 211, 98, 3];

    var sorted = sort(arr);

    if (JSON.stringify(arr) !== JSON.stringify(sorted)) throw Error('the original array hasn\'t been modified');
});

testSuite(sortTests);