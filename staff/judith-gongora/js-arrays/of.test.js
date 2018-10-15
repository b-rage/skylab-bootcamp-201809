var tests = [];

tests.push(function () {
	console.log('should fail on empty name');

	var error = undefined;

	try {
		of();
	} catch (err) {
		error = err;
    }

	if (!error) throw Error('should have thrown error on empty elements');

	if (error.message !== 'elements is empty') throw Error('should have thrown correct error, but got: ' + error.message);
});

tests.push(function () {
	console.log('should fail on one element is not defined');

	var error = undefined;
	var p;

	try {
		of(p);
	} catch (err) {
		error = err;
	}

	if (!error) throw Error('should have thrown error on one element is not defined');

	if (error.message !== p + ' is undefined') throw Error('should have thrown correct error, but got: ' + error.message);
});

testSuite(tests);