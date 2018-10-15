console.log('TEST splice');

var tests = [];

tests.push(function () {
    console.log('should succeed on deleting elements of the array starting from index 2');

    var months = ['Jan', 'Feb', 'March', 'April', 'May'];
    var startIndex = 2;
    var deleteCount = 0;
    var elem = 'Feb';

    splice(months, startIndex);

    var expectedResult = ['Jan', 'Feb'];

    if (expectedResult.length !== months.length) throw Error('result length is not equal to nums length');

    expectedResult.forEach(function (val, index) {
        if (val !== months[index]) throw Error('element at index ' + index + ' is not as expected');
    });
});

tests.push(function () {
    console.log('should succeed on adding a new element to the array without deleting any other element');

    var months = ['Jan', 'March', 'April', 'May'];
    var startIndex = 1;
    var deleteCount = 0;
    var elem = 'Feb';

    splice(months, startIndex, deleteCount, elem);

    var expectedResult = ['Jan', 'Feb', 'March', 'April', 'May'];

    if (expectedResult.length !== months.length) throw Error('result length is not equal to nums length');

    expectedResult.forEach(function (val, index) {
        if (val !== months[index]) throw Error('element at index ' + index + ' is not as expected');
    });
});

tests.push(function () {
    console.log('should succeed on adding a new element to the end of the array and removing the last element');

    var months = ['Jan', 'Feb', 'March', 'April', 'June'];
    var startIndex = 0;
    var deleteCount = 0;
    var elem = 'May';

    var expectedResult = ['Jan', 'Feb', 'March', 'April', 'May'];

    if (expectedResult.length !== months.length) throw Error('length is not as expected');

    expectedResult.forEach(function (val, index) {
        if (val !== months[index]) throw Error('element at index ' + index + ' is not as expected');
    });
});


testSuite(tests);