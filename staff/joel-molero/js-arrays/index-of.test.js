console.log("TEST of indexof(arr, elem)"); 

var tests = []; 
 
tests.push(function() {
	console.log('fails if one of the argument is undefined');
	
	var error;
 	try {
		indexOf(undefined, "bison");
	} catch (err) {
		error = err;
	}
 	
	if (!error) throw Error('should have thrown an error of "undefined is not an array!"');
 	
 	if (error.message !== "undefined is not an array") throw Error('should have thrown "undefined is not an array!", but got: ' + error.message);
 })
 
tests.push(function() {
	console.log("fails if the first parameter is not an array");
	
	var error;
 	try {
		indexOf(123, "bison");
	} catch (err) {
		error = err;
	}
 	
	if (!error) throw Error('should have thrown an error of "first parameter should be an array!"');
 	
 	if (error.message !== "123 is not an array") throw Error('should have thrown "first parameter should be an array!", but got: ' + error.message);
 })
 
tests.push(function() {
	console.log('fails if one argument is empty');
	
	var error;
 	try {
		indexOf([], 'word');
	} catch (err) {
		error = err;
	}
 	if (!error) throw Error('should have thrown an error of having empty arguments');
 	if (error.message !== "array can not be empty") throw Error("should have thrown `error: one argument is empty´, but got: " + error.message);
})
 testSuite(tests);