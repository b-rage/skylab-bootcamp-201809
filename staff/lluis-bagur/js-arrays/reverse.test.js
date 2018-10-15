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

    try {
        reverse();
    } catch (err) {
        error = err;
    }

    if (!error) throw Error('has not failed');

    if (error.message !== 'the argument is not an array') throw Error('error message is not correct');
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

testSuite(tests);