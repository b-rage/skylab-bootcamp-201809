// safe-box.test.js

/**
 * Tests safe box
 * 
 * @version 3.0.0
 */

var tests = [];

tests.push(function () {
    console.log('should succeed saving and retrieving secret on correct password');

    var secret = 'this is my secret';

    safeBox.saveSecret(secret, '123');

    var recovered = safeBox.retrieveSecret('123');

    if (secret !== recovered) throw Error('recovered secret does not match original one');
});

tests.push(function () {
    console.log('should fail saving on undefined password');

    var secret = 'this is my secret';
    var error;

    try {
        safeBox.saveSecret(secret);
    } catch (err) {
        error = err;
    }

    if (!error) throw Error('no error thrown from safe box');

    if (error.message !== 'invalid password') throw Error('error message does not match expected one');
});

tests.push(function () {
    console.log('should fail saving on empty password');

    var secret = 'this is my secret';
    var error;

    try {
        safeBox.saveSecret(secret, '');
    } catch (err) {
        error = err;
    }

    if (!error) throw Error('no error thrown from safe box');

    if (error.message !== 'invalid password') throw Error('error message does not match expected one');
});

tests.push(function () {
    console.log('should fail saving on blank password');

    var secret = 'this is my secret';
    var error;

    try {
        safeBox.saveSecret(secret, '   \t\n');
    } catch (err) {
        error = err;
    }

    if (!error) throw Error('no error thrown from safe box');

    if (error.message !== 'invalid password') throw Error('error message does not match expected one');
});

tests.push(function () {
    console.log('should not password be a property of safe box');

    var secret = 'this is my secret';
    var password = 'abc';

    safeBox.saveSecret(secret, password);

    // if (safeBox.password === 'abc') throw Error('password is a property of safe box');

    for (var prop in safeBox)
        if (safeBox[prop] === password) throw Error('password is a property of safe box');
});

tests.push(function () {
    console.log('should fail saving on undefined secret');

    var secret = undefined;
    var password = 'xyz';

    var error;

    try {
        safeBox.saveSecret(secret, password);
    } catch (err) {
        error = err;
    }

    if (!error) throw Error('no error thrown from safe box');

    if (error.message !== 'invalid secret') throw Error('error message does not match expected one');
});

tests.push(function () {
    console.log('should fail saving on empty secret');

    var secret = '';
    var password = 'xyz';

    var error;

    try {
        safeBox.saveSecret(secret, password);
    } catch (err) {
        error = err;
    }

    if (!error) throw Error('no error thrown from safe box');

    if (error.message !== 'invalid secret') throw Error('error message does not match expected one');
});

tests.push(function () {
    console.log('should fail saving on blank secret');

    var secret = '      \t\n';
    var password = 'uvw';

    var error;

    try {
        safeBox.saveSecret(secret, password);
    } catch (err) {
        error = err;
    }

    if (!error) throw Error('no error thrown from safe box');

    if (error.message !== 'invalid secret') throw Error('error message does not match expected one');
});

tests.push(function () {
    console.log('should not secret be a property of safe box');

    var secret = 'this is my secret';
    var password = 'abc';

    safeBox.saveSecret(secret, password);

    for (var prop in safeBox)
        if (safeBox[prop] === secret) throw Error('secret is a property of safe box');
});

tests.push(function () {
    console.log('should fail saving and retrieving secret on wrong password');

    var secret = 'this is my secret';

    safeBox.saveSecret(secret, '123');

    var error;

    try {
        safeBox.retrieveSecret('456');
    } catch(err) {
        error = err;
    }

    if (!error) throw Error('error not thrown');

    if (error.message !== 'invalid password') throw Error('error message is not the one expected');
});

tests.push(function () {
    console.log('should not secret be a property of window');

    var secret = 'this is my secret';
    var password = 'abc';

    safeBox.saveSecret(secret, password);

    for (var prop in window)
        if (window[prop] === secret) throw Error('secret is a property of window');
});

tests.push(function () {
    console.log('should not password be a property of window');

    var secret = 'this is my secret';
    var password = 'abc';

    safeBox.saveSecret(secret, password);

    for (var prop in window)
        if (window[prop] === password) throw Error('password is a property of window');
});

tests.push(function () {
    console.log('should fail saving a non-string password (boolean)');

    var secret = 'this is my secret';
    var password = true;

    
    var error;
    
    try {
        safeBox.saveSecret(secret, password);
    } catch(err) {
        error = err;
    }

    if (!error) throw Error('error not thrown');

    if (error.message !== 'invalid password') throw Error('error message is not the one expected');
});

tests.push(function () {
    console.log('should fail saving a non-string password (numeric)');

    var secret = 'this is my secret';
    var password = 123456789;

    var error;
    
    try {
        safeBox.saveSecret(secret, password);
    } catch(err) {
        error = err;
    }

    if (!error) throw Error('error not thrown');

    if (error.message !== 'invalid password') throw Error('error message is not the one expected');
});

tests.push(function () {
    console.log('should fail saving a non-string password (array)');

    var secret = 'this is my secret';
    var password = [1, 2, 3];

    
    var error;
    
    try {
        safeBox.saveSecret(secret, password);
    } catch(err) {
        error = err;
    }

    if (!error) throw Error('error not thrown');

    if (error.message !== 'invalid password') throw Error('error message is not the one expected');
});

testSuite(tests);