console.log("TEST for is-array");

var tests = [];


tests.push(function() {
    console.log("should succeed on checking the array");

    var arr = [1,2,3];

    if (isArray(arr) !== true) throw Error("returned false on checking the array")

})

tests.push(function () {
    console.log("should return false on empty array");

    var arr;

    var error;

    try {
        isArray(arr)
    } catch (err) {
        error = err;
    }

    if (isArray(arr)!== false) throw Error;

    
});

tests.push(function () {
    console.log("should fail on null input");

    var arr = null;

    if(arr !== null) throw Error("array input is not null")
});

tests.push(function () {
    console.log("should fail on undefined input");

    var arr = undefined;

    if (arr !== undefined) throw Error("array input is not undefined")
});

tests.push(function () {
    console.log("should fail on numeric input");

    var arr = 17;

    if (typeof arr !== "number") throw Error("array input is not a number")
});

tests.push(function () {
    console.log("should fail on string input");

    var arr = "array";

    if (typeof arr !== "string") throw Error("array input is not a string")
});

tests.push(function () {
    console.log("should fail on boolean input");

    var arr = true;

    if(typeof arr !== "boolean") throw Error("array input is not a boolean")
});

testSuite(tests);