console.log('TEST pop');

var tests = [];


tests.push(function () {
    console.log("should successfully remove last item");

    var nums = [1, 2, 3];

    var res = [];



    pop(nums);
    for (var i = 0; i < nums.length; i++) {
        res[i] = nums[i];
    }

    if (res.length !== 2) throw Error("did not sucessfully remove last item");

});

tests.push(function () {
    console.log("should sucessfully return popped item");
    var nums = [1, 2, 3];
    var deleted = 3;

    var popped;


    popped = pop(nums);

    if (popped !== deleted) throw Error("function returned incorrect pop");

});

tests.push(function () {
    console.log("should fail to detect an array");

    var nums;
    var error;

    try {
        pop(nums);
    } catch (err) {
        error = err;
    }

    if (!error) throw Error("Has not failed");

    if (error.message !== "input is not an array") throw Error("error message is not correct");

});

tests.push(function () {
    console.log("should fail because of empty array");

    var nums = [];

    var error;

    try {
        pop(nums);
    } catch (err) {
        error = err;
    }

    if (!error) throw Error('should have thrown error on empty array');

    if (error.message !== 'array is empty') throw Error('should have thrown "array is empty", but got: ' + error.message);

});


tests.push(function () {
    console.log("should fail because detected more than one argument");
    var nums = [1, 2, 3];
    var t = "r";
    var error;

    try {
        pop(nums, t);
    } catch (err) {
        error = err;
    }

    if (!error) throw Error("should have thrown error on more than one arguments");

    if (error.message !== "only one argument allowed") throw Error("Should say 'only one argument allowed' but says " + error.message);

});



testSuite(tests);