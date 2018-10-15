console.log('TEST concat');

var tests = [];

tests.push(function () {

    var arr = [1]
    var arr2 = []

    concat(arr, arr2)

    console.log('first argument should be an array');
    if (!(arr instanceof Array)) throw Error('arr is not an array');
});

tests.push(function () {

    var arr = []
    var arr2 = [2]

    concat(arr, arr2)

    console.log('second argument should be an array');
    if (!(arr2 instanceof Array)) throw Error('arr2 is not an array');
});

tests.push(function () {

    var arr = [1,2,3]
    var arr2 = [2]

    concat(arr, arr2)

    console.log('first array should be contain elements');
    if (arr.length === 0) throw Error('The first array contains nothing');
});

tests.push(function () {

    var arr = []
    var arr2 = [2,9,8]

    concat(arr, arr2)
    
    console.log('second array should be contain elements');
    if (arr2.length === 0) throw Error('The second array contains nothing');
});

testSuite(tests);