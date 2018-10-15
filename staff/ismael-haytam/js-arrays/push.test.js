console.log('TEST Push');

var tests = [];

tests.push(function () {
    console.log('must succeed when pushing a new element');

    var arr = [1, 2, 3];
    var expectedResult = [1, 2, 3, 4]

    push(arr, 4);

    arr.forEach((element, i) => {
        if (element !== expectedResult[i]) throw Error('not return the expected result');
    });
    
    console.log('%c Done %s','color: green', '✔');

});

tests.push(function () {

    console.log('should push an array inside another');

    var arr = [1, 2, 3];
    var expectedResult = [1, 2, 3, [4]]

    push(arr, [4]);
    
    arr.forEach((element, i) => {
        if (element.length && !(element instanceof Array)  && element[0] !== expectedResult[i][0]) throw Error('results do not match');
    });
    
    console.log('%c Done %s','color: green', '✔');
});

tests.push(function () {

    console.log('should fail on non-array');

    var error;

    try {
        push(null, null);
    } catch (err) {
        error = err;
    }

    if (!error) throw Error('has not failed');

    if (error.message !== 'array is not valid') throw Error('error message is not correct');
    
    console.log('%c Done %s', 'color: green', '✔');


});


tests.push(function () {

    console.log('element is required');

    
    var arr = [1, 2, 3];
    var error;

    try {
        push(arr);
    } catch (err) {
        error = err;
    }

    if (!error) throw Error('has not failed');

    if (error.message !== 'element not defined') throw Error('error message is not correct');
    
    console.log('%c Done %s','color: green', '✔');


});

tests.push(function () {

    console.log('it return an array')

    var arr = [1, 2, 3];
    var error;

    try {
        push(arr, 'SKYLAB');
    } catch (err) {
        error = err;
    }

    if (!(arr instanceof Array)) throw Error('not return array');
    
    console.log('%c Done %s','color: green', '✔');

});

testSuite(tests);

