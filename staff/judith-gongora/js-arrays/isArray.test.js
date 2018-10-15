console.log('TEST isArray');

var tests = [];

tests.push(function () {
    console.log('should succeed if is array)');

    var nums = [1, 2, 3];

    isArray(nums);

    if (!nums) throw Error('Is not an Array');

});


tests.push(function () {
    console.log('should fail if is not array');

    var error;

    try {
        isArray();
    } catch (err) {
        error = err;
    }

    if (!error) throw Error('has not failed');

    if (error.message !== 'argument empty') throw Error('error message is not correct');
});

testSuite(tests);