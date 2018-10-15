//imprimimos un título para avisar q empieza el test
console.log("TEST indexoF"); 


var tests = []; 

tests.push(function() {
	console.log("fails if the first parameter is not an array!");
	
	var error;

	try {
		indexOf(123, "bison");
	} catch (err) {
		error = err;
	}

    if (!error) throw Error('should have thrown an error of "first parameter should be an array!"');
    
	if (error.message !== "first parameter should be an array!") throw Error('should have thrown "first parameter should be an array!", but got: ' + error.message);

    console.log('%c Done %s', 'color: green', '✔');
});


tests.push(function() {
	console.log('fails if one argument is empty');
	
	var error;

	try {
		indexOf([], 'word');
	} catch (err) {
		error = err;
	}

	if (!error) throw Error('should have thrown an error of having empty arguments');

	if (error.message !== "one argument is empty") throw Error("should have thrown `error: one argument is empty´, but got: " + error.message);
   
    console.log('%c Done %s', 'color: green', '✔');
});

testSuite(tests);