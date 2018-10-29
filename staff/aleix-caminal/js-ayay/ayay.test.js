// ayay.test.js

/****************************************************************************/
/**** PUSH ******************************************************************/
/****************************************************************************/

(function() {
    console.log('TEST Ayay.prototype.push');

    var tests = [];

    tests.push(function() {
        console.log('should push values in ayay');
        var ayay = new Ayay();

        ayay.push(1);
        ayay.push(2);
        ayay.push(3);

        if (ayay.length !== 3) throw Error('ayay length does not match expected one: ' + ayay.length);

        for (var i = 0; i < ayay.length; i++)
            if (ayay[i] !== i + 1) throw Error('item does not match expected at position: ' + i);
    });

    tests.push(function () {
        console.log('should push an array inside another');

        var arr = [1, 2, 3];
        var expectedResult = [1, 2, 3, [4]]

        push(arr, [4]);

        arr.forEach((element, i) => {
            if (element.length && !(element instanceof Array)  && element[0] !== expectedResult[i][0]) throw Error('results do not match');
        });
    });

    tests.push(function () {
        console.log('should fail on non-array');

        var error;

        try {
            push();
        } catch (err) {
            error = err;
        }

        if (!error) throw Error('has not failed');
        if (error.message !== 'array is not valid') throw Error('error message is not correct');
    });

    tests.push(function () {
        console.log('should fail on empty array');

        var error;

        try {
            push([]);
        } catch (err) {
            error = err;
        }

        if (!error) throw Error('has not failed');

        if (error.message !== 'array is empty') throw Error('error message is not correct');
    });


    tests.push(function () {
        console.log('element is required');

        var arr = [1, 2, 3];
        var error;

        try {
            push(arr);
        } catch (err) {
            error = err;
        }

        if (!error) throw Error('has not failed');

        if (error.message !== 'element not defined') throw Error('error message is not correct');
    });

    tests.push(function () {
        console.log('it return an array')

        var arr = [1, 2, 3];
        var error;

        try {
            push(arr, 'SKYLAB');
        } catch (err) {
            error = err;
        }

        if (!(arr instanceof Array)) throw Error('not return array');
    });

    testSuite(tests);
})();


/****************************************************************************/
/**** FOR EACH **************************************************************/
/****************************************************************************/

(function() {
    console.log('TEST Ayay.prototype.forEach');

    var tests = [];

    tests.push(function() {
        console.log('should iterate on valid ayay');

        var ayay = new Ayay();

        ayay.push(1);
        ayay.push(2);
        ayay.push(3);

        var result = [];

        ayay.forEach(function(elem, index) { result[index] = elem * 2; });

        if (result.length !== ayay.length) throw Error('result length does not match expected one: ' + result.length);

        result.forEach(function(elem, index) {
            if (elem !== ayay[index] * 2) throw Error('item does not match expected one, at position: ' + index);
        });
    });

    testSuite(tests);
})();


/****************************************************************************/
/**** MAP *******************************************************************/
/****************************************************************************/

(function() {
    console.log('TEST Ayay.prototype.map');

    var tests = [];
    tests.push(function () {
        console.log('should succeed on iterating an array and multiply by 2');

        var nums = [1, 2, 3];
        var res = [];

        map(nums, function(element, index) {
        res[index] = element * 2;
        });

        if (res.length !== nums.length) throw Error('result length is not equal to nums length');

        res.forEach(function(element, index) {
          if (element !== (nums[index] * 2)) throw Error('element at index ' + index + ' does not match the expected value');
        });
    });

    tests.push(function () {
        console.log('should fail on non-array');

        var arr;
        var error;

        try {
        map(arr, function() {});
        } catch (err) {
        error = err;
        }

        if (!error) throw Error('has not failed');

        if (error.message !== 'array is not valid') throw Error('error message is not correct');
    });

    tests.push(function () {
        console.log('should fail on empty array');

        var arr = [];
        var error;

        try {
        map(arr, function() {});
        } catch (err) {
        error = err;
        }

        if (!error) throw Error('has not failed');

        if (error.message !== 'array is not valid') throw Error('error message is not correct');
    });

    tests.push(function () {
        console.log('should fail on non-function callback');

        var nums = [1, 2, 3];
        var error;

        try {
        map(nums, 1);
        } catch (err) {
        error = err;
        }

        if (!error) throw Error('has not failed');

        if (error.message !== 'callback is not a function') throw Error('error message is not correct');
    });

    tests.push(function () {
        console.log('should fail on empty callback');

        var nums = [1, 2, 3];
        var error;

        try {
        map(nums);
        } catch (err) {
        error = err;
        }

        if (!error) throw Error('has not failed');

        if (error.message !== 'callback is not a function') throw Error('error message is not correct');
    });

    tests.push(function () {
        console.log('should fail on non-array and non-callback');

        var error;

        try {
        map();
        } catch (err) {
        error = err;
        }

        if (!error) throw Error('has not failed');

        if (error.message !== 'array is not valid') throw Error('error message is not correct');
    });

    testSuite(tests);
})();
