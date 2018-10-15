console.log('TEST for join');

var tests = [];

tests.push(function () {
    console.log('Should return new string with all items seperated by the specified separator');

    var testArray = [1, 2, 3];
    var elem = "-";
    var res = "";

    res = join(testArray, elem)

    if (res!== "1-2-3") {
        throw Error ('should have output 1-2-3');
    }
});

tests.push(function () {
    console.log('Should succeed on joining items with comma if no separator is specified');

    var testArray = [1, 2, 3];
    var res = "";

    res = join(testArray)

    if (res!== "1,2,3") {
        throw Error ('should have output 1,2,3');
    }
});

tests.push(function () {
    console.log('Should join items without a seperator if an empty string is input as a separator');

    var testArray = [1, 2, 3];
    var elem = "";
    var res = "";

    res = join(testArray, elem)

    if (res!== "123") {
        throw Error ('should have output 123');
    }
});

tests.push(function () {
    console.log('Should return empty string if an array with length 0 is passed through');

    var testArray = [];
    var elem = "-";
    var res = "";

    res = join(testArray, elem)

    if (res!== "") {
        throw Error ('your string should be empty');
    }
});


tests.push(function () {
    console.log('Should fail if applied to anything but an array');

    var nums = 5;
    var elem = "-";
    var error;

    try {
        join(nums, elem);
    } catch (err) {
        error = err;
    }

    if (!error) throw Error('has not failed');

    if (error.message !== 'Invalid or unexpected token') throw Error('error message is not correct');
});

// tests.push(function () {
//     console.log('Should fail if an undeclared variable is input as a separator');

//     var nums = [1,2,3];
//     var elem = asodfij;
//     var error;

//     try {
//         join(nums, elem);
//     } catch (err) {
//         error = err;
//     }

//     if (!error) throw Error('has not failed');

//     if (error.message !== elem + 'is not defined') throw Error('error message is not correct');
// });


tests.push(function () {
    console.log('Should output a string type');

    var testArray = [1, 2, 3];
    var elem = "-";

    var res = join(testArray, elem);

    if (typeof res!== "string") {
        throw Error ('should have output string type');
    }
});


testSuite(tests);


////////////////////////////////////Tests that should be done

