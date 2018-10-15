console.log('TEST greet');

// 1

function test1() {	
	console.log('should succeed on correct name');
	
	// setup
	
	var res;
	
	var log = console.log;
	
	console.log = function(greeting) { res = greeting; };
	
	// test
	
	greet('peter');
	
	if (res !== 'hi peter') console.error('should have greeted "hi peter"');
	
	// restore
	
	console.log = log;
}
	
// 2

function test2() {	
	console.log('should fail on non-string name');
	
	var error;
	
	try {
		greet(0);
	} catch(err) {
		error = err;
	}
	
	if (!error) console.error('should have thrown error on non-string name');
	
	if (error.message !== 'name is not a string') console.error('should have thrown correct error, but got: ' + error.message);
}
	
// 3

function test3() {
	console.log('should succeed on correct name and salutation');
	
	var res = undefined;
	
	var log = console.log;
	
	console.log = function(greeting) { res = greeting; };
	
	greet('peter', 'hello');
	
	if (res !== 'hello peter') console.error('should have greeted "hello peter", but got "' + res + '"');
	
	console.log = log;
}

// ...

// TODO should apply on other tests

// test suite

var tests = [test1, test2, test3];

testSuite(tests);