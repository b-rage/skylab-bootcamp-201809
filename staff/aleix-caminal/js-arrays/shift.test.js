var everyTests = [];
document.querySelector('#test-shift').addEventListener('click', function() {
    testSuite(everyTests);
});

everyTests.push(function () {
    console.log('should succeed on deleting the first element of the array');

    var nums = [1, 2, 3];
    var shifted;
    var shiftedControl = nums[0];

    shifted = shift(nums);

    if (shifted != shiftedControl) throw Error ('it has not deleted the first element of the array by one');
});

everyTests.push(function () {
    console.log('should succeed on reducing length of array');

    var nums = [1, 2, 3];
    var lengthTarget = nums.length - 1;

    shift(nums);

    if (nums.length != lengthTarget) throw Error ('result length is not one unit smaller')
});

everyTests.push(function () {
    console.log('should fail on input different than array');

    var error;
    var nums = 1;

    try {
        shift(nums);
    } catch (err) {
        error = err;
    }

    if (!error) throw Error ('test has not failed on non-array');
    if (error.message !== 'array is not valid') throw Error ('error message is not correct');
});

everyTests.push(function () {
    console.log('should fail on empty array');

    var error;
    var nums = [];

    try {
        shift(nums);
    } catch (err) {
        error = err;
    }

    if (!error) throw Error ('should have thrown error on empty array');
    if (error.message !== 'array is empty') throw Error ('error message is not correct');
});
