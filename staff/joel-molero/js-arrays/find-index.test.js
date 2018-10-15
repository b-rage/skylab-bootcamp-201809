//TESTS

console.log("TEST FIND-INDEX")

var tests = [];

//TEST 1



tests.push(function (){
    console.log("should succeed on iterating an array and returning the correct value");

    var arr = [0,1,2,3,4,5];

    var res = [];

    res = findIndex(arr, function(num){ return num===2});

    if (res!==2) throw Error("returned incorrect index");
});

tests.push(function (){
    console.log("should fail on empty array");

    var arr = [];

    var error;

    try {
        findIndex(arr, function(num){return num===2});
    } catch (err){
        error = err;
    }

    if (!error) throw Error("has not failed");

    if (error.message !== "array is empty") throw Error("error message is not correct");
});


tests.push(function (){
    console.log("should fail on blank array");

    var arr = [ , , ];

    var error;

    try {
        findIndex(arr, function(num){num===2})
    } catch (err){
        error = err;
    }

    if (!error) throw Error("has not failed");

    if (error.message !== "array is empty") throw Error("error message is not correct")})