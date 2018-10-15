console.log("TEST of indexOf(arr, elem):");


//array to store the next cases, and loop it with the testsuite();
var tests = [];

//test 1:
(function () {
    console.log("Test 1: should succeed on searching inside an array of strings and returning the index of the element that satisfies the condition, if it exists");
    tests.push(function () {

        var arrNums = ['uno', 'dos', 'tres', 'cuatro', 'cinco'];
        var findNumber = 'cuatro';
        var result;

        //as this test should succeed, now we don't use try and catch error!
        result = indexOf(arrNums, findNumber);

        if (result !== 3) throw Error('returned index does not match with the one expected');
    })


})(); //the function calls itself (selfie), and pushes its content to the test array;


// test 2:
(function () {
    console.log("Test 2: should succeed on searching inside an array of numbers and returning the index of the element that satisfies the condition, if it exists");

    tests.push(function () {

        var arrNums = [22, 89, 35, 47];
        var findNumber = 35;
        var result;

        result = indexOf(arrNums, findNumber);

        if (result !== 2) throw Error('returned index does not match with the one expected');

    })

})();


//test 3:
(function () {
    console.log("Test 3: fails if first parameter is not an array");

    tests.push(function () {

        var error;

        try {
            indexOf(123, "bison");
        } catch (err) {
            error = err;
        }

        //if no error thrown:
        if (!error) throw Error('should have thrown an error: ' + arr + ' is not an array!');

        //if error message wasn't the expected one:
        if (error.message !== arr + ' is not an array!') throw Error('should have thrown ' + arr + ' is not an array!, but got: ' + error.message);

    })

})();


//case 4:
(function () {
    console.log('Test 4: fails if the first parameter is empty');

    tests.push(function () {

        var error;

        try {
            indexOf([], 'word');
        } catch (err) {
            error = err;
        }

        if (!error) throw Error('should have thrown an error of having 1st argument empty');

        if (error.message !== "first parameter is an empty array") throw Error("should have thrown 'first parameter is an empty array', but got: " + error.message);
    })

})();


//case 5:
(function () {
    console.log('Test 5: fails if the second parameter is empty');

    tests.push(function () {

        var error;

        try {
            indexOf(["uno", "dos", "tres"], "");
        } catch (err) {
            error = err;
        }

        if (!error) throw Error('should have thrown an error of empty 2nd parameter');

        if (error.message !== "second parameter is empty") throw Error("should have thrown 'second parameter is empty', but got: " + error.message);

    })

})();

testSuite(tests);