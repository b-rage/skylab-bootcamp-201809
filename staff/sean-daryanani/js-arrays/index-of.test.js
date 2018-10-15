//imprimimos un título para avisar q empieza el test
console.log("TEST of indexOf(arr, elem)"); 


//array to store the next cases, and loop it with the testsuite();
var tests = []; 



//test 1:
tests.push(function() {
	console.log('fails if one of the argument is undefined');
	
	var error;


	try {
		indexOf( undefined, "bison");
	} catch (err) {
		error = err;
	}

	//in case it doesn't recognize that this is an error, console.log this message:
	if (!error) throw Error('should have thrown an error of "undefined is not an array"');

	//in case the logged message wasn't 'undefined is not an array!', tell it didn't recognize the correct error: (note that we're just probing that the message is the same we defined in the file 'indexOf.js' (in this case is 'undefined is not an array!') );

	if (error.message !== "undefined is not an array") throw Error('should have thrown "undefined is not an array", but got: ' + error.message);

})

tests.push(function() {
	console.log('fails if one of the argument is null');
	
	var error;


	try {
		indexOf( null, "bison");
	} catch (err) {
		error = err;
	}

	//in case it doesn't recognize that this is an error, console.log this message:
	if (!error) throw Error('should have thrown an error of "object is not an array"');

	//in case the logged message wasn't 'undefined is not an array!', tell it didn't recognize the correct error: (note that we're just probing that the message is the same we defined in the file 'indexOf.js' (in this case is 'undefined is not an array!') );

	if (error.message !== "object is not an array") throw Error('should have thrown "object is not an array!", but got: ' + error.message);

})

//test 2:
tests.push(function() {
	console.log("fails if the first parameter is not an array!");
	
	var error;
	var str = "asdf"
	var string = typeof str;

	try {
		indexOf("asdf", "bison");
	} catch (err) {
		error = err;
	}

	//in case it doesn't recognize that this is an error, console.log this message:
	if (!error) throw Error('should have thrown an error of ' +string + ' is not an array');

	//in case the logged message wasn't 'first parameter should be an array, tell it didn't recognize the correct error: (note that we're just probing that the message is the same we defined in the file 'indexOf.js' (in this case is 'undefined is not an array!') );

	if (error.message !== string + ' is not an array') throw Error('should have thrown ' +  string + ' is not an array", but got: ' + error.message);

})

//case 3:
tests.push(function() {
	console.log('fails if array is empty');
	
	var error;

	try {
		indexOf([], 'word');
	} catch (err) {
		error = err;
	}

	if (!error) throw Error('should have thrown an error of having empty arguments');

	if (error.message !== "one argument is empty") throw Error("should have thrown `error: one argument is empty´, but got: " + error.message);
})

testSuite(tests);