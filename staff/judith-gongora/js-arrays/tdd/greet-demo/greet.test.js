console.log('TEST greet');

var tests = [];

// 1

tests.push(function () {
	console.log('should succeed on correct name');

	// setup

	var res;

	var log = console.log;

	console.log = function (greeting) { res = greeting; };

	// test

	greet('peter');

	// restore

	console.log = log;

	if (res !== 'hi peter') throw Error('should have greeted "hi peter"');
});

// 2

tests.push(function () {
	console.log('should fail on non-string name');

	var error;

	try {
		greet(0);
	} catch (err) {
		error = err;
	}

	if (!error) throw Error('should have thrown error on non-string name');

	if (error.message !== 'name is not a string') throw Error('should have thrown correct error, but got: ' + error.message);
});

// 3

tests.push(function () {
	console.log('should succeed on correct name and salutation');

	var res;

	var log = console.log;

	console.log = function (greeting) { res = greeting; };

	greet('peter', 'hello');

	console.log = log;

	if (res !== 'hello peter') throw Error('should have greeted "hello peter", but got "' + res + '"');
});

// 4

tests.push(function () {
	console.log('should fail on non-string salutation');

	var error = undefined;

	try {
		greet('peter', 0);
	} catch (err) {
		error = err;
	}

	if (!error) throw Error('should have thrown error on non-string salutation');

	if (error.message !== 'salutation is not a string') throw Error('should have thrown correct error, but got: ' + error.message);
});

// 5

tests.push(function () {
	console.log('should fail on empty name');

	var error = undefined;

	try {
		greet('');
	} catch (err) {
		error = err;
	}

	if (!error) throw Error('should have thrown error on empty name');

	if (error.message !== 'name is empty') throw Error('should have thrown correct error, but got: ' + error.message);
});

// 6

tests.push(function () {
	console.log('should fail on empty salutation');

	var error = undefined;

	try {
		greet('peter', '');
	} catch (err) {
		error = err;
	}

	if (!error) throw Error('should have thrown error on empty salutation');

	if (error.message !== 'salutation is empty') throw Error('should have thrown correct error, but got: ' + error.message);
});

// 7

tests.push(function () {
	console.log('should fail on blank name');

	var error = undefined;

	try {
		greet('     \n');
	} catch (err) {
		error = err;
	}

	if (!error) throw Error('should have thrown error on blank name');

	if (error.message !== 'name is blank') throw Error('should have thrown correct error, but got: ' + error.message);
});

// 8

tests.push(function () {
	console.log('should fail on blank salutation');

	var error = undefined;

	try {
		greet('peter', '     \n');
	} catch (err) {
		error = err;
	}

	if (!error) throw Error('should have thrown error on blank salutation');

	if (error.message !== 'salutation is blank') throw Error('should have thrown correct error, but got: ' + error.message);
});

// test suite

testSuite(tests);