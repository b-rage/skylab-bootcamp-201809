console.log('TEST concat');

var tests = [];

tests.push(function () {
    console.log('first argument should be an array');
    
    try {
        concat("", 1,2,3);
    } catch (err) {
        error = err;
    }

    if (!error) throw Error('has not failed');

    if (error.message !== 'first element is not an array') throw Error('error message is not as expected'); 
});

tests.push(function () {
    console.log('second argument should be an array');
    
    try {
        concat([], 1);
    } catch (err) {
        error = err;
    }

    if (!error) throw Error('has not failed');

    if (error.message !== 'second element is not an array') throw Error('error message is not as expected'); 
});

tests.push(function () {
    console.log('first array should be contain elements');
    
    try {
        concat([], [1,2]);
    } catch (err) {
        error = err;
    }

    if (!error) throw Error('has not failed');

    if (error.message !== 'first array should be contain elements') throw Error('error message is not as expected'); 
});


tests.push(function () {
    console.log('second array should be contain elements');
    
    try {
        concat([1,2], []);
    } catch (err) {
        error = err;
    }

    if (!error) throw Error('has not failed');

    if (error.message !== 'second array should be contain elements') throw Error('error message is not as expected'); 
});

testSuite(tests);