console.log('TEST greet');

// 1

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

// 2

console.log('should fail on non-string name');

var error;

try {
	greet(0);
} catch(err) {
	error = err;
}

if (!error) console.error('should have thrown error on non-string name');

if (error.message !== 'name is not a string') console.error('should have thrown correct error, but got: ' + error.message);

// 3

console.log('should succeed on correct name and salutation');

var res = undefined;

var log = console.log;

console.log = function(greeting) { res = greeting; };

greet('peter', 'hello');

if (res !== 'hello peter') console.error('should have greeted "hello peter", but got "' + res + '"');

console.log = log;

// 4

console.log('should fail on non-string salutation');

var error = undefined;

try {
	greet('peter', 0);
} catch(err) {
	error = err;
}

if (!error) console.error('should have thrown error on non-string salutation');

if (error.message !== 'salutation is not a string') console.error('should have thrown correct error, but got: ' + error.message);

// 5

console.log('should fail on empty name');

var error = undefined;

try {
	greet('');
} catch(err) {
	error = err;
}

if (!error) console.error('should have thrown error on empty name');

if (error.message !== 'name is empty') console.error('should have thrown correct error, but got: ' + error.message);

// 6

console.log('should fail on empty salutation');

var error = undefined;

try {
	greet('peter', '');
} catch(err) {
	error = err;
}

if (!error) console.error('should have thrown error on empty salutation');

if (error.message !== 'salutation is empty') console.error('should have thrown correct error, but got: ' + error.message);

// 7

console.log('should fail on blank name');

var error = undefined;

try {
	greet('     \n');
} catch(err) {
	error = err;
}

if (!error) console.error('should have thrown error on blank name');

if (error.message !== 'name is blank') console.error('should have thrown correct error, but got: ' + error.message);

// 8

console.log('should fail on blank salutation');

var error = undefined;

try {
	greet('peter', '     \n');
} catch(err) {
	error = err;
}

if (!error) console.error('should have thrown error on blank salutation');

if (error.message !== 'salutation is blank') console.error('should have thrown correct error, but got: ' + error.message);
