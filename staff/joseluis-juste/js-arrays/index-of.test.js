//imprimimos un título para avisar q empieza el test
console.log("TEST of indexof(arr, elem)"); 


//array to store the next cases, and loop it with the testsuite();
var tests = []; 



//test 1:
tests.push(function() {
	console.log('fails if one of the argument is undefined');
	
	var error;

	try {
		indexOf(undefined, "bison");
	} catch (err) {
		error = err;
	}

	//in case it doesn't recognize that this is an error, console.log this message:
	if (!error) throw Error('should have thrown an error of "undefined is not an array!"');

	//in case the logged message wasn't 'undefined is not an array!', tell it didn't recognize the correct error: (note that we're just probing that the message is the same we defined in the file 'indexof.js' (in this case is 'undefined is not an array!') );

	if (error.message !== "one of the arguments is undefined") throw Error('should have thrown "undefined is not an array!", but got: ' + error.message);

})

//test 2:
tests.push(function() {
	console.log("fails if the first parameter is not an array!");
	
	var error;

	try {
		indexOf(123, "bison");
	} catch (err) {
		error = err;
	}

	//in case it doesn't recognize that this is an error, console.log this message:
	if (!error) throw Error('should have thrown an error of "first parameter should be an array!"');

	//in case the logged message wasn't 'first parameter should be an array, tell it didn't recognize the correct error: (note that we're just probing that the message is the same we defined in the file 'indexof.js' (in this case is 'undefined is not an array!') );

	if (error.message !== "first parameter should be an array!") throw Error('should have thrown "first parameter should be an array!", but got: ' + error.message);

})

//case 3:
tests.push(function() {
	console.log('fails if one argument is empty');
	
	var error;

	try {
		indexOf([1,2,3], '');
	} catch (err) {
		error = err;
	}

	if (!error) throw Error('should have thrown an error of having empty arguments');

	if (error.message !== "one argument is empty") throw Error("should have thrown `error: one argument is empty´, but got: " + error.message);
})

testSuite(tests);