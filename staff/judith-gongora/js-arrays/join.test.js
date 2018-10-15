console.log('TEST  join');

var tests = [];


tests.push(function () {
    console.log('Should succeed');
    
    var nums = ['hola','adios','hasta-luego'];
    var res;
    res =  join(nums,',');
    
    if (res.length !== 22) throw Error('Error!, returned diferent result')
});
    
tests.push(function () {
        console.log('Should fail with non-array input');
        var error;
        try {
             join(undefined, 1);
        } catch (err) {
            error = err;
        }

        if (!error) throw Error('has not failed');

        if (error.message !== 'array is not valid') throw Error('error message is not correct');
});

tests.push(function () {
    console.log('Should fail with empty array');
    var error;
    var nums = [];
    try {
         join(nums, 1);
    } catch (err) {
        error = err;
    }

    if (!error) throw Error('has not failed');

    if (error.message !== 'array is empty') throw Error('error message is not correct');
});

tests.push(function() {
    console.log('Should fail with null array');
    var error;
    var nums = null;
    try{
         join(nums, 1);
    } catch(err) {
        error = err;
    }
    if (!error) throw Error('has not failed');
    if (error.message !== 'array is not valid') throw Error('error message is not correct');
});


testSuite(tests);