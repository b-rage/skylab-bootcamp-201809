console.log('TEST reduce');

var tests = [];

tests.push(function () {
    console.log('should succeed on modification');

    var nums = [1, 2, 3];
    var res2 = [1, 2, 3];

    var res = reduce(nums, function (valorAnterior, valorActual, indice, vector) {
        return valorAnterior + valorActual;
    });
    var res2 = nums.reduce(function (valorAnterior, valorActual, indice, vector) {
        return valorAnterior + valorActual;
    });


    if (res !== res2) throw Error(res + ' does not match with ' + res2);

});

tests.push(function () {
    console.log('should fail on non-array');

    var nums, error;

    try {
        reduce(nums, function (valorAnterior, valorActual, indice, vector) {
            return valorAnterior + valorActual;
        });
    } catch (err) {
        error = err;
    }

    if (!error) throw Error('has not failed');

    if (error.message !== nums + ' is not an array') throw Error('error message is not correct');
});

tests.push(function () {
    console.log('should fail on non-function');

    var nums=[1, 2, 3], error;

    try {
        reduce(nums);
    } catch (err) {
        error = err;
    }

    if (!error) throw Error('has not failed');

    if (error.message !== 'undefined is not a function') throw Error('error message is not correct');
});

tests.push(function () {
    console.log('should fail on number instead of array');

    var nums=1, error;

    try {
        reduce(nums, function (valorAnterior, valorActual, indice, vector) {
            return valorAnterior + valorActual;
        });
    } catch (err) {
        error = err;
    }

    if (!error) throw Error('has not failed');

    if (error.message !== (nums+' is not an array')) throw Error('error message is not correct');
});

tests.push(function () {
    console.log('should fail on string instead of array');

    var nums="string", error;

    try {
        reduce(nums, function (valorAnterior, valorActual, indice, vector) {
            return valorAnterior + valorActual;
        });
    } catch (err) {
        error = err;
    }

    if (!error) throw Error('has not failed');

    if (error.message !== (nums+' is not an array')) throw Error('error message is not correct');
});

tests.push(function () {
    console.log('should fail on boolean instead of array');

    var nums=true, error;

    try {
        reduce(nums, function (valorAnterior, valorActual, indice, vector) {
            return valorAnterior + valorActual;
        });
    } catch (err) {
        error = err;
    }

    if (!error) throw Error('has not failed');

    if (error.message !== (nums+' is not an array')) throw Error('error message is not correct');
});

tests.push(function () {
    console.log('should fail on object instead of array');

    var nums={ob:"hola"}, error;

    try {
        reduce(nums, function (valorAnterior, valorActual, indice, vector) {
            return valorAnterior + valorActual;
        });
    } catch (err) {
        error = err;
    }

    if (!error) throw Error('has not failed');

    if (error.message !== (nums+' is not an array')) throw Error('error message is not correct');
});

tests.push(function () {
    console.log('should fail on function instead of array');

    var nums=function(){}, error;

    try {
        reduce(nums, function (valorAnterior, valorActual, indice, vector) {
            return valorAnterior + valorActual;
        });
    } catch (err) {
        error = err;
    }

    if (!error) throw Error('has not failed');

    if (error.message !== (nums+' is not an array')) throw Error('error message is not correct');
});

tests.push(function () {
    console.log('should fail on number instead of function');

    var nums=[1, 2, 3], error;
    var fun=1;

    try {
        reduce(nums, fun);
    } catch (err) {
        error = err;
    }

    if (!error) throw Error('has not failed');

    if (error.message !== fun+' is not a function') throw Error('error message is not correct');
});

tests.push(function () {
    console.log('should fail on string instead of function');

    var nums=[1, 2, 3], error;
    var fun="string";

    try {
        reduce(nums, fun);
    } catch (err) {
        error = err;
    }

    if (!error) throw Error('has not failed');

    if (error.message !== fun+' is not a function') throw Error('error message is not correct');
});

tests.push(function () {
    console.log('should fail on boolean instead of function');

    var nums=[1, 2, 3], error;
    var fun=true;

    try {
        reduce(nums, fun);
    } catch (err) {
        error = err;
    }

    if (!error) throw Error('has not failed');

    if (error.message !== fun+' is not a function') throw Error('error message is not correct');
});

tests.push(function () {
    console.log('should fail on array instead of function');

    var nums=[1, 2, 3], error;
    var fun=[1,2,3];

    try {
        reduce(nums, fun);
    } catch (err) {
        error = err;
    }

    if (!error) throw Error('has not failed');

    if (error.message !== fun+' is not a function') throw Error('error message is not correct');
});

tests.push(function () {
    console.log('should fail on object instead of function');

    var nums=[1, 2, 3], error;
    var fun={ob:"hola"};

    try {
        reduce(nums, fun);
    } catch (err) {
        error = err;
    }

    if (!error) throw Error('has not failed');

    if (error.message !== fun+' is not a function') throw Error('error message is not correct');
});

testSuite(tests);