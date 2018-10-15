console.log('TEST includes');

var tests = [];

// 1

tests.push(function () {
    console.log('should succeed on determines if the array includes a certain element, returning true or false as appropriate');

    var arr = ['ant', 'bison', 'camel', 'duck', 'bison', 'cat', 'dog', 'bat'];

    var res = Boolean, 
        res2 = Boolean;

    var elem = 'bat';

    function includes(arr, elem) {
        arr.forEach(function(item){
            if(elem === item){
                res = true;
            }
        })
    }

    res2 = arr.includes(elem);

    console.log(res2);
    

    if(!res2 && !res) throw Error('results are not equals');

});


// 2

tests.push(function () {
    console.log('should fail on non-item');

    var arr = ['ant', 'bison', 'camel', 'duck', 'bison', 'cat', 'dog', 'bat'];

    elem = undefined;

    var error;

    try {
        includes(arr,elem);
    } catch (err) {
        error = err;
    } 
    

    if (!error) throw Error('should have thrown error on elem is not defined');

    if (error.message !== 'element is not defined') throw Error ('error message is not correct');
});


// 4

tests.push(function () {
    console.log('should succeed on element is blank');

    var arr = ['ant', 'bison', '    ', 'duck', 'bison', 'cat', 'dog', 'bat'];

    var elem = '    ';

    var res;

  
    res = arr.includes(elem) ;

    res1 = includes(arr,elem);


    if(res !== res1) throw Error('results are not equals');
});

// 5

tests.push(function () {
    console.log('should fail on array is empty');

    var arr = [];

    var elem = 'bat';

    var error;

    try {
        includes(arr, elem);
    } catch (err) {
        error = err;     
    } 
    

    if (!error) throw Error('has not failed');

    if (error.message !== 'array is empty') throw Error ('error message is not correct');
});
 
testSuite(tests);