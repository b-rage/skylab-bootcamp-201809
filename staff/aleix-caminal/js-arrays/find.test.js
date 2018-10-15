var findTests = [];
document.querySelector('#test-find').addEventListener('click', function() {
    testSuite(findTests);
});

findTests.push(function (){
    console.log("Should give fail if callback is not defined");

    var nums = [5, 12, 8, 130, 44];

    var respuesta = [];

    try {
        find(nums);
    } catch(err){
        respuesta = err;
    }

    if (!respuesta) throw Error ("Should give error, callback not defined");

    if (respuesta.message !== ("Callback isn't a function")) throw Error ("Fail on error message, is not the same");

});

findTests.push(function (){
    console.log("Should return undefined if not satisfy the provided testing function");

    var nums = [5, 1, 8, 3, 4];

    var respuesta = [];

    respuesta = find(nums, function (elem) { return elem > 10; });

    if (respuesta !== undefined) throw Error ("The output should be undefined");

});

findTests.push(function (){
    console.log("Should return error for empty array");

    var nums = [];

    var respuesta = [];

    try {
        find(nums, function (elem) { respuesta = elem > 10; });
    } catch(err) {
        respuesta = err
    }

    if (!respuesta) throw Error ("The array should be empty");

    if (respuesta.message !== "Arr is empty") throw Error ("Fail on error message, is not the same");

});

findTests.push(function (){
    console.log("Should return 12");

    var nums = [5, 12, 8, 130, 44];

    var respuesta = [];


    respuesta = find(nums, function (elem) { return elem > 10; });

    if (respuesta !== 12) throw Error ("The output should be 12");

});
