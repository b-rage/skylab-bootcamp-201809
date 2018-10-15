console.log('TEST reverse');
var tests = [];

// Demo comprobation

tests.push(function () {
	console.log('should reverse and array of elements');

	// setup
    
	var array = ['one', 'two', 'three'];
    var arraycopy =[]
    for (var i = 0; i<array.length;i++) arraycopy[i]=array[i];
	// test
    reverse(array);
    /*if(array!=['three', 'two', 'one']) throw Error ('the reversed array is not correct');*/
    for(var i = 0; i<array.length; i++){
        if(arraycopy[array.length-1-i]!=array[i]) throw Error ('the reversed array is not correct');
    }
});

//test error 1

tests.push(function () {
    console.log('should fail on non-array');

    var error;
    var arr;
    
    try {
        reverse(arr);
    } catch (err) {
        error = err;
    }

    if (!error) throw Error('has not failed');

    if (error.message !== arr+' is not an array') throw Error('error message is not correct');
});

//test error 2

tests.push(function (){
    console.log('should fail if the array is empty');

    var error;

    try {
        reverse([]);
    } catch (err) {
        error = err;
    }

    if (!error) throw Error('has not failed');

    if (error.message !== 'the array is empty') throw Error('error message is not correct');


});

//test error 3
tests.push(function (){
    console.log('should fail if the argument is a string');

    var array = 'cocacola';
    var error;

    try {
        reverse(array);
    } catch (err) {
        error = err;
    }

    if (!error) throw Error('has not failed');

    if (error.message !==  array + ' is not an array') throw Error('error message is not correct');


});

//test error 4
tests.push(function (){
    console.log('should fail if the argument is a function');
    var error;

    var array=function(){};

    try {
        reverse(array);
    } catch (err) {
        error = err;
    }

    if (!error) throw Error('has not failed');

    if (error.message !== array + ' is not an array') throw Error('error message is not correct');


});

//test error 5
tests.push(function (){
    console.log('should fail if the argument is a boolean');
    var error;
    var array = true;
    try {
        reverse(array);
    } catch (err) {
        error = err;
    }

    if (!error) throw Error('has not failed');

    if (error.message !== array + ' is not an array') throw Error('error message is not correct');


});


// test suite

testSuite(tests);