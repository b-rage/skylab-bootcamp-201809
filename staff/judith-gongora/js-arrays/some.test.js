console.log("TEST SOME")

var tests = [];

//TEST 1

console.log("Should give fail if callback is not defined");

tests.push(function (){

    var nums = [5, 12, 8, 130, 44];

    var error;

    try {
        some(nums);
    } catch(err){
        error = err;
    }

    if (!error) throw Error ("Should give error, callback not defined");

    if (error.message !== ("callback is not a function")) throw Error ("Fail on error message, is not the same");

});


//TEST2

console.log("Should return error for empty array");

tests.push(function (){

    var nums = [];

    var error;

    try {
        some(nums, function (elem) { return elem > 10; });
    } catch(err) {
        error = err
    }
    
    if (!error) throw Error ("The array should be empty");

    if (error.message !== "array is empty") throw Error ("Fail on error message, is not the same!");

});

//TEST4 

console.log("Should return true");

tests.push(function (){
   
    var nums = [5, 12, 8, 130, 44];

    var result;

    result = some(nums, function (elem) { return elem > 10; });
    
    if (!result) throw Error ("The output should be true");

});

testSuite(tests);